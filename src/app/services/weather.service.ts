import {Injectable} from '@angular/core';
import {HttpClient} from "@angular/common/http";

@Injectable({
  providedIn: 'root'
})
export class WeatherService {

  private apiKey: string = 'cf073d70cff64f42b8e150149221405';
  private callUrl: string = 'http://api.weatherapi.com/v1/forecast.json?key=';


  constructor(private http: HttpClient) {
  }

  getWeather(city: string) {
    return this.http.get(this.callUrl + this.apiKey + '&q=' + city + '&days=3&aqi=no&alerts=no');
  }
}
