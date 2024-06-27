import { Injectable } from '@angular/core';
import {environment} from "../../../../environments/environment";
import {HttpClient, HttpHeaders} from "@angular/common/http";
import {Observable} from "rxjs";
import {CropDTO} from "../dto/CropDTO";

@Injectable({
  providedIn: 'root'
})
export class CRecommendService {

  Url = environment.baseUrl;


  constructor(private http: HttpClient) { }

  getCropData(cropDTO: CropDTO):Observable<any>  {
    return this.http.post(this.Url+'/predict_crop', {
      N: cropDTO.N,
      P: cropDTO.P,
      K: cropDTO.K,
      temperature: cropDTO.temperature,
      humidity: cropDTO.humidity,
      ph: cropDTO.ph,
      rainfall: cropDTO.rainfall,
      headers:new HttpHeaders({

      })
    })
  }

}
