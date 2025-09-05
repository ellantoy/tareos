import { Component } from '@angular/core';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { SharedModule } from '../../../shared/sharedmodule';
import { ApexChartComponent } from '../../../@spk/apex-chart/apex-chart.component';
import { SpkReusableTablesComponent } from '../../../@spk/spk-reusable-tables/spk-reusable-tables.component';
import { CommonModule } from '@angular/common';
import { SpkAnalyticsCardComponent } from '../../../@spk/reusable-dashboards/spk-analytics-card/spk-analytics-card.component';
import { SpkDropdownsComponent } from '../../../@spk/reusable-ui-elements/spk-dropdowns/spk-dropdowns.component';

@Component({
  selector: 'app-analytics',
  standalone: true,
  imports: [NgbModule,SharedModule,ApexChartComponent,SpkAnalyticsCardComponent,CommonModule,SpkReusableTablesComponent,SpkDropdownsComponent],
  templateUrl: './analytics.component.html',
  styleUrl: './analytics.component.scss'
})
export class AnalyticsComponent {
  chartOptions1:any={ 
    series: [
      {
        data: [1, 20, 15, 35, 30, 25, 55, 45, 65],
      },
    ],
    chart: {
      height: 70,
      width: 100,
      type: 'area',
      zoom: {
        enabled: false
      },
      sparkline: {
        enabled: true
      }
    },
    tooltip: {
      enabled: true,
      x: {
        show: false
      },
      y: {
        title: {
          formatter: function () {
            return ''
          }
        }
      },
      marker: {
        show: false
      }
    },
    dataLabels: {
      enabled: false
    },
    grid: {
      borderColor: 'transparent',
    },
    xaxis: {
      crosshairs: {
        show: false,
      }
    },
    yaxis: {
      max: 65,
    },
    colors: ["var(--primary-color)"],
    stroke: {
      width: [1.5],
    },
    fill: {
      opacity: 0.001,
      type: ['gradient'],
      gradient: {
        shade: 'light',
        shadeIntensity: 0.5,
        gradientToColors: ['var(--primary01)'],
        inverseColors: true,
        opacityFrom: 0.35,
        opacityTo: 0.05,
        stops: [0, 50, 100],
        colorStops: [
          [
            {
              offset: 0,
              color: "var(--primary-color)",
              opacity: 0.4
            },
            {
              offset: 55,
              color: "var(--primary-color)",
              opacity: 0.2
            },
            {
              offset: 100,
              color: "var(--primary-color)",
              opacity: 0
            }
          ],
        ]
      }
    }
  }
  chartOptions2:any={
    series: [
      {
        data: [1, 20, 15, 35, 30, 25, 55, 45, 65],
      },
    ],
    chart: {
      height: 70,
      width: 100,
      type: 'area',
      zoom: {
        enabled: false
      },
      sparkline: {
        enabled: true
      }
    },
    tooltip: {
      enabled: true,
      x: {
        show: false
      },
      y: {
        title: {
          formatter: function () {
            return ''
          }
        }
      },
      marker: {
        show: false
      }
    },
    dataLabels: {
      enabled: false
    },
    grid: {
      borderColor: 'transparent',
    },
    xaxis: {
      crosshairs: {
        show: false,
      }
    },
    yaxis: {
      max: 65,
    },
    colors: ["rgb(133, 204, 65)"],
    stroke: {
      width: [1.5],
    },
    fill: {
      opacity: 0.001,
      type: ['gradient'],
      gradient: {
        shade: 'light',
        shadeIntensity: 0.5,
        gradientToColors: ['rgba(133, 204, 65, 0.1)'],
        inverseColors: true,
        opacityFrom: 0.35,
        opacityTo: 0.05,
        stops: [0, 50, 100],
        colorStops: [
          [
            {
              offset: 0,
              color: "rgba(133, 204, 65, 1)",
              opacity: 0.4
            },
            {
              offset: 55,
              color: "rgba(133, 204, 65, 1)",
              opacity: 0.2
            },
            {
              offset: 100,
              color: "rgba(133, 204, 65, 1)",
              opacity: 0
            }
          ],
        ]
      }
    }
  }
  chartOptions3:any={
    series: [
      {
        data: [1, 20, 15, 35, 30, 25, 55, 45, 65],
      },
    ],
    chart: {
      height: 70,
      width: 100,
      type: 'area',
      zoom: {
        enabled: false
      },
      sparkline: {
        enabled: true
      }
    },
    tooltip: {
      enabled: true,
      x: {
        show: false
      },
      y: {
        title: {
          formatter: function () {
            return ''
          }
        }
      },
      marker: {
        show: false
      }
    },
    dataLabels: {
      enabled: false
    },
    grid: {
      borderColor: 'transparent',
    },
    xaxis: {
      crosshairs: {
        show: false,
      }
    },
    yaxis: {
      max: 65,
    },
    colors: ["rgb(40, 200, 235)"],
    stroke: {
      width: [1.5],
    },
    fill: {
      opacity: 0.001,
      type: ['gradient'],
      gradient: {
        shade: 'light',
        shadeIntensity: 0.5,
        gradientToColors: ['rgba(40, 200, 235, 0.1)'],
        inverseColors: true,
        opacityFrom: 0.35,
        opacityTo: 0.05,
        stops: [0, 50, 100],
        colorStops: [
          [
            {
              offset: 0,
              color: "rgba(40, 200, 235, 1)",
              opacity: 0.4
            },
            {
              offset: 55,
              color: "rgba(40, 200, 235, 1)",
              opacity: 0.2
            },
            {
              offset: 100,
              color: "rgba(40, 200, 235, 1)",
              opacity: 0
            }
          ],
        ]
      }
    }
   }
  chartOptions4:any={ 
    series: [
      {
        data: [1, 20, 15, 35, 30, 25, 55, 45, 65],
      },
    ],
    chart: {
      height: 70,
      width: 100,
      type: 'area',
      zoom: {
        enabled: false
      },
      sparkline: {
        enabled: true
      }
    },
    tooltip: {
      enabled: true,
      x: {
        show: false
      },
      y: {
        title: {
          formatter: function () {
            return ''
          }
        }
      },
      marker: {
        show: false
      }
    },
    dataLabels: {
      enabled: false
    },
    grid: {
      borderColor: 'transparent',
    },
    xaxis: {
      crosshairs: {
        show: false,
      }
    },
    yaxis: {
      max: 65,
    },
    colors: ["rgb(244, 110, 244)"],
    stroke: {
      width: [1.5],
    },
    fill: {
      opacity: 0.001,
      type: ['gradient'],
      gradient: {
        shade: 'light',
        shadeIntensity: 0.5,
        gradientToColors: ['rgba(244, 110, 244, 0.1)'],
        inverseColors: true,
        opacityFrom: 0.35,
        opacityTo: 0.05,
        stops: [0, 50, 100],
        colorStops: [
          [
            {
              offset: 0,
              color: "rgba(244, 110, 244, 1)",
              opacity: 0.4
            },
            {
              offset: 55,
              color: "rgba(244, 110, 244, 1)",
              opacity: 0.2
            },
            {
              offset: 100,
              color: "rgba(244, 110, 244, 1)",
              opacity: 0
            }
          ],
        ]
      }
    }
  }
  
