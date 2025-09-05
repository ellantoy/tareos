import { Component } from '@angular/core';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { NgApexchartsModule } from 'ng-apexcharts';
import { SharedModule } from '../../../shared/sharedmodule';
import { DomSanitizer, SafeHtml } from '@angular/platform-browser';
import { ApexChartComponent } from '../../../@spk/apex-chart/apex-chart.component';
import { SpkReusableTablesComponent } from '../../../@spk/spk-reusable-tables/spk-reusable-tables.component';
import { SpkDropdownsComponent } from '../../../@spk/reusable-ui-elements/spk-dropdowns/spk-dropdowns.component';
import { SpkJobsDashboardComponent } from '../../../@spk/reusable-dashboards/spk-jobs-dashboard/spk-jobs-dashboard.component';
import { CommonModule } from '@angular/common';
@Component({
  selector: 'app-jobs',
  standalone: true,
  imports: [NgApexchartsModule,NgbModule,SharedModule,SpkJobsDashboardComponent,ApexChartComponent,SpkReusableTablesComponent,SpkDropdownsComponent,CommonModule],
  templateUrl: './jobs.component.html',
  styleUrl: './jobs.component.scss'
})
export class JobsComponent {
  chartOptions:any={
    series: [
      {
        name: "Weekly",
        type: "column",
        data: [31, 11, 22, 37, 13, 22, 37, 21, 44, 22, 34, 25],
      },
      {
        name: "Monthly",
        type: "area",
        data: [44, 55, 41, 67, 22, 43, 21, 41, 56, 27, 43, 23],
      },
      {
        name: "Daily",
        type: "line",
        data: [30, 8, 20, 36, 15, 22, 37, 19, 44, 24, 32, 23],
      },
    ],
    chart: {
      height: 300,
      type: "line",
      stacked: false,
      toolbar: {
        show: false,
      },
      zoom: {
        enabled: false
      },
    },
    stroke: {
      width: [2, 1, 2],
      curve: "smooth",
    },
    plotOptions: {
      bar: {
        columnWidth: "15%",
        borderRadius: 4,
      },
    },
    colors: ["var(--primary-color)", "var(--primary005)", "rgb(244, 110, 244)"],
    fill: {
      opacity: [1, 0.05, 1],
      gradient: {
        inverseColors: false,
        shade: "light",
        type: "vertical",
        opacityFrom: 0.85,
        opacityTo: 0.55,
        stops: [0, 100, 100, 100],
      },
    },
    labels: [
      "01/01/2003",
      "02/01/2003",
      "03/01/2003",
      "04/01/2003",
      "05/01/2003",
      "06/01/2003",
      "07/01/2003",
      "08/01/2003",
      "09/01/2003",
      "10/01/2003",
      "11/01/2003",
      "12/01/2003",
    ],
    grid: {
      borderColor: '#f1f1f1',
      strokeDashArray: 3
    },
    legend: {
      show: true,
      position: "top",
      horizontalAlign: "right",
      fontSize: "11px",
      fontFamily: "Helvetica, Arial",
      fontWeight: 600,
      labels: {
        colors: '#74767c',
      },
      markers: {
        width: 7,
        height: 7,
        strokeWidth: 0,
        strokeColor: "#fff",
        fillColors: undefined,
        radius: 12,
        customHTML: undefined,
        onClick: undefined,
        offsetX: 0,
        offsetY: 0,
      },
    },
    markers: {
      size: 0,
    },
    xaxis: {
      categories: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'],
      axisBorder: {
        show: false,
        color: 'rgba(119, 119, 142, 0.05)',
      },
      axisTicks: {
        show: false,
        color: 'rgba(119, 119, 142, 0.05)',
      },
      labels: {
        style: {
          colors: "#8c9097",
          fontSize: '11px',
          fontWeight: 600,
          cssClass: 'apexcharts-xaxis-label',
        },
      }
    },
    yaxis: {
      title: {
        style: {
          color: '#adb5be',
          fontSize: '14px',
          fontFamily: 'poppins, sans-serif',
          fontWeight: 600,
          cssClass: 'apexcharts-yaxis-label',
        },
      },
      labels: {
        formatter: function (y:any) {
          return y.toFixed(0) + "";
        },
        show: true,
        style: {
          colors: "#8c9097",
          fontSize: '11px',
          fontWeight: 600,
          cssClass: 'apexcharts-xaxis-label',
        },
      },
      min: 0,
    },
  }
  chartOptions1:any={
    chart: {
      height: 260,
      type: "radialBar"
    },
    series: [75, 67],
    colors: ["var(--primary-color)", "rgb(244, 110, 244)"],
    plotOptions: {
        radialBar: {
            hollow: {
                margin: 0,
                size: "65%",
                background: "#fff",
            },
            dataLabels: {
                name: {
                    offsetY: -10,
                    color: "#4b9bfa",
                    fontSize: "16px",
                    show: false,
                },
                value: {
                    offsetY: 10,
                    color: "#4b9bfa",
                    fontSize: "22px",
                    show: true,
                },
                total: {
                    show: true,
                    label: 'Total',
                }
            },
        },
    },
    legend: {
      show: true,
      position: 'bottom',
      horizontalAlign: 'center',
      fontWeight: 600,
      fontSize: '11px',
      labels: {
        colors: '#74767c',
      },
      markers: {
        width: 7,
        height: 7,
        strokeWidth: 0,
        radius: 12,
        offsetX: 0,
        offsetY: 0
      },
    },
    stroke: {
      lineCap: "round",
    },
    labels: ["Job View", "Job Applied"],
    }

