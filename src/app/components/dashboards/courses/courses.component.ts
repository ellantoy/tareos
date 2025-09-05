import { CommonModule } from '@angular/common';
import { CUSTOM_ELEMENTS_SCHEMA, Component, ElementRef, ViewChild } from '@angular/core';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { NgApexchartsModule } from 'ng-apexcharts';
import { SharedModule } from '../../../shared/sharedmodule';
import Swiper from 'swiper'
import { register } from 'swiper/element';
import { Autoplay, Pagination, Navigation } from 'swiper/modules';
import { ApexChartComponent } from '../../../@spk/apex-chart/apex-chart.component';
import { SpkReusableTablesComponent } from '../../../@spk/spk-reusable-tables/spk-reusable-tables.component';
import { SpkDropdownsComponent } from '../../../@spk/reusable-ui-elements/spk-dropdowns/spk-dropdowns.component';
import { SpkCoursesComponent } from '../../../@spk/reusable-dashboards/spk-courses/spk-courses.component';
Swiper.use([Autoplay, Navigation, Pagination]);
register();
@Component({
  selector: 'app-courses',
  standalone: true,
  imports: [ApexChartComponent,NgbModule,SharedModule,CommonModule,SpkReusableTablesComponent,SpkDropdownsComponent,SpkCoursesComponent],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
  templateUrl: './courses.component.html',
  styleUrl: './courses.component.scss'
})
export class CoursesComponent {
  chartOptions:any= {
    series: [{
      name: 'This Month',
      data: [44, 55, 41, 42, 22, 43, 21, 35, 56, 27, 43, 27]
    }, {
      name: 'This Week',
      data: [33, 21, 32, 37, 23, 32, 47, 31, 54, 32, 20, 38]
    }, {
      name: 'This Year',
      data: [30, 25, 36, 30, 45, 35, 64, 51, 59, 36, 39, 51]
    }],
    chart: {
      type: 'bar',
      height: 370,
      fontFamily: 'Poppins, sans-serif',
      foreColor: '#8c9097',
      stacked: true,
      toolbar: {
        show: false
      },
      zoom: {
        enabled: true
      },
    },
    grid: {
      borderColor: '#90A4AE',
      strokeDashArray: 2,
    },
    dataLabels: {
      enabled: false,
    },
    responsive: [{
      breakpoint: 480,
      options: {
        legend: {
          position: 'bottom',
          offsetX: -10,
          offsetY: 0
        }
      }
    }],
    stroke: {
      show: true,
      width: [4, 4, 4],
      curve: 'smooth',
    },
    plotOptions: {
      bar: {
        columnWidth: "20%",
        borderRadius: 3,
        borderRadiusApplication: 'around',
        borderRadiusWhenStacked: 'all',
      },
    },
    legend: {
      position: 'right',
      offsetY: 40,
      show: false
    },
    fill: {
      opacity: 1
    },
    tooltip: {
      enabled: true,
      shared: true,
      intersect: false,
    },
    colors: ['var(--primary-color)', 'rgb(40, 200, 235)', 'rgb(133, 204, 65)'],
    labels: ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"],
  }
  chartOptions1:any= { 
    series: [31, 21, 15, 10, 23],
    chart: {
      width: 220,
      type: 'donut',
      sparkline: {
        enabled: true
      }
    },
    legend: {
      show: false,
    },
    plotOptions: {
      pie: {
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
              offsetY: -4
            },
            value: {
              show: true,
              fontSize: '18px',
              color: undefined,
              offsetY: 8,
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
    stroke: {
      width: 0
    },
    colors: ["var(--primary-color)", "rgba(40, 200, 235, 1)", "rgba(133, 204, 65, 1)", "rgba(244, 110, 244, 1)", "rgba(250, 182, 50, 1)"],
    labels: ['Sales', 'Marketing', 'IT', 'Consultancy', 'Finance'],
    responsive: [{
      breakpoint: 480,
      options: {
        chart: {
          width: 200
        },
        legend: {
          enabled: true,
          position: 'bottom',
        }
      }
    }]
  }
  stats = [
    {
      title: 'Total Courses',
      value: '231',
      changePercent: '0.5',
      icon: 'ri-article-line',
      bgColor: 'bg-primary',
      isNegativeChange: false
    },
    {
      title: 'Total Earnings',
      value: '$1,116',
      changePercent: '5.1',
      icon: 'ri-exchange-dollar-line',
      bgColor: 'bg-success',
      isNegativeChange: true
    },
    {
      title: 'Engagement ratio',
      value: '45%',
      changePercent: '3.5',
      icon: 'ri-service-line',
      bgColor: 'bg-info',
      isNegativeChange: false
    },
    {
      title: 'Total Videos',
      value: '1,986',
      changePercent: '3.4',
      icon: 'ri-video-line',
      bgColor: 'bg-secondary',
      isNegativeChange: false
    }
  ];
  InstructorsHeader = [
    {header:'Recruiter'},
    {header:'Category'},
    {header:'Actions'}
  ]
  people = [
    {
      name: 'Athlean Y',
      course: 'Arts and Crafts',
      avatar: '',
      icon: 'bg-secondary',
      initials: 'T',
      flasShow:''
    },
    {
      name: 'Dia Xclose',
      course: 'History',
      avatar: './assets/images/faces/13.jpg',
      icon: '',
      initials: '',
      flasShow:''
    },
    {
      name: 'Geroge P',
      course: 'Science and Nature',
      avatar: '',
      icon: 'bg-success',
      initials: '',
      flasShow:'lightning-fill'
    },
    {
      name: 'TLV James',
      course: 'Designing',
      avatar: './assets/images/faces/16.jpg',
      icon: '',
      initials: '',
      flasShow:''
    },
    {
      name: 'Techmortom',
      course: 'Math and Statistics',
      avatar: './assets/images/faces/15.jpg',
      icon: '',
      initials: '',
      flasShow:''
    }
  ];
  CoursesHeader = [
    {header:'Tutor'},
    {header:'Category'},
    {header:'Vacancies'},
    {header:'Filled'},
    {header:'Subscription'},
  ]

  tableData = [
    {
      name: 'Miss X Matched',
      image: './assets/images/faces/7.jpg',
      course: 'Deil Sata',
      stat1: 116,
      stat2: 25,
      badge: ''
    },
    {
      name: 'Phanmanthu',
      image: './assets/images/faces/15.jpg',
      course: 'Nucleus OP',
      stat1: 0,
      stat2: 235,
      badge: 'Starter'
    },
    {
      name: 'Barbell PM',
      image: './assets/images/faces/14.jpg',
      course: 'Data SC',
      stat1: 15,
      stat2: 2,
      badge: 'Pro'
    },
    {
      name: 'Bean Bag',
      image: './assets/images/faces/10.jpg',
      course: 'Delooit XP',
      stat1: 773,
      stat2: 114,
      badge: ''
    },
    {
      name: 'Techmortom',
      image: './assets/images/faces/13.jpg',
      course: 'Tech IP',
      stat1: 23,
      stat2: 14,
      badge: 'Premium'
    }
  ];

  recentPosts = [
    {
      title: 'Introduction to Web Development',
      initial: 'W',
      date: '2024-11-15',
      bgColor: 'bg-primary-transparent'
    },
    {
      title: 'Advanced Data Analytics',
      initial: 'A',
      date: '2024-10-20',
      bgColor: 'bg-success-transparent'
    },
    {
      title: 'UI/UX Design Principles',
      initial: 'U',
      date: '2024-12-01',
      bgColor: 'bg-info-transparent'
    },
    {
      title: 'Cloud Computing Basics',
      initial: 'C',
      date: '2024-11-05',
      bgColor: 'bg-secondary-transparent'
    }
  ];
  CourseslistHeader = [
    {header:'S.No'},
    {header:'Course'},
    {header:'Category'},
    {header:'Classes'},
    {header:'Last Updated'},
    {header:'Instructor'},
    {header:'Students'},
    {header:'Actions'},
  ] 

  courses = [
    {
      id: 1,
      image: './assets/images/nft-images/1.jpg',
      title: 'Ray Optics & Optical Fibre Master Class',
      category: 'Science',
      students: 20,
      date: '29-05-2023',
      instructor: 'Shin Opran',
      revenue: 25
    },
    {
      id: 2,
      image: './assets/images/nft-images/2.jpg',
      title: 'Master Linear Algebra Medium Level',
      category: 'Mathematics',
      students: 90,
      date: '11-06-2023',
      instructor: 'Arya Neo',
      revenue: 773
    },
    {
      id: 3,
      image: './assets/images/nft-images/8.jpg',
      title: 'Learn How To Trade And Invest For-Absolute Beginners',
      category: 'Stocks & Trading',
      students: 161,
      date: '10-06-2023',
      instructor: 'Sia Niu',
      revenue: 51
    },
    {
      id: 4,
      image: './assets/images/nft-images/7.jpg',
      title: 'Digital Marketing Course from Scratch',
      category: 'Marketing',
      students: 115,
      date: '21-06-2023',
      instructor: 'Stuart George',
      revenue: 1189
    },
    {
      id: 5,
      image: './assets/images/nft-images/5.jpg',
      title: 'Data Structures & Algorithms For Beginners',
      category: 'Programming',
      students: 30,
      date: '15-06-2023',
      instructor: 'Boran Ray',
      revenue: 3368
    },
    {
      id: 6,
      image: './assets/images/nft-images/6.jpg',
      title: 'Css Zero to Hero Master Class',
      category: 'UI/UX',
      students: 51,
      date: '22-06-2023',
      instructor: 'Burak Oin',
      revenue: 252
    }
  ];

}