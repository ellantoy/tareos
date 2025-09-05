import { NgbDropdownModule, NgbTooltipModule } from '@ng-bootstrap/ng-bootstrap';
import { Component } from '@angular/core';
import { SharedModule } from '../../../shared/sharedmodule';
import { NgApexchartsModule } from 'ng-apexcharts';
import { ApexChartComponent } from '../../../@spk/apex-chart/apex-chart.component';
import { SpkReusableTablesComponent } from '../../../@spk/spk-reusable-tables/spk-reusable-tables.component';
import { SpkSocialMediaCardComponent } from '../../../@spk/reusable-dashboards/spk-social-media-card/spk-social-media-card.component';
import { SpkDropdownsComponent } from '../../../@spk/reusable-ui-elements/spk-dropdowns/spk-dropdowns.component';
import { CommonModule } from '@angular/common';
@Component({
  selector: 'app-social-media',
  standalone: true,
  imports: [SharedModule,NgApexchartsModule,NgbDropdownModule,SpkReusableTablesComponent,SpkSocialMediaCardComponent,SpkDropdownsComponent,CommonModule,NgbTooltipModule,
    ApexChartComponent],
  templateUrl: './social-media.component.html',
  styleUrl: './social-media.component.scss'
})
export class SocialMediaComponent {
  chartOptions:any={
    series: [
      {
          name: "Followers",
          data: [44, 42, 57, 86, 58, 55, 70, 43, 23, 54, 77, 34],
      },
      {
          name: "Account Reached",
          data: [74, 72, 87, 116, 88, 85, 100, 73, 53, 84, 107, 64],
      },
      {
          name: "People Engaged",
          data: [84, 82, 97, 126, 98, 95, 110, 83, 63, 94, 117, 74],
      }
  ],
  chart: {
      stacked: true,
      type: "line",
      height: 332,
      dropShadow: {
          enabled: true,
          enabledOnSeries: undefined,
          top: 7,
          left: 1,
          blur: 3,
          color: '#000',
          opacity: 0.1
      },
      zoom: {
        enabled: false
      },
      toolbar: {
          show: false,
      }
  },
  grid: {
      borderColor: "#f5f4f4",
      strokeDashArray: 5,
      yaxis: {
          lines: {
              show: true, // Ensure y-axis grids are shown
          },
      },
  },
  colors: [
      "var(--primary-color)",
      "rgba(40, 200, 235, 1)",
      "rgba(244, 110, 244, 1)",
  ],
  stroke: {
      curve: ["stepline", "stepline", "stepline"],
      width: [2, 2, 2],
  },
  dataLabels: {
      enabled: false,
  },
  fill: {
      type: 'gradient',
      gradient: {
          shadeIntensity: 1,
          opacityFrom: 0.4,
          opacityTo: 0.1,
          stops: [0, 90, 100],
          colorStops: [
              [
                  {
                      offset: 0,
                      color: "var(--primary-color)",
                      opacity: 1
                  },
                  {
                      offset: 75,
                      color: "var(--primary-color)",
                      opacity: 1
                  },
                  {
                      offset: 100,
                      color: "var(--primary-color)",
                      opacity: 1
                  }
              ],
              [
                  {
                      offset: 0,
                      color: "rgba(40, 200, 235,1)",
                      opacity: 1
                  },
                  {
                      offset: 75,
                      color: "rgba(40, 200, 235,1)",
                      opacity: 1
                  },
                  {
                      offset: 100,
                      color: "rgba(40, 200, 235,1)",
                      opacity: 1
                  }
              ],
              [
                  {
                      offset: 0,
                      color: "rgba(244, 110, 244,1)",
                      opacity: 1
                  },
                  {
                      offset: 75,
                      color: "rgba(244, 110, 244,1)",
                      opacity: 1
                  },
                  {
                      offset: 100,
                      color: "rgba(244, 110, 244,1)",
                      opacity: 1
                  }
              ]
          ]
      }
  },
  legend: {
      show: true,
      position: "top",
  },
  yaxis: {
      title: {
          style: {
              color: "#adb5be",
              fontSize: "14px",
              fontFamily: "Montserrat, sans-serif",
              fontWeight: 600,
              cssClass: "apexcharts-yaxis-label",
          },
      },
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
      labels: {
          formatter: function (y:any) {
              return y.toFixed(0) + "";
          },
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
      theme: "dark",
  }
}
chartOptions1:any={ 
  series: [1754, 1234, 784],
  labels: ["Mobile", "Tablet", "Desktop"],
  chart: {
      height: 178,
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
                      fontFamily: "Montserrat, sans-serif",
                      offsetY: -5
                  },
                  value: {
                      show: true,
                      fontSize: '22px',
                      color: undefined,
                      offsetY: 5,
                      fontWeight: 600,
                      fontFamily: "Montserrat, sans-serif",
                      formatter: function (val:any) {
                          return val + "%"
                      }
                  },
                  total: {
                      show: true,
                      showAlways: true,
                      label: 'Total Audience',
                      fontSize: '14px',
                      fontWeight: 400,
                      color: '#495057',
                  }
              }
          }
      }
  },
  colors: ["var(--primary-color)", "rgba(133, 204, 65, 1)", "rgba(40, 200, 235, 1)"],
}

