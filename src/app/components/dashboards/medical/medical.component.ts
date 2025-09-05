
import { Component } from '@angular/core';
import { SharedModule } from '../../../shared/sharedmodule';
import { NgbDropdownModule, NgbModule, NgbTooltipModule } from '@ng-bootstrap/ng-bootstrap';
import { ApexChartComponent } from '../../../@spk/apex-chart/apex-chart.component';
import { SpkReusableTablesComponent } from '../../../@spk/spk-reusable-tables/spk-reusable-tables.component';
import { SpkDropdownsComponent } from '../../../@spk/reusable-ui-elements/spk-dropdowns/spk-dropdowns.component';
import { SpkMedicalComponent } from '../../../@spk/reusable-dashboards/spk-medical/spk-medical.component';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
@Component({
  selector: 'app-medical',
  standalone: true,
  imports: [SharedModule,NgbDropdownModule,NgbTooltipModule,NgbModule,ApexChartComponent,SpkReusableTablesComponent,SpkDropdownsComponent,SpkMedicalComponent,CommonModule,FormsModule],
  templateUrl: './medical.component.html',
  styleUrl: './medical.component.scss'
})
export class MedicalComponent {
chartOptions:any=
{
series: [
  
  {
    type: "line",
    name: "This Year",
    data: [15, 30, 22, 49, 32, 45, 30, 45, 65, 45, 25, 45],
  },
  {
    type: "line",
    name: "Previous Year",
    data: [8, 40, 15, 32, 45, 30, 20, 25, 18, 23, 20, 40],
  }
],
chart: {
  type: "line",
  height: 293,
  toolbar: {
    show: false
  },
  zoom: {
    enabled: false
  },
},
plotOptions: {
  bar: {
    columnWidth: "40%",
    borderRadius: 4,
  }
},
colors: [
  "var(--primary07)",
  "rgba(244, 110, 244, 1)",
],
fill: {
  type: 'solid',
  gradient: {
    shadeIntensity: 1,
    opacityFrom: 0.4,
    opacityTo: 0.1,
    stops: [0, 90, 100],
  }
},
dataLabels: {
  enabled: false,
},
legend: {
  show: true,
  position: "top",
},
stroke: {
  curve: 'smooth',
  width: [2, 2],
  lineCap: 'round',
  dashArray: [4, 0]
},
grid: {
  borderColor: "#edeef1",
  strokeDashArray: 4,
  xaxis: {
    lines: {
      show: true
    }
  },
  yaxis: {
    lines: {
      show: false
    }
  }
},
yaxis: {
  axisBorder: {
    show: true,
    color: "rgba(119, 119, 142, 0.05)",
    offsetX: 0,
    offsetY: 0,
  },
  axisTicks: {
    show: true,
    borderType: "solid",
    color: "rgba(119, 119, 142, 0.05)",
    width: 6,
    offsetX: 0,
    offsetY: 0,
  },
},
xaxis: {
  type: "month",
  categories: [
    "Jan",
    "Feb",
    "Mar",
    "Apr",
    "May",
    "Jun",
    "Jul",
    "Aug",
    "sep",
    "oct",
    "nov",
    "dec",
  ],
  axisBorder: {
    show: false,
    color: "rgba(119, 119, 142, 0.05)",
    offsetX: 0,
    offsetY: 0,
  },
  axisTicks: {
    show: false,
    borderType: "solid",
    color: "rgba(119, 119, 142, 0.05)",
    width: 6,
    offsetX: 0,
    offsetY: 0,
  },
  labels: {
    rotate: -90,
  },
},
tooltip: {
  enabled: true,
  theme: "dark",
}
  }
  chartOptions1:any={
    series: [
      {
        name: "Male",
        data: [80, 50, 30, 40, 100, 20, 80],
      },
      {
        name: "Female",
        data: [20, 100, 60, 50, 50, 80, 33],
      },
    ],
    chart: {
      height: 216,
      type: "radar",
      toolbar: {
        show: false,
      },
    },
    colors: ["rgba(244, 110, 244, 0.1)", "var(--primary01)"],
    stroke: {
      width: 1.5,
      colors: ["rgb(244, 110, 244)", "var(--primary-color)"],
    },
    fill: {
      opacity: 0.1,
    },
    markers: {
      size: 0,
    },
    legend: {
      show: false,
      offsetX: 0,
      offsetY: 0,
      fontSize: "12px",
      markers: {
        width: 6,
        height: 6,
        strokeWidth: 0,
        strokeColor: "#fff",
        fillColors: undefined,
        radius: 5,
        customHTML: undefined,
        onClick: undefined,
        offsetX: 0,
        offsetY: 0,
      },
    },
    xaxis: {
      categories: ["Cardiology", "Pediatrics", "Orthopedic", "Neurology", "Psychiatry", "Radiology", "Others"],
      axisBorder: { show: false },
    },
    yaxis: {
      axisBorder: { show: false },
    },
    grid: {
      padding: {
        bottom: -25
      }
    },
  }
  statsData = [
    {
      iconBgColor: 'bg-primary',
      roundBgClass: 'total-pateints',
      iconSvg: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 256 256"><rect width="256" height="256" fill="none"/><circle cx="152" cy="48" r="24" opacity="0.2"/><circle cx="152" cy="48" r="24" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="16"/><path d="M48,129s56-52.65,88-24.87C153.94,119.67,168,144,208,144" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="16"/><polyline points="152 232 152 176 109.54 145.67" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="16"/><line x1="129.53" y1="99.69" x2="72" y2="232" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="16"/></svg>`,
      title: 'Total Patients',
      value: '1.2K',
      change: 0.67,
      changePercentage: 0.67,
      label: 'This Year'
    },
    {
      iconBgColor: 'bg-secondary',
      roundBgClass: 'appointments',
      iconSvg: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 256 256"><rect width="256" height="256" fill="none"/><path d="M208,40H48a8,8,0,0,0-8,8V208a8,8,0,0,0,8,8H208a8,8,0,0,0,8-8V48A8,8,0,0,0,208,40ZM57.78,216A72,72,0,0,1,128,160a40,40,0,1,1,40-40,40,40,0,0,1-40,40,72,72,0,0,1,70.22,56Z" opacity="0.2"/><circle cx="128" cy="120" r="40" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="16"/><rect x="40" y="40" width="176" height="176" rx="8" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="16"/><path d="M57.78,216a72,72,0,0,1,140.44,0" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="16"/></svg>`,
      title: 'Appointments',
      value: '256',
      change: -1.44,
      changePercentage: 1.44,
      label: 'This Year'
    },
    {
      iconBgColor: 'bg-success',
      roundBgClass: 'available-doctors',
      iconSvg: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 256 256"><rect width="256" height="256" fill="none"/><circle cx="200" cy="152" r="32" opacity="0.2"/><circle cx="200" cy="152" r="12"/><circle cx="200" cy="152" r="32" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="16"/><path d="M96,136v48a40,40,0,0,0,40,40h24a40,40,0,0,0,40-40h0" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="16"/><path d="M128,32h16a8,8,0,0,1,8,8V79.17c0,30.77-24.48,56.43-55.26,56.83A56,56,0,0,1,40,80V40a8,8,0,0,1,8-8H64" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="16"/></svg>`,
      title: 'Available Doctors',
      value: '53',
      change: 2.75,
      changePercentage: 2.75,
      label: 'This Year'
    },
    {
      iconBgColor: 'bg-orange',
      roundBgClass: 'available-rooms',
      iconSvg: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 256 256"><rect width="256" height="256" fill="none"/><path d="M48,40H208a8,8,0,0,1,8,8V200a0,0,0,0,1,0,0H40a0,0,0,0,1,0,0V48A8,8,0,0,1,48,40Z" opacity="0.2"/><line x1="128" y1="40" x2="128" y2="224" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="16"/><line x1="160" y1="72" x2="184" y2="72" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="16"/><line x1="160" y1="104" x2="184" y2="104" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="16"/><line x1="72" y1="72" x2="96" y2="72" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="16"/><line x1="72" y1="104" x2="96" y2="104" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="16"/><path d="M48,40H208a8,8,0,0,1,8,8V200a0,0,0,0,1,0,0H40a0,0,0,0,1,0,0V48A8,8,0,0,1,48,40Z" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="16"/><line x1="40" y1="200" x2="40" y2="224" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="16"/><line x1="216" y1="200" x2="216" y2="224" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="16"/></svg>`,
      title: 'Available Rooms',
      value: '142',
      change: 1.16,
      changePercentage: 1.16,
      label: 'This Year'
    }
  ];
  appointments  = [
    {
      id: 'ASPK101',
      title: 'General Checkup',
      time: '10:25am',
      date: '13 Feb 2024',
      status: 'Completed',
      iconClass: 'ti-stethoscope',
      bgClass: 'bg-primary-transparent'
    },
    {
      id: 'ASPK121',
      title: 'Follow-up appointment',
      time: '11:15am',
      date: '13 Feb 2024',
      status: 'Rescheduled',
      iconClass: 'ti-report-medical',
      bgClass: 'bg-secondary-transparent'
    },
    {
      id: 'ASPK114',
      title: 'Heart Checkup',
      time: '02:30pm',
      date: '13 Feb 2024',
      status: 'Scheduled',
      iconClass: 'ti-heartbeat',
      bgClass: 'bg-success-transparent'
    },
    {
      id: 'ASPK132',
      title: 'Blood test results review',
      time: '03:45pm',
      date: '13 Feb 2024',
      status: 'Cancelled',
      iconClass: 'ti-vaccine',
      bgClass: 'bg-orange-transparent'
    },
    {
      id: 'ASPK115',
      title: 'Dental Cleanup',
      time: '10:15am',
      date: '14 Feb 2024',
      status: 'Completed',
      iconClass: 'ti-dental',
      bgClass: 'bg-info-transparent'
    }
  ];
  doctors = [
    {
      id: '1',
      name: 'Dr. Smith',
      specialization: 'Cardiology',
      availability: 'Available',
      imageUrl: './assets/images/faces/doctors/1.jpg'
    },
    {
      id: '2',
      name: 'Dr. Johnson',
      specialization: 'Orthopedics',
      availability: 'Available',
      imageUrl: './assets/images/faces/doctors/2.jpg'
    },
    {
      id: '3',
      name: 'Dr. Davis',
      specialization: 'Dermatology',
      availability: 'Not Available',
      imageUrl: './assets/images/faces/doctors/3.jpg'
    },
    {
      id: '4',
      name: 'Dr. Miller',
      specialization: 'Neurology',
      availability: 'Available',
      imageUrl: './assets/images/faces/doctors/4.jpg'
    },
    {
      id: '5',
      name: 'Dr. Anderson',
      specialization: 'Ophthalmology',
      availability: 'Available',
      imageUrl: './assets/images/faces/doctors/5.jpg'
    },
    {
      id: '6',
      name: 'Dr. Martinez',
      specialization: 'Gastroenterology',
      availability: 'Not Available',
      imageUrl: './assets/images/faces/doctors/6.jpg'
    }
  ];
  treatments = [
    {
      id: '1',
      name: 'Cardiology',
      doctorsCount: 120,
      iconClass: 'ti-heartbeat',
      bgColor: 'bg-primary',
      timings: '10:00AM - 6:00PM'
    },
    {
      id: '2',
      name: 'Pediatrics',
      doctorsCount: 150,
      iconClass: 'ti-baby-carriage',
      bgColor: 'bg-secondary',
      timings: '9:00AM - 12:00PM'
    },
    {
      id: '3',
      name: 'Orthopedic',
      doctorsCount: 132,
      iconClass: 'ti-bone',
      bgColor: 'bg-success',
      timings: '11:00AM - 4:00PM'
    },
    {
      id: '4',
      name: 'Neurology',
      doctorsCount: 16,
      iconClass: 'ti-brain',
      bgColor: 'bg-info',
      timings: '1:00PM - 7:00PM'
    },
    {
      id: '5',
      name: 'Psychiatry',
      doctorsCount: 132,
      iconClass: 'ti-brand-debian',
      bgColor: 'bg-warning',
      timings: '12:00PM - 6:00PM'
    },
    {
      id: '6',
      name: 'Gastroenterology',
      doctorsCount: 173,
      iconClass: 'ti-activity-heartbeat',
      bgColor: 'bg-danger',
      timings: '11:00PM - 7:00PM'
    }
  ];