  chartOptions5:any={ 
    series: [
      {
        type: "line",
        name: "Viewers",
        data: [
          {
            x: "Jan",
            y: 320,
          },
          {
            x: "Feb",
            y: 560,
          },
          {
            x: "Mar",
            y: 250,
          },
          {
            x: "Apr",
            y: 486,
          },
          {
            x: "May",
            y: 310,
          },
          {
            x: "Jun",
            y: 560,
          },
          {
            x: "Jul",
            y: 560,
          },
          {
            x: "Aug",
            y: 860,
          },
          {
            x: "Sep",
            y: 400,
          },
          {
            x: "Oct",
            y: 500,
          },
          {
            x: "Nov",
            y: 350,
          },
          {
            x: "Dec",
            y: 700,
          },
        ],
      },
      {
        type: "bar",
        name: "Followers",
        data: [
          {
            x: "Jan",
            y: 680,
          },
          {
            x: "Feb",
            y: 800,
          },
          {
            x: "Mar",
            y: 680,
          },
          {
            x: "Apr",
            y: 840,
          },
          {
            x: "May",
            y: 980,
          },
          {
            x: "Jun",
            y: 720,
          },
          {
            x: "Jul",
            y: 900,
          },
          {
            x: "Aug",
            y: 1000,
          },
          {
            x: "Sep",
            y: 850,
          },
          {
            x: "Oct",
            y: 950,
          },
          {
            x: "Nov",
            y: 750,
          },
          {
            x: "Dec",
            y: 860,
          },
        ],
      },
      {
        type: "bar",
        name: "Sessions",
        data: [
          {
            x: "Jan",
            y: 180,
          },
          {
            x: "Feb",
            y: 250,
          },
          {
            x: "Mar",
            y: 300,
          },
          {
            x: "Apr",
            y: 350,
          },
          {
            x: "May",
            y: 350,
          },
          {
            x: "Jun",
            y: 250,
          },
          {
            x: "Jul",
            y: 150,
          },
          {
            x: "Aug",
            y: 250,
          },
          {
            x: "Sep",
            y: 350,
          },
          {
            x: "Oct",
            y: 350,
          },
          {
            x: "Nov",
            y: 250,
          },
          {
            x: "Dec",
            y: 200,
          },
        ],
      },
    ],
    chart: {
      type: "area",
      height: 342,
      animations: {
        speed: 500,
      },
      zoom: {
        enabled: false
      },
      toolbar: {
        show: false,
      },
      stacked: {
        enabled: true
      }
    },
    colors: ["rgba(244, 110, 244, 1)", "rgba(40, 200, 235, 1)", "var(--primary-color)"],
    dataLabels: {
      enabled: false,
    },
    grid: {
      borderColor: "#f1f1f1",
      strokeDashArray: 3,
    },
    fill: {
      type: ['soild', 'solid', 'soild'],
      gradient: {
        opacityFrom: 0.05,
        opacityTo: 0.05,
        shadeIntensity: 0.1,
      },
    },
    stroke: {
      curve: ["smooth", "stepline", "smooth"],
      width: [2, 2, 2],
      dashArray: [0, 0, 0, 0],
    },
    xaxis: {
      axisTicks: {
        show: false,
      },
    },
    yaxis: {
      labels: {
        formatter: function (value:any) {
          return "$" + value;
        },
      },
    },
    plotOptions: {
      bar: {
        columnWidth: "15%",
        borderRadius: "2",
        borderRadiusApplication: 'around',
        borderRadiusWhenStacked: 'all',
      },
    },
    tooltip: {
      y: [
        {
          formatter: function (e:any) {
            return void 0 !== e ? e.toFixed(0) : e;
          },
        },
        {
          formatter: function (e:any) {
            return void 0 !== e ? e.toFixed(0) : e;
          },
        },
        {
          formatter: function (e:any) {
            return void 0 !== e ? e.toFixed(0) : e;
          },
        },
      ],
    },
    legend: {
      show: true,
      position: "top",
      inverseOrder: true,
      markers: {
        size: 5,
        shape: "circle",
        strokeWidth: 0
      }
    },
  }
  chartOptions6:any={ 
    series: [{
      name: 'Last Year',
      data: [35, 36, 22, 44, 48, 37, 36, 26, 27, 33, 32, 36],
      type: 'line',
    }, {
      name: 'This Year',
      data: [55, 53, 46, 40, 45, 38, 46, 37, 22, 34, 40, 44,],
      type: 'bar',
    },
    ],
    chart: {
      type: 'line',
      height: 205,
      stacked: true,
      toolbar: {
        show: false,
      },
      sparkline: {
        enabled: false
      },
      zoom: {
        enabled: false
      },
    },
    plotOptions: {
      bar: {
        columnWidth: "40%",
        borderRadius: "4",
        borderRadiusApplication: 'around',
        borderRadiusWhenStacked: 'all',
      },
    },
    grid: {
      show: true,
      xaxis: {
        lines: {
          show: true
        }
      },
      yaxis: {
        lines: {
          show: false
        }
      },
      padding: {
        top: 2,
        right: 2,
        bottom: 2,
        left: 2
      },
      borderColor: '#f1f1f1',
      strokeDashArray: 3
    },
    markers: {
      size: 3,
      hover: {
        size: 3
      },
    },
    colors: ["rgba(244, 110, 244, 1)", "var(--primary-color)"],
    stroke: {
      curve: 'straight',
      width: 2,
      dashArray: 5
    },
    legend: {
      show: true,
      position: "bottom",
      fontSize: '10px',
      fontFamily: 'Poppins',
      markers: {
        size: 3.5,
        shape: "circle",
        strokeWidth: 0
      },
    },
    yaxis: {
      axisBorder: {
        show: false,
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
        show: false,
        formatter: function (y:any) {
          return y.toFixed(0) + "";
        }
      }
    },
    xaxis: {
      type: 'month',
      categories: ['1', '2', '3', '4', '5', '6', '7', '8', '9', '10', '11', '12'],
      axisBorder: {
        show: true,
        color: "rgba(119, 119, 142, 0.05)",
        offsetX: 0,
        offsetY: 0,
      },
      title: {
        style: {
          color: '#adb5be',
          fontSize: '5px',
          fontFamily: 'poppins, sans-serif',
          fontWeight: 600,
          cssClass: 'apexcharts-yaxis-label',
        },
      },
    },
  }
  chartOptions7:any={ 
    series: [14, 23, 21, 17, 15],
  chart: {
    type: 'polarArea',
    height: 320
  },
  stroke: {
    colors: ['rgba(255,255,255,0.5)'],
  },
  fill: {
    opacity: 1
  },
  legend: {
    show: false,
    position: 'bottom',
    markers: {
      size: 4,
      shape: 'circle',
    },
  },
  labels: ['Organic Search', 'Direct', 'Referral', 'Social', 'Email'],
  colors: ["var(--primary08)", "rgba(133, 204, 65, 0.8)", "rgba(40, 200, 235, 0.8)", "rgba(244, 110, 244, 0.8)", "rgba(250, 182, 50, 0.8)"],
  plotOptions: {
    pie: {
      startAngle: -90,
      endAngle: 90,
      offsetY: 0,
      expandOnClick: false,
      donut: {
        size: '95%',
        background: 'transparent',
      }
    }
  },
  grid: {
    padding: {
      bottom: -120
    }
  },
  }

