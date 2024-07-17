import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";

@Injectable({
  providedIn: 'root'
})
export class BusinessNewsServiceService {

  private businessNewsApiKey = '4Qd3EUePkVKLhEwZbj_bemWmxe9uimfSSxpKLN8aWG8cCX7Y'
  constructor(private http: HttpClient) { }

  public getBusiness(category:string){
    return this.http.get(`https://api.currentsapi.services/v1/latest-news?category=${category}&apiKey=${this.businessNewsApiKey}`);
  }
}
