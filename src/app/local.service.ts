// import { Injectable } from '@angular/core';
// import { HttpClient } from '@angular/common/http';
// import { Observable } from 'rxjs';
// import { City } from './city';

import { Injectable } from '@angular/core';
import { City } from './city';
import { HttpClient } from '@angular/common/http';
import { Observable, pipe, of } from 'rxjs';
import { catchError } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class LocalService {

  constructor(private http:HttpClient) { }
  apiUrl:string;

  getByCity(city): Observable<City[]>{
    this.apiUrl = `https://api.openweathermap.org/data/2.5/weather?appid=0076221b77ce031daedfba0615745def&units=metric&q=${city}`;
    return this.http.get<City[]>(this.apiUrl)
  }
}
