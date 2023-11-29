import {Component, OnInit} from '@angular/core';
import {CommonModule} from '@angular/common';
import {FormBuilder, FormsModule, ReactiveFormsModule, Validators} from "@angular/forms";
import {RouterLink} from "@angular/router";
import {map, Observable} from "rxjs";
import {Item} from "../../../model/item";
import {ItemService} from "../service/item.service";
import {NameFilterPipe} from "../pipes/name-filter.pipe";

@Component({
  selector: 'app-items',
  standalone: true,
  imports: [CommonModule, FormsModule, ReactiveFormsModule, RouterLink, NameFilterPipe],
  templateUrl: './items.component.html',
  styleUrl: './items.component.css'
})
export class ItemsComponent implements OnInit {
  items: Item[] = [];
  selectedItem: Item | undefined;
  items$: Observable<Item[]>;
  searchText: string = '';
  itemForm = this.fb.group({
    name: ['', Validators.required],
    description: ['', Validators.required],
    price: [0, Validators.required],
    amountInStock: [0, Validators.required]
  })

  constructor(private itemService: ItemService, private fb: FormBuilder) {
    this.items$ = itemService.getItems().pipe(map(items => items || []));
  }
  ngOnInit() {
  }
  selectItem(item: Item) {
    this.selectedItem = item;
  }
  addItem() {
    this.itemService.addItem(this.itemForm.value as Item);
    window.location.reload();
  }
}