socialData = [
  {
    platform: 'Instagram',
    followers: '457K',
    percentageChange: '1.5%',
    icon: 'ri-instagram-line',
    bgClass: 'bg-primary',
    trendIcon: 'bi-arrow-down-right',
    trendColor: 'text-danger',
    timePeriod: 'Followers'
  },
  {
    platform: 'LinkedIn',
    followers: '457K',
    percentageChange: '1.5%',
    icon: 'ri-linkedin-line',
    bgClass: 'bg-success',
    trendIcon: 'bi-arrow-down-right',
    trendColor: 'text-danger',
    timePeriod: 'Followers'
  },
  {
    platform: 'Facebook',
    followers: '2.1K',
    percentageChange: '1.9%',
    icon: 'ri-facebook-circle-line',
    bgClass: 'bg-info',
    trendIcon: 'bi-arrow-down-right',
    trendColor: 'text-danger',
    timePeriod: '1 hr ago'
  },
  {
    platform: 'Twitter',
    followers: '2.1K',
    percentageChange: '1.9%',
    icon: 'ri-twitter-x-line',
    bgClass: 'bg-secondary',
    trendIcon: 'bi-arrow-up-right',
    trendColor: 'text-success',
    timePeriod: '1 week ago'
  },
  {
    platform: 'Youtube',
    followers: '1.1M',
    percentageChange: '1.9%',
    icon: 'ri-youtube-line',
    bgClass: 'bg-warning',
    trendIcon: 'bi-arrow-up-right',
    trendColor: 'text-success',
    timePeriod: '1 day ago'
  },
  {
    platform: 'Messenger',
    followers: '1.1M',
    percentageChange: '1.9%',
    icon: 'ri-messenger-line',
    bgClass: 'bg-danger',
    trendIcon: 'bi-arrow-up-right',
    trendColor: 'text-success',
    timePeriod: '1 day ago'
  }
];
friendRequests = [
  {
    name: 'Socrates Itumay',
    company: 'want\'s to add you as a friend',
    image: './assets/images/faces/2.jpg'
  },
  {
    name: 'Ryan Gercia',
    company: 'want\'s to add you as a friend',
    image: './assets/images/faces/3.jpg'
  },
  {
    name: 'Prax Bhav',
    company: 'want\'s to add you as a friend',
    image: './assets/images/faces/10.jpg'
  },
  {
    name: 'Jackie Chen',
    company: 'want\'s to add you as a friend',
    image: './assets/images/faces/12.jpg'
  },
  {
    name: 'Samantha Sam',
    company: 'want\'s to add you as a friend',
    image: './assets/images/faces/5.jpg'
  },
  {
    name: 'Robert Lewis',
    company: 'want\'s to add you as a friend',
    image: './assets/images/faces/15.jpg'
  }
];

followerSegments = [
  { range: '10-15 Years', count: 14245, progress: 85, color: 'bg-primary' },
  { range: '25-32 Years', count: 5273, progress: 70, color: 'bg-secondary' },
  { range: '33-42 Years', count: 3575, progress: 60, color: 'bg-success' },
  { range: '45-53 Years', count: 2553, progress: 45, color: 'bg-warning' },
  { range: '53-65 Years', count: 1643, progress: 35, color: 'bg-info' },
  { range: '65-80 Years', count: 656, progress: 15, color: 'bg-danger' }
];

PostInsightHeader = [
  {header:'Post Name'},
  {header:'Posted On'},
  {header:'Platform'},
  {header:'Views'},
  {header:'Earning'},
  {header:'Action'}
]

tableData = [
  {
    image: './assets/images/media/media-23.jpg',
    title: 'Behind the Scenes',
    date: '2024-02-15',
    getBadgeClass:'primary',
    platform: 'Youtube',
    views: '9.5k+',
    revenue: '$1,27,443'
  },
  {
    image: './assets/images/media/media-24.jpg',
    title: 'Monday Motivation',
    date: '2024-02-14',
    getBadgeClass:'secondary',
    platform: 'Youtube',
    views: '1M+',
    revenue: '$6,74,474'
  },
  {
    image: './assets/images/media/media-25.jpg',
    title: 'Travel Diaries',
    date: '2024-02-13',
    getBadgeClass:'success',
    platform: 'Youtube',
    views: '10k+',
    revenue: '$12,575'
  },
  {
    image: './assets/images/media/media-26.jpg',
    title: 'Recipe of the Day',
    date: '2024-02-12',
    getBadgeClass:'warning',
    platform: 'Youtube',
    views: '3.5k',
    revenue: '$12,38,470'
  },
  {
    image: './assets/images/media/media-27.jpg',
    title: 'Fashion Forward',
    date: '2024-02-11',
    getBadgeClass:'primary',
    platform: 'Youtube',
    views: '1.6M+',
    revenue: '$12,734'
  }
];

