import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ApixuService {

  constructor(private http: HttpClient) { }

  getWeather(location){
    return this.http.get('https://api.apixu.com/v1/current.json?key=9de07428f9a247d5b1e214249190606&q=' + location
    );
  }
}
