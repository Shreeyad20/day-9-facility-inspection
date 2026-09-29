import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { ApiService } from '../services/api';
import { Facility } from '../models/facility';

@Component({
  selector: 'app-facilities',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './facilities.html',
  styleUrls: ['./facilities.css']
})
export class Facilities implements OnInit {

  facilities: Facility[] = [];
  searchText: string = '';

  constructor(private api: ApiService) {}

  ngOnInit(): void {
    this.loadFacilities();
  }

  loadFacilities(): void {
    this.api.getFacilities().subscribe(
      (data: Facility[]) => {
        console.log('Facilities received:', data);
        this.facilities = data;
        alert('Facilities loaded: ' + data.length);
      },
      (error: any) => {
        console.error('Error loading facilities:', error);
        alert('Failed to load facilities');
      }
    );
  }

  get filteredFacilities(): Facility[] {
    if (!this.searchText.trim()) {
      return this.facilities;
    }

    const search = this.searchText.toLowerCase();

    return this.facilities.filter((facility: any) =>
      JSON.stringify(facility).toLowerCase().includes(search)
    );
  }
}