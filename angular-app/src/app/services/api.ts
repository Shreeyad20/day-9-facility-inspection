import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

import { Facility } from '../models/facility';
import { Inspection } from '../models/inspection';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  private baseUrl = 'http://127.0.0.1:8000/api';

  constructor(private http: HttpClient) {}

  // Get all facilities
  getFacilities(): Observable<Facility[]> {
    return this.http.get<Facility[]>(`${this.baseUrl}/facilities`);
  }

  // Get all inspections
  getInspections(): Observable<Inspection[]> {
    return this.http.get<Inspection[]>(`${this.baseUrl}/inspections`);
  }

  // Add a new inspection
  addInspection(inspection: Inspection): Observable<Inspection> {
    return this.http.post<Inspection>(
      `${this.baseUrl}/inspections`,
      inspection
    );
  }
}
