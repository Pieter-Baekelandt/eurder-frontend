import {Routes} from '@angular/router';
import {HomeComponent} from "./home/home.component";
import {ItemsComponent} from "./items/items.component";
import {CustomersComponent} from "./customers/customers.component";

export const routes: Routes = [
  {
    path: '',
    component: HomeComponent,
    title: 'Home page',
  },
  {
    path: 'items',
    component: ItemsComponent
  },
  {
    path: 'customers',
    component: CustomersComponent
  }
]
