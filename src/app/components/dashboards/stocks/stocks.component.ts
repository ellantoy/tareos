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
import { SpkStockCard1Component } from '../../../@spk/reusable-dashboards/spk-stock-dashboards/spk-stock-card1/spk-stock-card1.component';
import { SpkStockCard2Component } from '../../../@spk/reusable-dashboards/spk-stock-dashboards/spk-stock-card2/spk-stock-card2.component';
import { CommonModule } from '@angular/common';
import { SpkStockCard3Component } from '../../../@spk/reusable-dashboards/spk-stock-dashboards/spk-stock-card3/spk-stock-card3.component';
Swiper.use([Autoplay, Navigation, Pagination]);
register();
@Component({
  selector: 'app-stocks',
  standalone: true,
  imports: [NgbModule,SharedModule,ApexChartComponent,SpkReusableTablesComponent,SpkDropdownsComponent,SpkStockCard1Component,SpkStockCard2Component,SpkStockCard3Component,CommonModule],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
  templateUrl: './stocks.component.html',
  styleUrl: './stocks.component.scss'
})
export class StocksComponent {
  @ViewChild('swiperContainer') swiperContainer!: ElementRef;

	ngAfterViewInit(): void {
		const swiperEl = this.swiperContainer.nativeElement;
	
		Object.assign(swiperEl, {
		  slidesPerView: 1,
		  spaceBetween: 20,
		  breakpoints: {
        320: {
          slidesPerView: 1,
          spaceBetween: 20,
        },
        500: {
          slidesPerView: 2,
          spaceBetween: 20,
        },
        768: {
          slidesPerView: 3,
          spaceBetween: 20,
        },
        1024: {
          slidesPerView: 3,
          spaceBetween: 20,
        },
        1200: {
          slidesPerView: 3,
          spaceBetween: 20,
        },
        1400: {
          slidesPerView: 4,
          spaceBetween: 20,
        },
        1600: {
          slidesPerView: 4,
          spaceBetween: 20,
        },
        1800: {
          slidesPerView: 5,
          spaceBetween: 20,
        },
      },
	  });
	}
  chartOptions:any = {
    series: [{
      'name': 'Invested',
      data: [
        [1327359600000, 30.95],
        [1327446000000, 31.34],
        [1327532400000, 31.18],
        [1327618800000, 31.05],
        [1327878000000, 31.00],
        [1327964400000, 30.95],
        [1328050800000, 31.24],
        [1328137200000, 31.29],
        [1328223600000, 31.85],
        [1328482800000, 31.86],
        [1328569200000, 32.28],
        [1328655600000, 32.10],
        [1328742000000, 32.65],
        [1328828400000, 32.21],
        [1329087600000, 32.35],
        [1329174000000, 32.44],
        [1329260400000, 32.46],
        [1329346800000, 32.86],
        [1329433200000, 32.75],
        [1329778800000, 32.54],
        [1329865200000, 32.33],
        [1329951600000, 32.97],
        [1330038000000, 33.41],
        [1330297200000, 33.27],
        [1330383600000, 33.27],
        [1330470000000, 32.89],
        [1330556400000, 33.10],
        [1330642800000, 33.73],
        [1330902000000, 33.22],
        [1330988400000, 31.99],
        [1331074800000, 32.41],
        [1331161200000, 33.05],
        [1331247600000, 33.64],
        [1331506800000, 33.56],
        [1331593200000, 34.22],
        [1331679600000, 33.77],
        [1331766000000, 34.17],
        [1331852400000, 33.82],
        [1332111600000, 34.51],
        [1332198000000, 33.16],
        [1332284400000, 33.56],
        [1332370800000, 33.71],
        [1332457200000, 33.81],
        [1332712800000, 34.40],
        [1332799200000, 34.63],
        [1332885600000, 34.46],
        [1332972000000, 34.48],
        [1333058400000, 34.31],
        [1333317600000, 34.70],
        [1333404000000, 34.31],
        [1333490400000, 33.46],
        [1333576800000, 33.59],
        [1333922400000, 33.22],
        [1334008800000, 32.61],
        [1334095200000, 33.01],
        [1334181600000, 33.55],
        [1334268000000, 33.18],
        [1334527200000, 32.84],
        [1334613600000, 33.84],
        [1334700000000, 33.39],
        [1334786400000, 32.91],
        [1334872800000, 33.06],
        [1335132000000, 32.62],
        [1335218400000, 32.40],
        [1335304800000, 33.13],
        [1335391200000, 33.26],
        [1335477600000, 33.58],
        [1335736800000, 33.55],
        [1335823200000, 33.77],
        [1335909600000, 33.76],
        [1335996000000, 33.32],
        [1336082400000, 32.61],
        [1336341600000, 32.52],
        [1336428000000, 32.67],
        [1336514400000, 32.52],
        [1336600800000, 31.92],
        [1336687200000, 32.20],
        [1336946400000, 32.23],
        [1337032800000, 32.33],
        [1337119200000, 32.36],
        [1337205600000, 32.01],
        [1337292000000, 31.31],
        [1337551200000, 32.01],
        [1337637600000, 32.01],
        [1337724000000, 32.18],
        [1337810400000, 31.54],
        [1337896800000, 31.60],
        [1338242400000, 32.05],
        [1338328800000, 31.29],
        [1338415200000, 31.05],
        [1338501600000, 29.82],
        [1338760800000, 30.31],
        [1338847200000, 30.70],
        [1338933600000, 31.69],
        [1339020000000, 31.32],
        [1339106400000, 31.65],
        [1339365600000, 31.13],
        [1339452000000, 31.77],
        [1339538400000, 31.79],
        [1339624800000, 31.67],
        [1339711200000, 32.39],
        [1339970400000, 32.63],
        [1340056800000, 32.89],
        [1340143200000, 31.99],
        [1340229600000, 31.23],
        [1340316000000, 31.57],
        [1340575200000, 30.84],
        [1340661600000, 31.07],
        [1340748000000, 31.41],
        [1340834400000, 31.17],
        [1340920800000, 32.37],
        [1341180000000, 32.19],
        [1341266400000, 32.51],
        [1341439200000, 32.53],
        [1341525600000, 31.37],
        [1341784800000, 30.43],
        [1341871200000, 30.44],
        [1341957600000, 30.20],
        [1342044000000, 30.14],
        [1342130400000, 30.65],
        [1342389600000, 30.40],
        [1342476000000, 30.65],
        [1342562400000, 31.43],
        [1342648800000, 31.89],
        [1342735200000, 31.38],
        [1342994400000, 30.64],
        [1343080800000, 30.02],
        [1343167200000, 30.33],
        [1343253600000, 30.95],
        [1343340000000, 31.89],
        [1343599200000, 31.01],
        [1343685600000, 30.88],
        [1343772000000, 30.69],
        [1343858400000, 30.58],
        [1343944800000, 32.02],
        [1344204000000, 32.14],
        [1344290400000, 32.37],
        [1344376800000, 32.51],
        [1344463200000, 32.65],
        [1344549600000, 32.64],
        [1344808800000, 32.27],
        [1344895200000, 32.10],
        [1344981600000, 32.91],
        [1345068000000, 33.65],
        [1345154400000, 33.80],
        [1345413600000, 33.92],
        [1345500000000, 33.75],
        [1345586400000, 33.84],
        [1345672800000, 33.50],
        [1345759200000, 32.26],
        [1346018400000, 32.32],
        [1346104800000, 32.06],
        [1346191200000, 31.96],
        [1346277600000, 31.46],
        [1346364000000, 31.27],
        [1346709600000, 31.43],
        [1346796000000, 32.26],
        [1346882400000, 32.79],
        [1346968800000, 32.46],
        [1347228000000, 32.13],
        [1347314400000, 32.43],
        [1347400800000, 32.42],
        [1347487200000, 32.81],
        [1347573600000, 33.34],
        [1347832800000, 33.41],
        [1347919200000, 32.57],
        [1348005600000, 33.12],
        [1348092000000, 34.53],
        [1348178400000, 33.83],
        [1348437600000, 33.41],
        [1348524000000, 32.90],
        [1348610400000, 32.53],
        [1348696800000, 32.80],
        [1348783200000, 32.44],
        [1349042400000, 32.62],
        [1349128800000, 32.57],
        [1349215200000, 32.60],
        [1349301600000, 32.68],
        [1349388000000, 32.47],
        [1349647200000, 32.23],
        [1349733600000, 31.68],
        [1349820000000, 31.51],
        [1349906400000, 31.78],
        [1349992800000, 31.94],
        [1350252000000, 32.33],
        [1350338400000, 33.24],
        [1350424800000, 33.44],
        [1350511200000, 33.48],
        [1350597600000, 33.24],
        [1350856800000, 33.49],
        [1350943200000, 33.31],
        [1351029600000, 33.36],
        [1351116000000, 33.40],
        [1351202400000, 34.01],
        [1351638000000, 34.02],
        [1351724400000, 34.36],
        [1351810800000, 34.39],
        [1352070000000, 34.24],
        [1352156400000, 34.39],
        [1352242800000, 33.47],
        [1352329200000, 32.98],
        [1352415600000, 32.90],
        [1352674800000, 32.70],
        [1352761200000, 32.54],
        [1352847600000, 32.23],
        [1352934000000, 32.64],
        [1353020400000, 32.65],
        [1353279600000, 32.92],
        [1353366000000, 32.64],
        [1353452400000, 32.84],
        [1353625200000, 33.40],
        [1353884400000, 33.30],
        [1353970800000, 33.18],
        [1354057200000, 33.88],
        [1354143600000, 34.09],
        [1354230000000, 34.61],
        [1354489200000, 34.70],
        [1354575600000, 35.30],
        [1354662000000, 35.40],
        [1354748400000, 35.14],
        [1354834800000, 35.48],
        [1355094000000, 35.75],
        [1355180400000, 35.54],
        [1355266800000, 35.96],
        [1355353200000, 35.53],
        [1355439600000, 37.56],
        [1355698800000, 37.42],
        [1355785200000, 37.49],
        [1355871600000, 38.09],
        [1355958000000, 37.87],
        [1356044400000, 37.71],
        [1356303600000, 37.53],
        [1356476400000, 37.55],
        [1356562800000, 37.30],
        [1356649200000, 36.90],
        [1356908400000, 37.68],
        [1357081200000, 38.34],
        [1357167600000, 37.75],
        [1357254000000, 38.13],
        [1357513200000, 37.94],
        [1357599600000, 38.14],
        [1357686000000, 38.66],
        [1357772400000, 38.62],
        [1357858800000, 38.09],
        [1358118000000, 38.16],
        [1358204400000, 38.15],
        [1358290800000, 37.88],
        [1358377200000, 37.73],
        [1358463600000, 37.98],
        [1358809200000, 37.95],
        [1358895600000, 38.25],
        [1358982000000, 38.10],
        [1359068400000, 38.32],
        [1359327600000, 38.24],
        [1359414000000, 38.52],
        [1359500400000, 37.94],
        [1359586800000, 37.83],
        [1359673200000, 38.34],
        [1359932400000, 38.10],
        [1360018800000, 38.51],
        [1360105200000, 38.40],
        [1360191600000, 38.07],
        [1360278000000, 39.12],
        [1360537200000, 38.64],
        [1360623600000, 38.89],
        [1360710000000, 38.81],
        [1360796400000, 38.61],
        [1360882800000, 38.63],
        [1361228400000, 38.99],
        [1361314800000, 38.77],
        [1361401200000, 38.34],
        [1361487600000, 38.55],
        [1361746800000, 38.11],
        [1361833200000, 38.59],
        [1361919600000, 39.60],
      ]
    }],
    chart: {
      id: 'area-datetime',
      fontFamily: 'Poppins, Arial, sans-serif',
      type: 'area',
      height: 335,  
      zoom: {
        autoScaleYaxis: true,
        enabled: false,
      },
      toolbar: {
        show: false
      },
      dropShadow: {
        enabled: true,
        enabledOnSeries: undefined,
        top: 7,
        left: 0,
        blur: 1,
        color: ["var(--primary-color)"],
        opacity: 0.1,
      },
    },
    grid: {
      borderColor: '#f3f3f3',
      strokeDashArray: 3
    },
    dataLabels: {
      enabled: false
    },
    markers: {
      size: 0,
      style: 'hollow',
    },
    xaxis: {
      type: 'datetime',
      min: new Date('01 Mar 2012').getTime(),
      tickAmount: 6,
    },
    tooltip: {
      x: {
        format: 'dd MMM yyyy'
      }
    },
    colors: ["var(--primary-color)"],
    stroke: {
      width: [1.8],
      curve: ['smooth']
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
              color: "var(--primary01)",
              opacity: 1
            },
            {
              offset: 75,
              color: "var(--primary01)",
              opacity: 1
            },
            {
              offset: 100,
              color: "var(--primary01)",
              opacity: 1
            }
          ]
        ]
      }
    },
  }
  chartOptions1:any = { 
    chart: {
      type: 'area',
      height: 40,
      width: 120,
      sparkline: {
        enabled: true
      }
    },
    stroke: {
      show: true,
      curve: 'smooth',
      lineCap: 'butt',
      colors: undefined,
      width: 1.7,
      dashArray: 0,
    },
    series: [{
      name: 'Value',
      data: [
        0, 45, 54, 38, 56, 24, 65, 31, 37, 39, 62, 51, 35, 41, 35, 27, 93, 53,
        61, 27, 54, 43, 19, 46,
      ],
    }],
    yaxis: {
      min: 0,
      show: false,
      axisBorder: {
        show: false
      },
    },
    xaxis: {
      show: false,
      axisBorder: {
        show: false
      },
    },
    tooltip: {
      enabled: false,
    },
    colors: ["rgb(130, 116, 255)"],
    fill: {
      type: 'gradient',
      gradient: {
        opacityFrom: 0.8,
        opacityTo: 0.1,
        stops: [0, 90]
      }
    },
  }
  chartOptions2:any = {
    chart: {
      type: 'area',
      height: 40,
      width: 120,
      sparkline: {
        enabled: true
      }
    },
    stroke: {
      show: true,
      curve: 'smooth',
      lineCap: 'butt',
      colors: undefined,
      width: 1.5,
      dashArray: 0,
    },
    series: [{
      name: 'Value',
      data: [
        0, 45, 54, 38, 56, 24, 65, 31, 37, 39, 62, 51, 35, 41, 35, 27, 93, 53,
        61, 27, 54, 43, 19, 46,
      ],
    }],
    yaxis: {
      min: 0,
      show: false,
      axisBorder: {
        show: false
      },
    },
    xaxis: {
      show: false,
      axisBorder: {
        show: false
      },
    },
    tooltip: {
      enabled: false,
    },
    colors: ["rgba(40, 200, 235)"],
    fill: {
      type: 'gradient',
      gradient: {
        opacityFrom: 0.8,
        opacityTo: 0.1,
        stops: [0, 90]
      }
    },
  }
  chartOptions3:any = {
    chart: {
      type: 'area',
      height: 40,
      width: 120,
      sparkline: {
        enabled: true
      }
    },
    stroke: {
      show: true,
      curve: 'smooth',
      lineCap: 'butt',
      colors: undefined,
      width: 1.5,
      dashArray: 0,
    },
    series: [{
      name: 'Value',
      data: [
        0, 45, 54, 38, 56, 24, 65, 31, 37, 39, 62, 51, 35, 41, 35, 27, 93, 53,
        61, 27, 54, 43, 19, 46,
      ],
    }],
    yaxis: {
      min: 0,
      show: false,
      axisBorder: {
        show: false
      },
    },
    xaxis: {
      show: false,
      axisBorder: {
        show: false
      },
    },
    tooltip: {
      enabled: false,
    },
    colors: ["rgb(133, 204, 65)"],
    fill: {
      type: 'gradient',
      gradient: {
        opacityFrom: 0.8,
        opacityTo: 0.1,
        stops: [0, 90]
      }
    },
  }

  stocks = [
    {
      title: 'Apple',
      icon: 'bi-apple',
      value: '$12,289.44',
      changePercentage: '0.14%',
      changeValue: '+$1,780.80',
      color: 'text-primary',
      bgColor: 'bg-primary'
    },
    {
      title: 'Bitcoin',
      icon: 'bi-currency-bitcoin',
      value: '$58,151.02',
      changePercentage: '2.14%',
      changeValue: '+$5,745.62',
      color: 'text-info',
      bgColor: 'bg-info'
    },
    {
      title: 'Tesla',
      icon: 'bi-card-list',
      value: '$14,452.36',
      changePercentage: '4.02%',
      changeValue: '+$4,125.63',
      color: 'text-success',
      bgColor: 'bg-success'
    },
    {
      title: 'Amazon',
      icon: 'bi-gift',
      value: '$63,251.11',
      changePercentage: '5.14%',
      changeValue: '+$936.30',
      color: 'text-secondary',
      bgColor: 'bg-secondary'
    },
    {
      title: 'Alixpress',
      icon: 'bi-truck',
      value: '$5,401',
      changePercentage: '3.32%',
      changeValue: '+$4,360.65',
      color: 'text-warning',
      bgColor: 'bg-warning'
    },
    {
      title: 'Samsung',
      icon: 'bi-phone',
      value: '$10,732.12',
      changePercentage: '1.24%',
      changeValue: '+$3,221.29',
      color: 'text-danger',
      bgColor: 'bg-danger'
    },
    {
      title: 'Nvidia',
      icon: 'bi-nvidia',
      value: '$23,235',
      changePercentage: '1.14%',
      changeValue: '+$5,745.62',
      color: 'text-teal',
      bgColor: 'bg-teal'
    }
  ];

  Stock1 = [
    {
      companyName: 'Apple',
      companyIcon: 'bi-apple',
      currentValue: 170.77,
      percentageChange: 0.28,
      chartOptions: this.chartOptions1,
      companySymbol: 'apple',
      iconBg: 'primary',
      companyFullName: 'Apple Inc'
    },
    {
      companyName: 'Nvidia',
      companyIcon: 'bi-nvidia',
      currentValue: 170.77,
      percentageChange: -0.93,
      chartOptions: this.chartOptions2,
      companySymbol: 'nvidia',
      iconBg: 'info',
      companyFullName: 'NVIDIA Corp'
    },
    {
      companyName: 'Amazon',
      companyIcon: 'bi-amazon',
      currentValue: 133.09,
      percentageChange: 0.29,
      chartOptions: this.chartOptions3,
      companySymbol: 'amazon',
      iconBg: 'success',
      companyFullName: 'Amazon.com'
    }
  ];

  WatchlistHeader = [
    {header:'Symbol'},
    {header:'Last Price'},
    {header:'Change'},
  ]
  Watchlist = [
    {
      symbol: 'AAPL',
      name: 'Apple',
      currentValue: 150.20,
      percentageChange: 1.51,
      logoUrl: './assets/images/media/apps/apple.png'
    },
    {
      symbol: 'GOOG',
      name: 'Google',
      currentValue: 2500.50,
      percentageChange: -5.25,
      logoUrl: './assets/images/media/apps/google.png'
    },
    {
      symbol: 'MSFT',
      name: 'Microsoft',
      currentValue: 300.75,
      percentageChange: 2.32,
      logoUrl: './assets/images/media/apps/microsoft.png'
    },
    {
      symbol: 'AMZN',
      name: 'Amazon',
      currentValue: 3000.00,
      percentageChange: -10.56,
      logoUrl: './assets/images/media/apps/amazon.png'
    },
    {
      symbol: 'TSLA',
      name: 'Tesla',
      currentValue: 700.80,
      percentageChange: 8.23,
      logoUrl: './assets/images/media/apps/tesla.png'
    },
    {
      symbol: 'FB',
      name: 'Facebook',
      currentValue: 350.40,
      percentageChange: -3.29,
      logoUrl: './assets/images/media/apps/facebook.png'
    },
    {
      symbol: 'NVDA',
      name: 'Nvidia',
      currentValue: 800.60,
      percentageChange: 5.75,
      logoUrl: './assets/images/media/apps/nvidia.png'
    },
    {
      symbol: 'AMZN',
      name: 'Amazon',
      currentValue: 3000.00,
      percentageChange: -10.54,
      logoUrl: './assets/images/media/apps/amazon.png'
    }
  ];

  marketIndexes = [
    {
      name: 'Nifty 50',
      value: 12289.44,
      changePercentage: 0.14,
      changeAmount: -1780.80,
      icon: 'ti-trending-down',
      iconColor: 'bg-primary' // or 'bg-danger' based on trend
    },
    {
      name: 'SENSEX',
      value: 12289.44,
      changePercentage: -0.14,
      changeAmount: -1780.80,
      icon: 'ti-trending-down',
      iconColor: 'bg-danger'
    },
    {
      name: 'DJIA',
      value: 12289.44,
      changePercentage: 0.14,
      changeAmount: 1780.80,
      icon: 'ti-trending-up',
      iconColor: 'bg-primary'
    },
    {
      name: 'S&P 500',
      value: 12289.44,
      changePercentage: -0.14,
      changeAmount: -1780.80,
      icon: 'ti-trending-up',
      iconColor: 'bg-danger'
    },
    {
      name: 'NASDAQ',
      value: 12289.44,
      changePercentage: 0.14,
      changeAmount: 1780.80,
      icon: 'ti-trending-up',
      iconColor: 'bg-primary'
    }
  ];
  Activities = [
    {
      name: 'Apple',
      image: './assets/images/media/apps/apple.png',
      imageBg:'invert-1',
      companyName: 'Apple Inc',
      value: 5000,
      progress: 85,
      progressColor: 'bg-primary'
    },
    {
      name: 'Microsoft',
      image: './assets/images/media/apps/microsoft.png',
      imageBg:'',
      companyName: 'Microsoft, Inc',
      value: 11246,
      progress: 80,
      progressColor: 'bg-secondary'
    },
    {
      name: 'Nvidia',
      image: './assets/images/media/apps/nvidia.png',
      companyName: 'NVIDIA Corp',
      imageBg:'',
      value: 1566,
      progress: 50,
      progressColor: 'bg-success'
    },
    {
      name: 'Amazon',
      image: './assets/images/media/apps/amazon.png',
      imageBg:'',
      companyName: 'Amazon.com',
      value: 23855,
      progress: 60,
      progressColor: 'bg-warning'
    },
    {
      name: 'Google',
      image: './assets/images/media/apps/google.png',
      imageBg:'',
      companyName: 'google in.com',
      value: 6274,
      progress: 70,
      progressColor: 'bg-info'
    }
  ];

  StocksHeaser = [
    {header:'S.No'},
    {header:'Name'},
    {header:'Price'},
    {header:'Date Invested'},
    {header:'Market Cap'},
    {header:'Price Change'},
    {header:'Volume'},
    {header:'Actions'}
  ]

  StocksTable = [
    {
      id: 1,
      name: 'Apple',
      symbol: 'bi bi-apple',
      symbolBg:'primary',
      companyName: 'Apple Inc',
      price: '$16,839.10',
      date: '20-11-2023',
      marketCap: '324.01B',
      change: '+0.30%',
      changePercentage: 'bg-success-transparent',
      time: '10m'
    },
    {
      id: 2,
      name: 'Nvidia',
      symbol: 'bi bi-nvidia',
      symbolBg:'secondary',
      companyName: 'NVIDIA Corp',
      price: '1,217.96',
      date: '14-01-2024',
      marketCap: '$149,316,232,699',
      change: '-0.30%',
      changePercentage: 'bg-danger-transparent text-danger',
      time: '7m'
    },
    {
      id: 3,
      name: 'Amazon',
      symbol: 'bi bi-amazon',
      symbolBg:'success',
      companyName: 'Amazon.com, Inc.',
      price: '$43.49',
      date: '26-01-2024',
      marketCap: '$480,799,847',
      change: '0.45%',
      changePercentage: 'bg-success-transparent text-success',
      time: '8m'
    },
    {
      id: 4,
      name: 'Microsoft',
      symbol: 'bi bi-microsoft',
      symbolBg:'warning',
      companyName: 'Microsoft Corp',
      price: '$0.3531',
      date: '31-01-2024',
      marketCap: '$17,791,969,465',
      change: '-0.97%',
      changePercentage: 'bg-danger-transparent text-danger',
      time: '12m'
    },
    {
      id: 5,
      name: 'Alphabet',
      symbol: 'bi bi-google',
      symbolBg:'info',
      companyName: 'Alphabet Inc',
      price: '$0.169741',
      date: '12-02-2024',
      marketCap: '$471,800,600',
      change: '0.93%',
      changePercentage: 'bg-success-transparent text-success',
      time: '15m'
    },
    {
      id: 6,
      name: 'Mastercard',
      symbol: 'ri-mastercard-fill',
      symbolBg:'danger',
      companyName: 'Mastercard Inc',
      price: '$6.43',
      date: '19-01-2024',
      marketCap: '$453,601,667',
      change: '-0.49%',
      changePercentage: 'bg-danger-transparent text-danger',
      time: '13m'
    }
  ];

}