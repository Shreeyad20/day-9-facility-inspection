import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { Facility } from '../models/facility';
import { Inspection } from '../models/inspection';
import { ApiService } from '../services/api';

@Component({
  selector: 'app-inspections',
  imports: [CommonModule, FormsModule],
  templateUrl: './inspections.html',
  styleUrl: './inspections.css'
})
export class Inspections {

  facilities: Facility[] = [];

  inspection: Inspection = {
    id: 0,
    facilityId: 0,
    inspectionDate: '',
    cleanlinessScore: 0,
    wasteLevel: '',
    waterAvailability: '',
    remarks: ''
  };

  constructor(private apiService: ApiService) {
    this.loadFacilities();
  }

  loadFacilities(): void {
    this.apiService.getFacilities().subscribe({
      next: (data) => {
        this.facilities = data;
      },
      error: (error) => {
        console.error('Error loading facilities:', error);
      }
    });
  }

  submitInspection(): void {
    this.apiService.addInspection(this.inspection).subscribe({
      next: (data) => {
        console.log('Inspection added successfully:', data);
        alert('Inspection submitted successfully!');

        this.inspection = {
          id: 0,
          facilityId: 0,
          inspectionDate: '',
          cleanlinessScore: 0,
          wasteLevel: '',
          waterAvailability: '',
          remarks: ''
        };
      },
      error: (error) => {
        console.error('Error submitting inspection:', error);
        alert('Failed to submit inspection.');
      }
    });
  }
}