import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from "@angular/common/http";
import {CropDTO} from "../../../../components/crop/dto/CropDTO";
import {Observable} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class ClimateService {

  constructor(private http: HttpClient) { }

  getClimatedata(value: any):Observable<any>  {
    return this.http.post('http://api.weatherapi.com/v1/current.json?key=76da0fbd5bf24f12863105534220206&q='+value+'&aqi=yes', {
      headers:new HttpHeaders({

      })
    })
  }
}