  AppointmentsHeader = [
   {header:'Name'},
   {header:'ID'},
   {header:'Date'},
   {header:'Status'},
   {header:'Actions'}
  ]
  appointmentstable  = [
    {
      id: '#SPK101',
      treatmentName: 'General Checkup',
      treatmentCode: '#SPK101',
      iconName:'stethoscope',
      appointmentDate: '22 Jan 2024',
      status: 'completed',
      statusClass: 'bg-primary-transparent'
    },
    {
      id: '#SPK121',
      treatmentName: 'Follow-up appointment',
      treatmentCode: '#SPK121',
      iconName:'report-medical',
      appointmentDate: '12 Feb 2024',
      status: 'completed',
      statusClass: 'bg-secondary-transparent'
    },
    {
      id: '#SPK114',
      treatmentName: 'Heart Checkup',
      treatmentCode: '#SPK114',
      iconName:'heartbeat',
      appointmentDate: '20 Dec 2024',
      status: 'ReScheduled',
      statusClass: 'bg-success-transparent'
    },
    {
      id: '#SPK132',
      treatmentName: 'Blood test results review',
      treatmentCode: '#SPK132',
      iconName:'vaccine',
      appointmentDate: '09 Oct 2024',
      status: 'cancelled',
      statusClass: 'bg-info-transparent'
    },
    {
      id: '#SPK115',
      treatmentName: 'Vaccination',
      treatmentCode: '#SPK115',
      iconName:'vaccine-bottle',
      appointmentDate: '22 Nov 2024',
      status: 'Completed',
      statusClass: 'bg-primary-transparent'
    },
    {
      id: '#SPK115',
      treatmentName: 'Dental Cleanup',
      treatmentCode: '#SPK115',
      iconName:'dental',
      appointmentDate: '22 Nov 2024',
      status: 'Scheduled',
      statusClass: 'bg-danger-transparent'
    }
  ];
  PatientsHeader = [
  {header:'Patient ID'},
  {header:'Name'},
  {header:'Gender'},
  {header:'Contact Number'},
  {header:'Last Appointment'},
  {header:'Medical History'},
  {header:'Next Appointment'},
  {header:'Action'}
  ]
  allTasksChecked: boolean = false;

