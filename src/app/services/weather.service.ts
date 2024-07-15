import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";

@Injectable({
  providedIn: 'root'
})
export class WeatherService {
  private weatherApiKey = 'dc46c6834f54cf1c5340c60da0c9a6a3'
  constructor(private http: HttpClient) { }

  public getWeather(city:string){
    return this.http.get(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${this.weatherApiKey}`);
  }
}
