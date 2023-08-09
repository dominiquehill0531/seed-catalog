import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Plant } from '../_models/plant';

@Injectable({
  providedIn: 'root'
})
export class PlantService {

  private baseUrl = "http://localhost:8080/api/plants";
  private httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json' })
  }

  constructor(private httpClient: HttpClient) { }

  createPlant(newPlant: Plant): Observable<Object> {
    console.log(`Creating ${newPlant.name}...`);
    return this.httpClient.post(`${this.baseUrl}/create`, newPlant, this.httpOptions);
  }
}
