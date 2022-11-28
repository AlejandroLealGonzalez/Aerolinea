import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Form_Data } from '../config/form-data';
import { JourneyModel } from '../models/journey.model';

@Injectable({
  providedIn: 'root'
})
export class JourneysService {
  url : string = Form_Data.RUTASVUELOS;
  constructor(private http: HttpClient) { }

  public getRutas(): Observable<JourneyModel[]>{
    return this.http.get<JourneyModel[]>(this.url);
  }

}
