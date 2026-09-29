import { Routes } from '@angular/router';

import { Dashboard } from './dashboard/dashboard';
import { Facilities } from './facilities/facilities';
import { Inspections } from './inspections/inspections';
import { InspectionHistory } from './inspection-history/inspection-history';

export const routes: Routes = [
  {
    path: '',
    component: Dashboard
  },
  {
    path: 'facilities',
    component: Facilities
  },
  {
    path: 'inspections',
    component: Inspections
  },
  {
    path: 'inspection-history',
    component: InspectionHistory
  },
  {
    path: '**',
    redirectTo: ''
  }
];