import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {environment} from "../../environments/environment";

@Injectable({
  providedIn: 'root'
})
export class ItemService {
  private _url: string;

  constructor(private _http: HttpClient) {
    this._url = `${environment.backendUrl}/items`;
  }}