  countries = [
    {
      flag: './assets/images/flags/us_flag.jpg',
      country: 'United States',
      percentage: '5.1%',
      trend: 'up',
      visits: '26,890',
    },
    {
      flag: './assets/images/flags/germany_flag.jpg',
      country: 'Germany',
      percentage: '1.3%',
      trend: 'up',
      visits: '12,345',
    },
    {
      flag: './assets/images/flags/spain_flag.jpg',
      country: 'Spain',
      percentage: '2.7%',
      trend: 'up',
      visits: '18,765',
    },
    {
      flag: './assets/images/flags/china_flag.jpg',
      country: 'China',
      percentage: '1.0%',
      trend: 'down',
      visits: '9,874',
    },
    {
      flag: './assets/images/flags/mexico_flag.jpg',
      country: 'Mexico',
      percentage: '2.7%',
      trend: 'up',
      visits: '21,456',
    },
    {
      flag: './assets/images/flags/canada_flag.jpg',
      country: 'Canada',
      percentage: '2.1%',
      trend: 'up',
      visits: '28,976',
    },
    {
      flag: './assets/images/flags/argentina_flag.jpg',
      country: 'Argentina',
      percentage: '5.4%',
      trend: 'up',
      visits: '21,456',
    },
    {
      flag: './assets/images/flags/singapore_flag.jpg',
      country: 'Singapore',
      percentage: '0.7%',
      trend: 'up',
      visits: '16,789',
    },
  ];
  landingPages = [
    {
      path: 'main/landing-page/home',
      visits: '2,345',
      progress: 50,
      progressColor: 'bg-primary',
    },
    {
      path: 'main/landing-page/products/popular-category',
      visits: '1,987',
      progress: 30,
      progressColor: 'bg-success',
    },
    {
      path: 'main/landing-page/blog/latest-article',
      visits: '1,532',
      progress: 20,
      progressColor: 'bg-info',
    },
    {
      path: 'main/landing-page/about-us/team-page',
      visits: '1,254',
      progress: 40,
      progressColor: 'bg-secondary',
    },
    {
      path: 'main/landing-page/about-us/profile',
      visits: '1,103',
      progress: 40,
      progressColor: 'bg-warning',
    },
    {
      path: 'main/landing-page/contact/support',
      visits: '985',
      progress: 60,
      progressColor: 'bg-danger',
    },
  ];
  tableHeader = [
    {header:'Source'},
    {header:'Total' ,tableHeadColumn:'text-center'},
    {header:'Growth'},
  ]
  data = [
    { source: 'Search Engines', visits: 300, textColor:'success',change: 5.2 },
    { source: 'Social Media', visits: 450, textColor:'success',change: 10.3 },
    { source: 'Direct', visits: 200, textColor:'success',change: 2.5 },
    { source: 'Referral Sites', visits: 150, textColor:'danger',change: 1.2 },
    { source: 'Email', visits: 100, textColor:'success',change: 3.8 },
  ];

