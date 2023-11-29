import {Injectable} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {environment} from "../../environments/environment";
import {map, Observable, tap} from "rxjs";
import {Item} from "../../../model/item";

@Injectable({
  providedIn: 'root'
})
export class ItemService {
  private _url: string;

  constructor(private _http: HttpClient) {
    this._url = `${environment.backendUrl}/items`;
  }

  getItems(): Observable<any> {
    return this._http.get<Item[]>(this._url).pipe(map(items => items.sort(function (item1, item2) {
      if (item1.name < item2.name) {
        return -1;
      }
      if (item1.name > item2.name) {
        return 1
      }
      return 0;
    })));

  }

  get url(): string {
    return this._url;
  }

  get http(): HttpClient {
    return this._http;
  }

  addItem(item: Item) {
    this._http.post<Item>(this._url, item).subscribe(() => alert("Item was added!"));
  }

  getItemDetail(itemName: String | null): Observable<Item> {
    return this._http.get<Item>(`${this._url}/${itemName}`).pipe(
      tap(_ => console.log(`fetched item with name ${itemName}`))
    );
  }
}
