const express = require('express');
const cors = require('cors');

const app = express();
const PORT = 8000;

app.use(cors());
app.use(express.json());

const facilities = [
  {
    id: 1,
    name: 'City Hospital',
    location: 'Amravati',
    type: 'Hospital'
  },
  {
    id: 2,
    name: 'Government School',
    location: 'Nagpur',
    type: 'School'
  },
  {
    id: 3,
    name: 'Community Health Center',
    location: 'Akola',
    type: 'Health Center'
  },
  {
    id: 4,
    name: 'Municipal Office',
    location: 'Amravati',
    type: 'Government Office'
  },
  {
    id: 5,
    name: 'Primary Health Center',
    location: 'Wardha',
    type: 'Health Center'
  }
];

let inspections = [
  {
    id: 1,
    facilityId: 1,
    facility: {
      id: 1,
      name: 'City Hospital'
    },
    inspectionDate: '2026-09-20',
    cleanlinessScore: 85,
    wasteLevel: 'Low',
    waterAvailability: 'Available',
    remarks: 'Facility is clean and well maintained.'
  },
  {
    id: 2,
    facilityId: 2,
    facility: {
      id: 2,
      name: 'Government School'
    },
    inspectionDate: '2026-09-21',
    cleanlinessScore: 78,
    wasteLevel: 'Medium',
    waterAvailability: 'Available',
    remarks: 'Some improvement required.'
  },
  {
    id: 3,
    facilityId: 3,
    facility: {
      id: 3,
      name: 'Community Health Center'
    },
    inspectionDate: '2026-09-22',
    cleanlinessScore: 90,
    wasteLevel: 'Low',
    waterAvailability: 'Available',
    remarks: 'Very good condition.'
  },
  {
    id: 4,
    facilityId: 4,
    facility: {
      id: 4,
      name: 'Municipal Office'
    },
    inspectionDate: '2026-09-23',
    cleanlinessScore: 82,
    wasteLevel: 'Low',
    waterAvailability: 'Available',
    remarks: 'Good maintenance.'
  },
  {
    id: 5,
    facilityId: 5,
    facility: {
      id: 5,
      name: 'Primary Health Center'
    },
    inspectionDate: '2026-09-24',
    cleanlinessScore: 75,
    wasteLevel: 'Medium',
    waterAvailability: 'Limited',
    remarks: 'Water availability needs attention.'
  }
];

// Home
app.get('/', (req, res) => {
  res.json({
    success: true,
    message: 'Day 9 Facility Inspection API is running'
  });
});

// Get facilities
app.get('/api/facilities', (req, res) => {
  res.json(facilities);
});

// Get inspections
app.get('/api/inspections', (req, res) => {
  res.json(inspections);
});

// Add inspection
app.post('/api/inspections', (req, res) => {

  const facility = facilities.find(
    f => f.id == req.body.facilityId
  );

  const newInspection = {
    id: inspections.length + 1,
    facilityId: req.body.facilityId,
    facility: facility || null,
    inspectionDate: req.body.inspectionDate,
    cleanlinessScore: req.body.cleanlinessScore,
    wasteLevel: req.body.wasteLevel,
    waterAvailability: req.body.waterAvailability,
    remarks: req.body.remarks
  };

  inspections.push(newInspection);

  res.status(201).json(newInspection);
});

app.listen(PORT, () => {
  console.log(`Day 9 API running at http://127.0.0.1:${PORT}`);
});