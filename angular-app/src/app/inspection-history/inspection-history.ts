import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

import { Inspection } from '../models/inspection';
import { ApiService } from '../services/api';

@Component({
  selector: 'app-inspection-history',
  imports: [CommonModule],
  templateUrl: './inspection-history.html',
  styleUrl: './inspection-history.css'
})
export class InspectionHistory {

  inspections: Inspection[] = [];

  constructor(private apiService: ApiService) {
    this.loadInspections();
  }

  loadInspections(): void {
    this.apiService.getInspections().subscribe({
      next: (data) => {
        this.inspections = data;
      },
      error: (error) => {
        console.error('Error loading inspection history:', error);
      }
    });
  }
}