 visitorsHeader = [
  {header:'Total Visitors'},
  {header:'Sessions Duration'},
  {header:'New Visitors'},
  {header:'Returning Visitors'},
  {header:'Bounce Rate'},
  {header:'Conversion %'},
  {header:'Avg Session Time'},
  {header:'Top Sources'}
 ]

 visitorsdata = [
  { value1: '32,190', time1: '15m 30s', value2: '12,345', value3: '19,845', percent1: '45%', percent2: '3.5%', time2: '3m 45s', sources: 'Google, Facebook' },
  { value1: '28,674', time1: '13m 25s', value2: '10,432', value3: '18,242', percent1: '47%', percent2: '3.8%', time2: '3m 10s', sources: 'Twitter, LinkedIn' },
  { value1: '35,789', time1: '16m 10s', value2: '13,567', value3: '22,222', percent1: '43%', percent2: '3.2%', time2: '4m 05s', sources: 'Bing, YouTube' },
  { value1: '30,234', time1: '14m 50s', value2: '11,678', value3: '18,556', percent1: '46%', percent2: '3.6%', time2: '3m 30s', sources: 'Instagram, Reddit' },
  { value1: '33,456', time1: '15m 45s', value2: '12,890', value3: '20,566', percent1: '44%', percent2: '3.4%', time2: '3m 55s', sources: 'Yahoo, Pinterest' },
  { value1: '35,789', time1: '16m 10s', value2: '13,567', value3: '22,222', percent1: '43%', percent2: '3.2%', time2: '4m 05s', sources: 'Bing, YouTube' },
];

analyticsData = [
  { 
    title: 'Avg. Session Duration', 
    changeDirection: 'Increased', 
    changeValue: '5.2%', 
    changeClass: 'text-success', 
    changeIconClass: 'ti ti-arrow-narrow-up',
    value: '2m 35s',
    iconBg: 'bg-primary-transparent',
    iconClass: 'ri-timer-2-line fs-18'
  },
  { 
    title: 'New Users', 
    changeDirection: 'Increased', 
    changeValue: '10.3%', 
    changeClass: 'text-success', 
    changeIconClass: 'ti ti-arrow-narrow-up',
    value: '5,621',
    iconBg: 'bg-info-transparent',
    iconClass: 'ri-user-add-line fs-18'
  },
  { 
    title: 'Page Views', 
    changeDirection: 'Decreased', 
    changeValue: '2.15%', 
    changeClass: 'text-danger', 
    changeIconClass: 'ti ti-arrow-narrow-down',
    value: '45,890',
    iconBg: 'bg-success-transparent',
    iconClass: 'ri-eye-line fs-18'
  },
  { 
    title: 'Conversion Rate', 
    changeDirection: 'Increased', 
    changeValue: '1.5%', 
    changeClass: 'text-success', 
    changeIconClass: 'ti ti-arrow-narrow-up',
    value: '4.8%',
    iconBg: 'bg-secondary-transparent',
    iconClass: 'ri-line-chart-line fs-18'
  },
  { 
    title: 'Bounce Rate', 
    changeDirection: 'Decreased', 
    changeValue: '3.8%', 
    changeClass: 'text-danger', 
    changeIconClass: 'ti ti-arrow-narrow-down',
    value: '32.5%',
    iconBg: 'bg-warning-transparent',
    iconClass: 'ri-arrow-down-s-line fs-18'
  },
  { 
    title: 'Returning Visitors', 
    changeDirection: 'Increased', 
    changeValue: '7.2%', 
    changeClass: 'text-success', 
    changeIconClass: 'ti ti-arrow-narrow-up',
    value: '8,932',
    iconBg: 'bg-danger-transparent',
    iconClass: 'ri-user-line fs-18'
  },
  { 
    title: 'Avg. Order Value', 
    changeDirection: 'Decreased', 
    changeValue: '2.7%', 
    changeClass: 'text-danger', 
    changeIconClass: 'ti ti-arrow-narrow-down',
    value: '$56.78',
    iconBg: 'bg-teal-transparent',
    iconClass: 'ri-money-dollar-circle-line fs-18'
  } 
];
cards = [
  {
    title: 'Total Followers',
    value: '13,124',
    percentageChange: '2.62%',
    changeDirection: 'increase' as 'increase' | 'decrease', // Ensure correct type
    chartOptions: this.chartOptions1,
    iconClass: 'bx bx-group fs-22',
    avatarBgClass: 'bg-primary'
  },
  {
    title: 'Session Rate',
    value: '10,235',
    percentageChange: '3.35%',
    changeDirection: 'increase' as 'increase' | 'decrease', // Ensure correct type
    chartOptions: this.chartOptions2,
    iconClass: 'bx bx-trending-up fs-22',
    avatarBgClass: 'bg-success'
  },
  {
    title: 'Conversion Rate',
    value: '1,32,664',
    percentageChange: '1.86%',
    changeDirection: 'decrease' as 'increase' | 'decrease', // Ensure correct type
    chartOptions: this.chartOptions3,
    iconClass: 'bx bx-dollar fs-22',
    avatarBgClass: 'bg-info'
  },
  {
    title: 'Total Review',
    value: '6,365',
    percentageChange: '5.45%',
    changeDirection: 'increase' as 'increase' | 'decrease', // Ensure correct type
    chartOptions: this.chartOptions4,
    iconClass: 'bx bx-like fs-22',
    avatarBgClass: 'bg-secondary'
  }
];

}
