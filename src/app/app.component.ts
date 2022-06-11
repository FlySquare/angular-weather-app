import {Component, OnInit} from '@angular/core';
import {WeatherService} from "./services/weather.service";
import { DatePipe } from "@angular/common";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers: [DatePipe]
})
export class AppComponent {
  defaultCity: string = localStorage.getItem('defaultCity') ?? 'Yalova';
  date0 = new Date();
  date1 = new Date(this.date0);
  date2 = new Date(this.date1);
  cloudData: any = ['cloud','cloudy']
  rainData: any = ['rain','rainy']
  sunData: any = ['sun','sunny']
  snowData: any = ['snow','snowy']
  currentDate:any = [];
  weatherData: any = {};
  cities: string[] = [
    'Yalova',
    'Istanbul',
    'Ankara',
    'Izmir',
    'London',
    'Paris',
    'Berlin',
    'Moscow',
    'Rome',
    'Madrid',
    'Barcelona',
    'Lisbon',
    'Bucharest',
    'Budapest',
    'Vienna',
    'Prague',
    'Warsaw',
    'Copenhagen',
    'Oslo',
    'Stockholm',
    'Helsinki',
    'Bergen',
    'Trondheim',
    'Stavanger',
    'Larvik',
    ];


  constructor(private weatherService: WeatherService,private datePipe: DatePipe) {
    this.currentDate = [
      [
        this.datePipe.transform(this.date0, 'dd MMM yyyy'),
        this.datePipe.transform(this.date0, 'EEEE'),
        this.datePipe.transform(this.date0, 'EEE')
      ],
      [this.datePipe.transform(this.date1.setDate(this.date0.getDate() + 1), 'EEE')],
      [this.datePipe.transform(this.date2.setDate(this.date1.getDate() + 1), 'EEE')]
    ]
  }

  ngOnInit(): void {
    this.getLocation(this.defaultCity);
  }

  getLocation(city:string) {
    this.weatherService.getWeather(city).subscribe((data: any) => {
      localStorage.setItem('defaultCity',city);
      this.weatherData = data;
    });
  }

}