browserData = [
  {
    name: 'Chrome',
    company: 'Google, Inc.',
    imgSrc: './assets/images/browsers/chrome.png',
    users: '35,502',
    badgeClass: 'bg-primary-transparent'
  },
  {
    name: 'Edge',
    company: 'Microsoft Corporation, Inc.',
    imgSrc: './assets/images/browsers/edge.png',
    users: '25,364',
    badgeClass: 'bg-success-transparent'
  },
  {
    name: 'Firefox',
    company: 'Mozilla Foundation, Inc.',
    imgSrc: './assets/images/browsers/firefox.png',
    users: '14,635',
    badgeClass: 'bg-info-transparent'
  },
  {
    name: 'Safari',
    company: 'Apple Corporation, Inc.',
    imgSrc: './assets/images/browsers/safari.png',
    users: '35,657',
    badgeClass: 'bg-secondary-transparent'
  },
  {
    name: 'Opera',
    company: 'Opera, Inc.',
    imgSrc: './assets/images/browsers/opera.png',
    users: '12,563',
    badgeClass: 'bg-warning-transparent'
  }
];

PerformanceHeader = [
  {header:'Platform'},
  {header:'Date'},
  {header:'Likes'},
  {header:'Comments'},
  {header:'Shares'},
  {header:'Impressions'},
  {header:'Engagemen(%)'},
  {header:'Action'}
]
socialStats = [
  {
    platform: 'Youtube',
    date: '2024-02-15',
    totalPosts: 150,
    likes: 25,
    comments: 50,
    badgeClass: 'bg-primary-transparent',
    users: '10,000',
    engagementRate: '3.5%',
    iconClass: 'ri-youtube-fill',
  },
  {
    platform: 'Twitter',
    date: '2024-02-14',
    totalPosts: 200,
    likes: 30,
    comments: 70,
    badgeClass: 'bg-secondary-transparent',
    users: '15,000',
    engagementRate: '4.2%',
    iconClass: 'ri-twitter-x-fill',
  },
  {
    platform: 'Facebook',
    date: '2024-02-13',
    totalPosts: 300,
    likes: 40,
    comments: 90,
    badgeClass: 'bg-success-transparent',
    users: '20,000',
    engagementRate: '5.0%',
    iconClass: 'ri-messenger-fill',
  },
  {
    platform: 'Instagram',
    date: '2024-02-12',
    totalPosts: 100,
    likes: 20,
    comments: 30,
    badgeClass: 'bg-orange-transparent',
    users: '8,000',
    engagementRate: '2.1%',
    iconClass: 'ri-instagram-fill',
  },
  {
    platform: 'Linkedin',
    date: '2024-02-11',
    totalPosts: 120,
    likes: 15,
    comments: 40,
    badgeClass: 'bg-info-transparent',
    users: '12,000',
    engagementRate: '3.0%',
    iconClass: 'ri-linkedin-box-fill',
  }
];

socialActivities = [
  {
    name: 'Meisha Kerr',
    action: 'Started Following You',
    date: 'Dec, 13 2024',
    platform: 'Youtube',
    avatar: './assets/images/faces/1.jpg',
    textColor: 'text-primary'
  },
  {
    name: 'Simon Cowall',
    action: 'Liked Your Post',
    date: 'Apr, 13 2024',
    platform: 'Twitter',
    avatar: './assets/images/faces/2.jpg',
    textColor: 'text-secondary'
  },
  {
    name: 'Owen Foster',
    action: 'Your Request Accepted',
    date: 'Nov, 23 2024',
    platform: 'Instagram',
    avatar: './assets/images/faces/3.jpg',
    textColor: 'text-success'
  },
  {
    name: 'Liam Parker',
    action: 'Started Following You',
    date: 'Oct, 19 2024',
    platform: 'Twitter',
    avatar: './assets/images/faces/4.jpg',
    textColor: 'text-info'
  },
  {
    name: 'Khabib',
    action: 'Commented on your post',
    date: 'Jan, 12 2024',
    platform: 'Facebook',
    avatar: './assets/images/faces/5.jpg',
    textColor: 'text-warning'
  },
  {
    name: 'Leo Phillip',
    action: 'Your Followed By',
    date: 'Nov, 19 2024',
    platform: 'LinkedIn',
    avatar: './assets/images/faces/13.jpg',
    textColor: 'text-info'
  }
];

}
