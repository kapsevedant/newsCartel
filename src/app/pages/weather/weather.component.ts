import {Component, OnInit} from '@angular/core';
import {WeatherService} from "../../services/weather.service";
import {catchError, throwError} from "rxjs";
import {HttpErrorResponse} from "@angular/common/http";

@Component({
  selector: 'app-weather',
  templateUrl: './weather.component.html',
  styleUrl: './weather.component.scss'
})
export class WeatherComponent implements OnInit {
  protected city!: string;
  protected weatherData!: any;
  protected errorMessage: string | null = null;

  constructor(private weatherService: WeatherService) {
  }

  ngOnInit() {
    this.getWeather();
  }

  protected getWeather() {
    this.errorMessage = null;

    this.weatherService.getWeather(this.city).pipe(
      catchError((error: HttpErrorResponse) => {
        if (error.status === 404) {
          this.weatherData = null;
          this.errorMessage = 'City not found. Please enter a valid city name.';
        }
        return throwError(() => new Error('Error fetching weather data.'));
      })
    ).subscribe(data => {
        this.weatherData = data;
      }
    );
  }

  protected convertKelvinToCelsius(tempKelvin: number): number {
    return parseFloat((tempKelvin - 273.15).toFixed(2));
  }

  protected convertUnixTimestampToDateTime(unixTimestamp: number): string {
    const date = new Date(unixTimestamp * 1000); // Convert from seconds to milliseconds
    const hours = date.getHours().toString().padStart(2, '0');
    const minutes = date.getMinutes().toString().padStart(2, '0');
    const seconds = date.getSeconds().toString().padStart(2, '0');
    return `${date.toDateString()} ${hours}:${minutes}:${seconds}`;
  }
}
