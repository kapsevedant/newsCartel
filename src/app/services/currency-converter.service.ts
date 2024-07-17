import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";

@Injectable({
  providedIn: 'root'
})
export class CurrencyConverterService {
  protected currencyApiKey:string = "e193ec5977c9cbdb8845538d"

  constructor(private http:HttpClient) { }

  public getConvertedCurrency(country:string){
    return this.http.get(`https://v6.exchangerate-api.com/v6/${this.currencyApiKey}/latest/${country}`);
  }
}