  patients  = [
    {
      id: 'SPK-9ABC',
      checked:false,
      patientName: 'Jhon Doe',
      gender: 'Male',
      contact: '123-456-7890',
      appointmentDate: '2024-10-20',
      condition: 'Hypertension',
      conditionClass: 'bg-primary-transparent',
      lastVisit: '2024-03-15',
      avatar: './assets/images/faces/11.jpg'
    },
    {
      id: 'SPK-3SFW',
      checked:true,
      patientName: 'Jane Smith',
      gender: 'Female',
      contact: '987-654-3210',
      appointmentDate: '2024-09-15',
      condition: 'Diabetes',
      conditionClass: 'bg-secondary-transparent',
      lastVisit: '2024-02-28',
      avatar: './assets/images/faces/2.jpg'
    },
    {
      id: 'SPK-6SKF',
      checked:false,
      patientName: 'Robert Jhonson',
      gender: 'Male',
      contact: '456-789-0123',
      appointmentDate: '2024-11-05',
      condition: 'Asthma',
      conditionClass: 'bg-success-transparent',
      lastVisit: '2024-04-10',
      avatar: './assets/images/faces/12.jpg'
    },
    {
      id: 'SPK-3ESD',
      checked:true,
      patientName: 'Emiley Davis',
      gender: 'Female',
      contact: '789-012-3456',
      appointmentDate: '2024-08-12',
      condition: 'Allergies',
      conditionClass: 'bg-orange-transparent',
      lastVisit: '2024-01-20',
      avatar: './assets/images/faces/5.jpg'
    },
    {
      id: 'SPK-3KSE',
      checked:true,
      patientName: 'William Martinez',
      gender: 'Male',
      contact: '234-567-8901',
      appointmentDate: '2024-12-08',
      condition: 'General',
      conditionClass: 'bg-info-transparent',
      lastVisit: '2024-05-05',
      avatar: './assets/images/faces/11.jpg'
    },
    {
      id: 'SPK-4DFS',
      checked:false,
      patientName: 'Sarah Wilson',
      gender: 'Female',
      contact: '567-890-1234',
      appointmentDate: '2024-07-25',
      condition: 'High Cholesterol',
      conditionClass: 'bg-warning-transparent',
      lastVisit: '2024-03-01',
      avatar: './assets/images/faces/4.jpg'
    }
  ];

}
