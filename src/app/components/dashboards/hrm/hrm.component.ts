
import { Component } from '@angular/core';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { SharedModule } from '../../../shared/sharedmodule';
import { ApexChartComponent } from '../../../@spk/apex-chart/apex-chart.component';
import { CommonModule } from '@angular/common';
import { SpkReusableTablesComponent } from '../../../@spk/spk-reusable-tables/spk-reusable-tables.component';
import { SpkDropdownsComponent } from '../../../@spk/reusable-ui-elements/spk-dropdowns/spk-dropdowns.component';
import { SpkHrmDashboardComponent } from '../../../@spk/reusable-dashboards/spk-hrm-dashboard/spk-hrm-dashboard.component';

@Component({
  selector: 'app-hrm',
  standalone: true,
  imports: [NgbModule,SharedModule,ApexChartComponent,SpkReusableTablesComponent,SpkHrmDashboardComponent,CommonModule,SpkDropdownsComponent],
  templateUrl: './hrm.component.html', 
  styleUrl: './hrm.component.scss'
})
export class HrmComponent {
chartOptions:any={
  series: [
    {
      name: "Hired",
      data: [44, 42, 57, 86, 58, 55, 70, 43, 23, 54, 77, 34],
    },
    {
      name: "Rejected",
      data: [-34, -22, -37, -56, -21, -35, -60, -34, -56, -78, -89, -53],
    },
  ],
  chart: {
    toolbar: {
      show: false,
    },
    type: "bar",
    fontFamily: "'Poppins', sans-serif",
    height: 320,
    stacked: true,
  },
  colors: ["rgb(244, 110, 244)", "var(--primary-color)"],
  plotOptions: {
    bar: {
      columnWidth: "15%",
      borderRadiusApplication: 'around',
      borderRadiusWhenStacked: 'all',
      borderRadius: 2,
    }
  },
  dataLabels: {
    enabled: false,
  },
  stroke: {
    show: true,
    width: 2,
    endingShape: 'rounded',
    colors: ['transparent'],
  },
  legend: {
    show: true,
    position: 'bottom',
    offsetY: 10,
    fontSize: "13px",
    markers: {
      size: 4,
      shape: 'circle',
    },
  },
  grid: {
    borderColor: "rgba(0,0,0,0.1)",
    strokeDashArray: 3,
    xaxis: {
      lines: {
        show: false,
      },
    },
  },
  xaxis: {
    axisBorder: {
      show: false,
    },
    categories: [
      "Jan",
      "Feb",
      "Mar",
      "Apr",
      "May",
      "Jun",
      "Jul",
      "Aug",
      "Sep",
      "Oct",
      "Nov",
      "Dec",
    ],

  },
  yaxis: {
    tickAmount: 4,
  },
}
chartOptions1:any={
  series: [
    {
      data: [47, 45, 54, 38, 56, 24, 65, 31, 37, 39, 62, 51, 35, 41, 35, 27, 53, 53, 61, 27, 54, 43, 19, 46],
    },
  ],
  chart: {
    type: 'area',
    height: 50,
    sparkline: {
      enabled: true,
    },
  },
  stroke: {
    curve: 'smooth',
    width: 1.5,
  },
  fill: {
    type: 'gradient',
    gradient: {
      opacityFrom: 0.5,
      opacityTo: 0.2,
      stops: [0, 60],
      colorStops: [
        [
          {
            offset: 0,
            color: 'var(--primary04)',
            opacity: 1
          },
          {
            offset: 60,
            color: 'var(--primary02)',
            opacity: 1
          },
          {
            offset: 100,
            color: 'rgba(121, 97, 245, 0)',
            opacity: 1
          }
        ],
      ]
    },
  },
  colors: ["var(--primary-color)"],
  tooltip: {
    fixed: {
      enabled: false,
    },
    x: {
      show: false,
    },
    y: {
      title: {
        formatter: function () {
          return "";
        },
      },
    },
  },
}
chartOptions2:any={
  series: [
    {
      data: [47, 45, 54, 38, 56, 24, 65, 31, 37, 39, 62, 51, 35, 41, 35, 27, 53, 53, 61, 27, 54, 43, 19, 46],
    },
  ],
  chart: {
    type: 'area',
    height: 50,
    sparkline: {
      enabled: true,
    },
  },
  stroke: {
    curve: 'smooth',
    width: 1.5,
  },
  fill: {
    type: 'gradient',
    gradient: {
      opacityFrom: 0.5,
      opacityTo: 0.2,
      stops: [0, 60],
      colorStops: [
        [
          {
            offset: 0,
            color: 'rgba(133, 204, 65, 0.4)',
            opacity: 1
          },
          {
            offset: 60,
            color: 'rgba(133, 204, 65, 0.2)',
            opacity: 1
          },
          {
            offset: 100,
            color: 'rgba(133, 204, 65, 0)',
            opacity: 1
          }
        ],
      ]
    },
  },
  colors: ["rgb(133, 204, 65)"],
  tooltip: {
    fixed: {
      enabled: false,
    },
    x: {
      show: false,
    },
    y: {
      title: {
        formatter: function () {
          return "";
        },
      },
    },
  },
}
chartOptions3:any={
  series: [
    {
      data: [47, 45, 54, 38, 56, 24, 65, 31, 37, 39, 62, 51, 35, 41, 35, 27, 53, 53, 61, 27, 54, 43, 19, 46],
    },
  ],
  chart: {
    type: 'area',
    height: 50,
    sparkline: {
      enabled: true,
    },
  },
  stroke: {
    curve: 'smooth',
    width: 1.5,
  },
  fill: {
    type: 'gradient',
    gradient: {
      opacityFrom: 0.5,
      opacityTo: 0.2,
      stops: [0, 60],
      colorStops: [
        [
          {
            offset: 0,
            color: 'rgba(40, 200, 235, 0.4)',
            opacity: 1
          },
          {
            offset: 60,
            color: 'rgba(40, 200, 235, 0.2)',
            opacity: 1
          },
          {
            offset: 100,
            color: 'rgba(40, 200, 235, 0)',
            opacity: 1
          }
        ],
      ]
    },
  },
  colors: ["rgb(40, 200, 235)"],
  tooltip: {
    fixed: {
      enabled: false,
    },
    x: {
      show: false,
    },
    y: {
      title: {
        formatter: function () {
          return "";
        },
      },
    },
  },
}
chartOptions4:any={
  series: [
    {
      data: [47, 45, 54, 38, 56, 24, 65, 31, 37, 39, 62, 51, 35, 41, 35, 27, 53, 53, 61, 27, 54, 43, 19, 46],
    },
  ],
  chart: {
    type: 'area',
    height: 50,
    sparkline: {
      enabled: true,
    },
  },
  stroke: {
    curve: 'smooth',
    width: 1.5,
  },
  fill: {
    type: 'gradient',
    gradient: {
      opacityFrom: 0.5,
      opacityTo: 0.2,
      stops: [0, 60],
      colorStops: [
        [
          {
            offset: 0,
            color: 'rgba(244, 110, 244, 0.7)',
            opacity: 1
          },
          {
            offset: 60,
            color: 'rgba(244, 110, 244, 0.3)',
            opacity: 1
          },
          {
            offset: 100,
            color: 'rgba(244, 110, 244, 0)',
            opacity: 1
          }
        ],
      ]
    },
  },
  colors: ["rgb(244, 110, 244)"],
  tooltip: {
    fixed: {
      enabled: false,
    },
    x: {
      show: false,
    },
    y: {
      title: {
        formatter: function () {
          return "";
        },
      },
    },
  },
}
chartOptions5:any={
  series: [500, 350, 150],
  chart: {
    width: 310,
    type: 'polarArea'
  },
  labels: ['Male', 'Female', 'Others'],
  fill: {
    opacity: 0.9
  },
  stroke: {
    width: 1,
    colors: undefined
  },
  colors: ["var(--primary-color)", "rgb(40, 200, 235)", "rgb(133, 204, 65)"],
  yaxis: {
    show: false
  },
  legend: {
    position: 'right',
    offsetY: 30,
    offsetX: -30,
    markers: {
      size: 5,
      shape: "circle",
      strokeWidth: 0
    }
  },
}
cardsData = [
  {
    title: 'Total Employees',
    value: '12,116',
    percentage: '2.5',
    chartOptions: this.chartOptions1,
    isIncrease: true
  },
  {
    title: 'Total Job Applied',
    value: '15,784',
    percentage: '1.5',
    chartOptions: this.chartOptions2,
    isIncrease: false
  },
  {
    title: 'Total Compensation',
    value: '$56,784',
    percentage: '6.0',
    chartOptions: this.chartOptions3,
    isIncrease: true
  },
  {
    title: 'Annual Compensation',
    value: '$6.8k',
    percentage: '6.0',
    chartOptions: this.chartOptions4,
    isIncrease: true
  }
];
events = [
  { date: '02', day: 'Mon', title: 'You have an announcement', time: '10:00AM', type: 'Announcement', color: 'bg-primary-transparent' },
  { date: '08', day: 'Tue', title: 'National holiday', time: '', type: 'Holiday', color: 'bg-success-transparent' },
  { date: '12', day: 'Wed', title: 'John pup birthday', time: '09:00AM', type: 'Birthday', color: 'bg-info-transparent' },
  { date: '20', day: 'Thu', title: 'National Holiday', time: '', type: 'Holiday', color: 'bg-secondary-transparent' },
  { date: '12', day: 'Wed', title: 'Meeting remainder', time: '04:00PM', type: 'Announcement', color: 'bg-warning-transparent' },
  { date: '21', day: 'Fri', title: 'John pup birthday', time: '09:00AM', type: 'Birthday', color: 'bg-danger-transparent' },
  { date: '20', day: 'Thu', title: 'National Holiday', time: '', type: 'Holiday', color: 'bg-teal-transparent' },
  { date: '12', day: 'Wed', title: 'Meeting remainder', time: '04:00PM', type: 'Announcement', color: 'bg-orange-transparent' }
];
EmployeesHeader= [
  {header:'Name'},
  {header:'Role'},
  {header:'Status'},
  {header:'Score'},
]
employees = [
  {
    name: "John Doe",
    role: "Manager",
    status: "Active",
    score: 85,
    image: "./assets/images/faces/11.jpg"
  },
  {
    name: "Jane Smith",
    role: "Developer",
    status: "Inactive",
    score: 70,
    image: "./assets/images/faces/8.jpg"
  },
  {
    name: "Alex Johnson",
    role: "HR Specialist",
    status: "Active",
    score: 92,
    image: "./assets/images/faces/12.jpg"
  },
  {
    name: "Sarah Brown",
    role: "Analyst",
    status: "Active",
    score: 78,
    image: "./assets/images/faces/5.jpg"
  },
  {
    name: "Robert White",
    role: "Designer",
    status: "Inactive",
    score: 60,
    image: "./assets/images/faces/10.jpg"
  },
  {
    name: "Emily Clark",
    role: "Accountant",
    status: "Active",
    score: 88,
    image: "./assets/images/faces/1.jpg"
  }
];
meetings = [
  {
    title: "Anurag Batiya",
    date: "03 May (9.00am-10.00am)",
    image: "./assets/images/faces/15.jpg"
  },
  {
    title: "Project Meeting",
    date: "04 May (9.00am-10.00am)",
    image: "./assets/images/faces/3.jpg"
  },
  {
    title: "Team Meeting",
    date: "05 May (9.00am-10.00am)",
    image: "./assets/images/faces/6.jpg"
  },
  {
    title: "Client Meeting",
    date: "06 May (9.00am-10.00am)",
    image: "./assets/images/faces/13.jpg"
  },
  {
    title: "Client Meeting",
    date: "06 May (9.00am-10.00am)",
    image: "./assets/images/faces/3.jpg"
  },
  {
    title: "Team Meeting",
    date: "05 May (9.00am-10.00am)",
    image: "./assets/images/faces/11.jpg"
  }
];

LeaveTableHeader = [
  {header:'Employee'},
  {header:'Type'},
  {header:'Days'},
  {header:'Status'},
]
leaveRequests = [
  {
    name: 'Socrates Itumay',
    position: 'Team Lead',
    avatar: './assets/images/faces/2.jpg',
    leaveType: 'Sick Leave',
    days: 2,
    status: 'Approved'
  },
  {
    name: 'Samantha Paul',
    position: 'Sr.UI Developer',
    avatar: './assets/images/faces/4.jpg',
    leaveType: 'Casual Leave',
    days: 1,
    status: 'Pending'
  },
  {
    name: 'Gray Noal',
    position: 'Java Developer',
    avatar: './assets/images/faces/14.jpg',
    leaveType: 'Paternity Leave',
    days: 5,
    status: 'Approved'
  },
  {
    name: 'Gray Noal',
    position: 'React Developer',
    avatar: './assets/images/faces/15.jpg',
    leaveType: 'Personal Leave',
    days: 2,
    status: 'Rejected'
  },
  {
    name: 'Pope Johnson',
    position: 'Jr.Java Developer',
    avatar: './assets/images/faces/16.jpg',
    leaveType: 'Gifted Leave',
    days: 2,
    status: 'Pending'
  }
];
getStatusClass(status: string): string {
  switch (status) {
    case 'Approved': return 'bg-success-transparent';
    case 'Pending': return 'bg-warning-transparent';
    case 'Rejected': return 'bg-danger-transparent';
    default: return '';
  }
}
employeetableHeader = [
  {header:'S.No'},
  {header:'Employee Id'},
  {header:'Employee Name'},
  {header:'Position'},
  {header:'Department'},
  {header:'Email'},
  {header:'Status'},
  {header:'Contact'},
  {header:'Salary'},
  {header:'Action'},
]

employeesTable = [
  { id: '#emp23520', name: 'Richard Dom', role: 'Team Leader', department: 'Backend', email: 'richard116@demo.com', status: 'Active', phone: '+0987654321', salary: '$15,000', imgSrc: './assets/images/faces/1.jpg' },
  { id: '#emp23521', name: 'Kakashra Sri', role: 'Web Developer', department: 'Front End', email: 'Kakashra987@demo.com', status: 'Active', phone: '+0986548761', salary: '$20,000', imgSrc: './assets/images/faces/2.jpg' },
  { id: '#emp23522', name: 'Nikki Jey', role: 'Project Manager', department: 'HR', email: 'Nikki654@demo.com', status: 'On Leave', phone: '+0986548787', salary: '$25,000', imgSrc: './assets/images/faces/3.jpg' },
  { id: '#emp23523', name: 'Sasukey Ahuhi', role: 'Project Manager', department: 'HR', email: 'Sasukey986@demo.com', status: 'Active', phone: '+0986548788', salary: '$30,000', imgSrc: './assets/images/faces/4.jpg' },
  { id: '#emp23524', name: 'Xiong Yu', role: 'UI Developer', department: 'Engineering', email: 'Xiongu987@demo.com', status: 'Active', phone: '+0986548988', salary: '$35,000', imgSrc: './assets/images/faces/5.jpg' },
  { id: '#emp23525', name: 'Arifa Zed', role: 'Team Member', department: 'IT', email: 'Arifa432@demo.com', status: 'Resigned', phone: '+0986548985', salary: '$40,000', imgSrc: './assets/images/faces/6.jpg' }
];


}
