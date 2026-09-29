import { Facility } from './facility';

export interface Inspection {
  id: number;
  facilityId: number;
  inspectionDate: string;
  cleanlinessScore: number;
  wasteLevel: string;
  waterAvailability: string;
  remarks: string;
  facility?: Facility;
}