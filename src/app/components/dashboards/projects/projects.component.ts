import { Component } from '@angular/core';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { NgSelectModule } from '@ng-select/ng-select';
import { NgApexchartsModule } from 'ng-apexcharts';
import { SharedModule } from '../../../shared/sharedmodule';
import { ApexChartComponent } from '../../../@spk/apex-chart/apex-chart.component';
import { SpkReusableTablesComponent } from '../../../@spk/spk-reusable-tables/spk-reusable-tables.component';
import { SpkDropdownsComponent } from '../../../@spk/reusable-ui-elements/spk-dropdowns/spk-dropdowns.component';
import { SpkProjectCardsComponent } from '../../../@spk/reusable-dashboards/spk-project-cards/spk-project-cards.component';
import { CommonModule } from '@angular/common';
@Component({
  selector: 'app-projects',
  standalone: true,
  imports: [NgbModule,NgSelectModule,SharedModule,ApexChartComponent,SpkReusableTablesComponent,SpkDropdownsComponent,SpkProjectCardsComponent,CommonModule],
  templateUrl: './projects.component.html',
  styleUrl: './projects.component.scss'
})
export class ProjectsComponent {
    active=1;
chartOptions:any={
  chart: {
    height: 315,
    type: "line",
    stacked: false,
    zoom: {
      enabled: false
    },
    toolbar: {
      show: false,
    }
  },
  dataLabels: {
    enabled: false
  },
  colors: ["var(--primary-color)", "rgb(244, 110, 244)", "rgb(133, 204, 65)"],
  series: [{
    name: 'Active Projects',
    type: 'column',
    data: [104, 102, 117, 146, 118, 115, 220, 103, 83, 114, 265, 174],
  }, {
    name: "Completed Projects",
    type: "column",
    data: [92, 75, 123, 111, 196, 122, 159, 102, 138, 136, 62, 240]
  }, {
    name: 'Project Revenue',
    type: 'line',
    data: [35, 52, 86, 65, 102, 70, 152, 87, 55, 92, 170, 80],
  }],
  stroke: {
    width: [2, 2, 2],
    curve: "smooth"
  },
  plotOptions: {
    bar: {
      columnWidth: '30%',
      borderRadius: 2
    }
  },
  markers: {
    size: [0, 0, 5],
    colors: undefined,
    strokeColors: '#fff',
    strokeOpacity: 0.6,
    strokeDashArray: 0,
    fillOpacity: 1,
    discrete: [],
    shape: "circle",
    radius: [0, 0, 2],
    offsetX: 0,
    offsetY: 0,
    onClick: undefined,
    onDblClick: undefined,
    showNullDataPoints: true,
    hover: {
      size: undefined,
      sizeOffset: 3
    }
  },
  fill: {
    opacity: [1, 1, 1]
  },
  grid: {
    borderColor: '#f1f1f1',
    strokeDashArray: 3
  },
  legend: {
    show: true,
    position: 'bottom',
  },
  yaxis: {
    min: 0,
    forceNiceScale: true,
    title: {
      style: {
        color: '	#adb5be',
        fontSize: '14px',
        fontFamily: 'poppins, sans-serif',
        fontWeight: 600,
        cssClass: 'apexcharts-yaxis-label',
      },
    },
    labels: {
      formatter: function (y:any) {
        return y.toFixed(0) + "";
      }
    }
  },
  xaxis: {
    type: 'month',
    categories: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'],
    axisBorder: {
      show: true,
      color: 'rgba(119, 119, 142, 0.05)',
      offsetX: 0,
      offsetY: 0,
    },
    axisTicks: {
      show: true,
      borderType: 'solid',
      color: 'rgba(119, 119, 142, 0.05)',
      width: 6,
      offsetX: 0,
      offsetY: 0
    },
    labels: {
      rotate: -90
    }
  },
  tooltip: {
    enabled: true,
    shared: false,
    intersect: true,
    x: {
      show: false
    }
  },
}
chartOptions1:any={
  series: [1754, 634, 878, 470],
  labels: ["On Going", "Completed", "To do", "Pending"],
  chart: {
    height: 208,
    type: 'donut',
  },
  dataLabels: {
    enabled: false,
  },

  legend: {
    show: false,
  },
  stroke: {
    show: true,
    curve: 'smooth',
    lineCap: 'round',
    colors: "#fff",
    width: 0,
    dashArray: 0,
  },
  plotOptions: {
    pie: {
      startAngle: -90,
      endAngle: 90,
      offsetY: 10,
      expandOnClick: false,
      donut: {
        size: '85%',
        background: 'transparent',
        labels: {
          show: true,
          name: {
            show: true,
            fontSize: '20px',
            color: '#495057',
            offsetY: -30
          },
          value: {
            show: true,
            fontSize: '15px',
            color: undefined,
            offsetY: -25,
            formatter: function (val:any) {
              return val + "%"
            }
          },
          total: {
            show: true,
            showAlways: true,
            label: 'Total',
            fontSize: '22px',
            fontWeight: 600,
            color: '#495057',
          }

        }
      }
    }
  },
  grid: {
    padding: {
      bottom: -100
    }
  },
  colors: ["var(--primary-color)", "rgba(40, 200, 235, 1)", "rgba(133, 204, 65, 1)", "rgba(244, 110, 244, 1)"],
}
cards = [
  {
    title: 'Total Time On Project',
    value: '148:00h',
    percentage: '3.45%',
    graph: 'up',
    status: 'up',
    icon: 'M15.09814,12.63379,13,11.42285V7a1,1,0,0,0-2,0v5a.99985.99985,0,0,0,.5.86621l2.59814,1.5a1.00016,1.00016,0,1,0,1-1.73242ZM12,2A10,10,0,1,0,22,12,10.01114,10.01114,0,0,0,12,2Zm0,18a8,8,0,1,1,8-8A8.00917,8.00917,0,0,1,12,20Z', // Example SVG path
    iconBg: 'bg-primary'
  },
  {
    title: 'Total Earnings',
    value: '$12,563.50',
    percentage: '4.14%',
    graph: 'up',
    status: 'good',
    icon: 'M14,11H10a2,2,0,0,1,0-4h5a1,1,0,0,1,1,1,1,1,0,0,0,2,0,3,3,0,0,0-3-3H13V3a1,1,0,0,0-2,0V5H10a4,4,0,0,0,0,8h4a2,2,0,0,1,0,4H9a1,1,0,0,1-1-1,1,1,0,0,0-2,0,3,3,0,0,0,3,3h2v2a1,1,0,0,0,2,0V19h1a4,4,0,0,0,0-8Z', // Example SVG path
    iconBg: 'bg-success'
  },
  {
    title: 'Total Cost',
    value: '$6,156.38',
    percentage: '0.66%',
    graph: 'down',
    status: 'down',
    icon: 'M19,7H18V6a3,3,0,0,0-3-3H5A3,3,0,0,0,2,6H2V18a3,3,0,0,0,3,3H19a3,3,0,0,0,3-3V10A3,3,0,0,0,19,7ZM5,5H15a1,1,0,0,1,1,1V7H5A1,1,0,0,1,5,5ZM20,15H19a1,1,0,0,1,0-2h1Zm0-4H19a3,3,0,0,0,0,6h1v1a1,1,0,0,1-1,1H5a1,1,0,0,1-1-1V8.83A3,3,0,0,0,5,9H19a1,1,0,0,1,1,1Z', // Example SVG path
    iconBg: 'bg-info'
  },
  {
    title: 'Total Productivity',
    value: '95.5$',
    percentage: '2.97%',
    graph: 'up',
    status: 'neutral',
    icon: 'M21.71,7.29a1,1,0,0,0-1.42,0L14,13.59,9.71,9.29a1,1,0,0,0-1.42,0l-6,6a1,1,0,0,0,0,1.42,1,1,0,0,0,1.42,0L9,11.41l4.29,4.3a1,1,0,0,0,1.42,0l7-7A1,1,0,0,0,21.71,7.29Z', // Example SVG path
    iconBg: 'bg-secondary'
  }
];

projectStatus = [
  { 
    name: 'Ongoing Projects', 
    percentage: 12.77, 
    statusColor: 'text-primary', 
    count: 120
  },
  { 
    name: 'Completed Projects', 
    percentage: 47.87, 
    statusColor: 'text-info', 
    count: 450
  },
  { 
    name: 'Pending Approval', 
    percentage: 8.51, 
    statusColor: 'text-success', 
    count: 80
  },
  { 
    name: 'Upcoming Projects', 
    percentage: 6.38, 
    statusColor: 'text-secondary', 
    count: 60
  },
  { 
    name: 'Delayed Projects', 
    percentage: 3.19, 
    statusColor: 'text-warning', 
    count: 30
  }
];

recentProjects = [
  {
   projectNamecharAt:'WR',
    projectName: 'Website Redesign',
    date: '2024-12-01',
    amount: '$5,000',
    status: 'Payment Received',
    statusColor: 'text-primary',
    avatarColor: 'bg-primary'
  },
  {
   projectNamecharAt:'WR',
    projectName: 'Mobile App Development',
    date: '2024-12-02',
    amount: '$2,500',
    status: 'Expense',
    statusColor: 'text-info',
    avatarColor: 'bg-info'
  },
  {
   projectNamecharAt:'WR',
    projectName: 'CRM Integration',
    date: '2024-12-03',
    amount: '$3,000',
    status: 'Budget Allocation',
    statusColor: 'text-success',
    avatarColor: 'bg-success'
  },
  {
   projectNamecharAt:'WR',
    projectName: 'E-commerce Platform',
    date: '2024-12-04',
    amount: '$7,500',
    status: 'Payment Received',
    statusColor: 'text-secondary',
    avatarColor: 'bg-secondary'
  },
  {
   projectNamecharAt:'WR',
    projectName: 'Marketing Campaign',
    date: '2024-12-05',
    amount: '$1,200',
    status: 'Expense',
    statusColor: 'text-warning',
    avatarColor: 'bg-warning'
  },
  {
   projectNamecharAt:'WR',
    projectName: 'Inventory System',
    date: '2024-12-06',
    amount: '$4,000',
    status: 'Payment Received',
    statusColor: 'text-danger',
    avatarColor: 'bg-danger'
  }
];
acquisitions = [
  {
    name: 'New Projects',
    count: 32,
    progress: 50,
    colorClass: 'text-primary',
    barClass: 'bg-primary'
  },
  {
    name: 'Applications',
    count: 17,
    progress: 70,
    colorClass: 'text-info',
    barClass: 'bg-info'
  },
  {
    name: 'Featured',
    count: 10,
    progress: 90,
    colorClass: 'text-success',
    barClass: 'bg-success'
  },
  {
    name: 'Shortlisted',
    count: 8,
    progress: 32,
    colorClass: 'text-secondary',
    barClass: 'bg-secondary'
  },
  {
    name: 'Rejected',
    count: 12,
    progress: 65,
    colorClass: 'text-warning',
    barClass: 'bg-warning'
  }
];
taskHeader = [
  {header:'Task details'},
  {header:'Assigned'},
  {header:'Target'},
  {header:'Assigned to'},
]
tasks = [
  {
    taskName: 'Update client records in database',
    time: '12.43pm',
    badge: 'Today',
    badgeClass: 'bg-primary-transparent',
    avatars: [
      './assets/images/faces/2.jpg',
      './assets/images/faces/8.jpg',
      './assets/images/faces/2.jpg'
    ]
  },
  {
    taskName: 'Design logo for new product',
    time: '11.25am',
    badge: 'Tomorrow',
    badgeClass: 'bg-secondary-transparent',
    avatars: [
      './assets/images/faces/6.jpg',
      './assets/images/faces/9.jpg'
    ]
  },
  {
    taskName: 'Respond to customer emails promptly',
    time: '9.56am',
    badge: 'Today',
    badgeClass: 'bg-primary-transparent',
    avatars: [
      './assets/images/faces/3.jpg',
      './assets/images/faces/5.jpg',
      './assets/images/faces/10.jpg',
      './assets/images/faces/15.jpg'
    ]
  },
  {
    taskName: 'Compile weekly sales report summary',
    time: '8.15am',
    badge: 'Today',
    badgeClass: 'bg-primary-transparent',
    avatars: [
      './assets/images/faces/11.jpg'
    ]
  },
  {
    taskName: 'Review and edit blog post',
    time: '4.20pm',
    badge: 'Tomorrow',
    badgeClass: 'bg-secondary-transparent',
    avatars: [
      './assets/images/faces/13.jpg',
      './assets/images/faces/16.jpg',
      './assets/images/faces/8.jpg'
    ]
  },
  {
    taskName: 'Create social media content calendar',
    time: '8.29am',
    badge: 'Today',
    badgeClass: 'bg-primary-transparent',
    avatars: [
      './assets/images/faces/10.jpg',
      './assets/images/faces/5.jpg'
    ]
  },
  {
    taskName: 'Compile weekly sales report summary',
    time: '8.15am',
    badge: 'Today',
    badgeClass: 'bg-primary-transparent',
    avatars: [
      './assets/images/faces/11.jpg'
    ]
  }
];

taskHeader1 = [
  {header:'Task details'},
  {header:'Assigned on'},
  {header:'Completed'},
  {header:'Assigned to'},
]
tasks1 = [
  {
    taskName: 'Sort and file important documents',
    dueDate: '24 Nov 2024',
    badge: '4 hrs ago',
    badgeClass: 'bg-success',
    avatars: [
      './assets/images/faces/5.jpg',
      './assets/images/faces/9.jpg'
    ]
  },
  {
    taskName: 'Test website for user experience',
    dueDate: '30 Nov 2024',
    badge: 'Today',
    badgeClass: 'bg-success',
    avatars: [
      './assets/images/faces/11.jpg',
      './assets/images/faces/12.jpg',
      './assets/images/faces/13.jpg'
    ]
  },
  {
    taskName: 'Schedule team meeting',
    dueDate: '11 Dec 2024',
    badge: 'Yesterday',
    badgeClass: 'bg-success',
    avatars: [
      './assets/images/faces/4.jpg'
    ]
  },
  {
    taskName: 'Write brief for marketing campaign',
    dueDate: '6 Dec 2024',
    badge: 'Yesterday',
    badgeClass: 'bg-success',
    avatars: [
      './assets/images/faces/1.jpg',
      './assets/images/faces/2.jpg'
    ]
  },
  {
    taskName: 'Proofread product description text',
    dueDate: '8 Dec 2024',
    badge: 'Yesterday',
    badgeClass: 'bg-success',
    avatars: [
      './assets/images/faces/5.jpg',
      './assets/images/faces/3.jpg',
      './assets/images/faces/11.jpg',
      './assets/images/faces/12.jpg'
    ]
  },
  {
    taskName: 'Organize files on cloud storage',
    dueDate: '21 Dec 2024',
    badge: 'Today',
    badgeClass: 'bg-success',
    avatars: [
      './assets/images/faces/1.jpg'
    ]
  },
  {
    taskName: 'Schedule team meeting',
    dueDate: '11 Dec 2024',
    badge: 'Yesterday',
    badgeClass: 'bg-success',
    avatars: [
      './assets/images/faces/4.jpg'
    ]
  }
];
Activity = [
  {
    status: 'On Going Tasks',
    percentageChange: 1.67,
    total: 1754,
    statusClass: 'ongoing',
    trendClass: 'text-success'
  },
  {
    status: 'Completed Tasks',
    percentageChange: 0.46,
    total: 634,
    statusClass: 'completed',
    trendClass: 'text-success'
  },
  {
    status: 'To Do Tasks',
    percentageChange: -3.43,
    total: 878,
    statusClass: 'todo',
    trendClass: 'text-danger'
  },
  {
    status: 'Pending Tasks',
    percentageChange: 0.13,
    total: 470,
    statusClass: 'pending',
    trendClass: 'text-success'
  }
];

projectHeader = [
 {header:'Name'},
 {header:'Start Date'},
 {header:'Progress'},
 {header:'Team'},
 {header:'Due Date'},
 {header:'Status'},
 {header:'Actions'},
]

projects = [
  {
    name: 'Website Design',
    startDate: '25-03-2024',
    progress: 40,
    avatars: ['2.jpg', '8.jpg', '2.jpg'],
    dueDate: '14-04-2024',
    status: 'In Progress',
    progressBg:'primary',
    statusClass: 'bg-primary-transparent'
  },
  {
    name: 'Filemanager Application',
    startDate: '16-03-2024',
    progress: 75,
    avatars: ['1.jpg', '12.jpg'],
    dueDate: '24-05-2024',
    status: 'Pending',
    progressBg:'secondary',
    statusClass: 'bg-warning-transparent'
  },
  {
    name: 'Chat Interface',
    startDate: '28-02-2024',
    progress: 58,
    avatars: ['5.jpg', '8.jpg', '11.jpg'],
    dueDate: '28-03-2024',
    status: 'Ongoing',
    progressBg:'success',
    statusClass: 'bg-danger-transparent'
  },
  {
    name: 'Ecommerce Application',
    startDate: '18-03-2024',
    progress: 100,
    avatars: ['6.jpg', '9.jpg', '13.jpg'],
    dueDate: '02-04-2024',
    status: 'Completed',
    progressBg:'orange',
    statusClass: 'bg-success-transparent'
  },
  {
    name: 'HR Dashboard',
    startDate: '25-03-2024',
    progress: 45,
    avatars: ['10.jpg'],
    dueDate: '27-03-2024',
    status: 'In Progress',
    progressBg:'info',
    statusClass: 'bg-primary-transparent'
  }
];

}