  cards = [
    {
      title: 'Total Job Posted',
      count: 248,
      timeFrame: 'THIS MONTH',
      avatarBgClass: 'bg-primary',
      iconClass: 'ri-git-repository-private-line',
      badgeClass: 'bg-primary',
      percentage: 16,
      overflowHidden: false
    },
    {
      title: 'Applied Candidates',
      count: '2K',
      timeFrame: 'THIS MONTH',
      avatarBgClass: 'bg-success',
      iconClass: 'ri-parent-line',
      badgeClass: 'bg-success',
      percentage: 2.03,
      overflowHidden: true
    },
    {
      title: 'Got Hired',
      count: 120,
      timeFrame: 'THIS MONTH',
      avatarBgClass: 'bg-info',
      iconClass: 'ri-bell-line',
      badgeClass: 'bg-info',
      percentage: 0.04,
      overflowHidden: true
    },
    {
      title: 'Today Interviews',
      count: 56,
      timeFrame: 'TODAY',
      avatarBgClass: 'bg-secondary',
      iconClass: 'ri-stack-line',
      badgeClass: 'bg-secondary',
      percentage: 0.12,
      overflowHidden: true
    }
  ];
  people = [
    {
      name: 'Mackeil Jepf',
      role: 'Designer',
      imageUrl: './assets/images/faces/15.jpg'
    },
    {
      name: 'Rosen Begh',
      role: 'Project Manager',
      imageUrl: './assets/images/faces/8.jpg'
    },
    {
      name: 'Rojesh Marfph',
      role: 'Team Lead',
      imageUrl: './assets/images/faces/11.jpg'
    },
    {
      name: 'Joseph George',
      role: 'Senior Developer',
      imageUrl: './assets/images/faces/13.jpg'
    },
    {
      name: 'Daniel Jackson',
      role: 'Designer',
      imageUrl: './assets/images/faces/16.jpg'
    }
  ];
  HiringsHeader = [
    {header:'Interviewer'},
    {header:'Job Title'},
    {header:'Shortlisted'},
    {header:'Date of Joing'},
  ]
  HiringsData = [
    {
      id: 'checkboxNoLabel1',
      checked: true,
      name: 'Joanna Smith',
      email: 'joannasmith14@gmail.com',
      role: 'Product Manager',
      avatar: './assets/images/faces/12.jpg',
      orders: 16,
      date: '24.10.2025'
    },
    {
      id: 'checkboxNoLabel2',
      checked: false,
      name: 'Nada Wael',
      email: 'nadawael20@gmail.com',
      role: 'Lead Developer',
      avatar: './assets/images/faces/3.jpg',
      orders: 4,
      date: '16.10.2025'
    },
    {
      id: 'checkboxNoLabel3',
      checked: true,
      name: 'Sara Ahmed',
      email: 'saraahmed08@gmail.com',
      role: 'Manager',
      avatar: './assets/images/faces/1.jpg',
      orders: 12,
      date: '18.10.2025'
    },
    {
      id: 'checkboxNoLabel4',
      checked: true,
      name: 'Ghone Doe',
      email: 'ghonedoe10@gmail.com',
      role: 'Lead UI/UX Designer',
      avatar: './assets/images/faces/13.jpg',
      orders: 5,
      date: '10.10.2025'
    },
    {
      id: 'checkboxNoLabel5',
      checked: false,
      name: 'Leo Phillip',
      email: 'leophillip43@gmail.com',
      role: 'Angular Developer',
      avatar: './assets/images/faces/14.jpg',
      orders: 5,
      date: '24.10.2025'
    }
  ];

  RequestHeader = [
   {header:'Position'},
   {header:'Experience'},
   {header:'Department'},
   {header:'Profile Rating'},
   {header:'No.of Vacancies'},
   {header:'Apply Date'},
   {header:'Status'},
   {header:'Action'},  
  ]

  jobs = [
    {
      id: 1,
      role: '.Net Developer',
      experience: '02 Years',
      department: 'Development',
      rating: 'Good',
      applications: 12,
      date: '14.10.2020',
      status: 'Open',
      avatarClass: 'bg-primary-transparent',
      icon: 'ri-global-line'
    },
    {
      id: 2,
      role: 'Graphic Designer',
      experience: '05 Years',
      department: 'Designing',
      rating: 'Excellent',
      applications: 24,
      date: '10.08.2020',
      status: 'Closed',
      avatarClass: 'bg-secondary-transparent',
      icon: 'ri-exchange-funds-line'
    },
    {
      id: 3,
      role: 'Java Developer',
      experience: '0 Years',
      department: 'Development',
      rating: 'Excellent',
      applications: 18,
      date: '16.12.2020',
      status: 'Open',
      avatarClass: 'bg-success-transparent',
      icon: 'ri-honor-of-kings-line'
    },
    {
      id: 4,
      role: 'QA Tester',
      experience: '04 Years',
      department: 'Quality & Control',
      rating: 'Good',
      applications: 26,
      date: '05.11.2020',
      status: 'Open',
      avatarClass: 'bg-info-transparent',
      icon: 'ri-a-b'
    },
    {
      id: 5,
      role: 'Android Developer',
      experience: '02 Years',
      department: 'Development',
      rating: 'Good',
      applications: 16,
      date: '05.12.2020',
      status: 'Closed',
      avatarClass: 'bg-warning-transparent',
      icon: 'ri-android-line'
    }
  ];

}