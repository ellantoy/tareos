import { Component } from "@angular/core";
import { SharedModule } from "../../../shared/sharedmodule";
import { NgbDropdownModule, NgbTooltipModule } from '@ng-bootstrap/ng-bootstrap';
import { ApexChartComponent } from "../../../@spk/apex-chart/apex-chart.component";
import { SpkReusableTablesComponent } from "../../../@spk/spk-reusable-tables/spk-reusable-tables.component";
import { SpkNftCardComponent } from "../../../@spk/reusable-apps/spk-nft-card/spk-nft-card.component";
import { SpkDropdownsComponent } from "../../../@spk/reusable-ui-elements/spk-dropdowns/spk-dropdowns.component";
import { SpkNftCard1Component } from "../../../@spk/reusable-dashboards/spk-nft-cashboards/spk-nft-card-1/spk-nft-card-1.component";
import { SpkNftCard2Component } from "../../../@spk/reusable-dashboards/spk-nft-cashboards/spk-nft-card-2/spk-nft-card-2.component";


@Component({
  selector: 'app-nft',
  standalone: true,
  imports: [SharedModule,NgbDropdownModule,SpkNftCard1Component,SpkNftCard2Component,ApexChartComponent,SpkReusableTablesComponent,SpkDropdownsComponent,NgbTooltipModule],
  templateUrl: './nft.component.html',
  styleUrl: './nft.component.scss'
})
export class NftComponent {
  chartOptions:any={
    chart: {
      height: 120,
      sparkline: {
          enabled: true
      },
  },
  plotOptions: {
      bar: {
          columnWidth: '100%'
      }
  },
  stroke: {
      show: true,
      curve: 'smooth',
      lineCap: 'butt',
      colors: undefined,
      width: [1.5, 1.5],
      dashArray: [0, 0],
  },
  grid: {
      borderColor: 'transparent',
      padding: {
          top: 0,
          right: 0,
          bottom: 0,
          left: 0
      }
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
  series: [{
      name: 'This Year',
      data: [
          [0, 48.11708650372481],
          [1, 44.83834104995953],
          [2, 45.727409628208974],
          [3, 44.69213146554142],
          [4, 44.92113232835135],
          [5, 44.200874587557415],
          [6, 41.750527715312444],
          [7, 44.84511185791557],
          [8, 46.04672992189592],
          [9, 45.9480092098883],
          [10, 46.9249480823427],
          [11, 43.600609487921346],
          [12, 40.29988975207692],
          [13, 42.03310106988357],
          [14, 39.457750445961125],
          [15, 40.540159797957294],
          [16, 37.277912393740806],
          [17, 41.43887402339309],
          [18, 39.47430428214318],
          [19, 36.91189415889479],
          [20, 36.42847097453014],
          [21, 36.96844325047937],
          [22, 35.54647151074562],
          [23, 32.998974290143025],
          [24, 30.43526314490385],
          [25, 31.14797888879888],
          [26, 27.20589032036549],
          [27, 25.777592542626508],
          [28, 30.052675048145275],
          [29, 30.92837408600937],
          [30, 34.190241658736014],
          [31, 37.57718922878679],
          [32, 41.18083316913268],
          [33, 41.27110666976231],
          [34, 36.33819281943194],
          [35, 37.39239238651191],
          [36, 37.046485292242615],
          [37, 34.594801853250495],
          [38, 31.488044618299227],
          [39, 34.69970813498227],
          [40, 39.66083111892072],
          [41, 40.203292838001616],
          [42, 36.089709320758985],
          [43, 40.31141091738469],
          [44, 44.170004784953846],
          [45, 48.84998014705778],
          [46, 43.93624560052546],
          [47, 40.62473022491363],
          [48, 39.154068738786684],
          [49, 42.803089612673666],
          [50, 40.6511024461858],
          [51, 38.34516630158569],
          [52, 39.546885205159555],
          [53, 42.50715860274628],
          [54, 38.1455129028495],
          [55, 33.87761157196474],
          [56, 37.30125615378047],
          [57, 38.799409423316405],
          [58, 39.185431079286275],
          [59, 43.32737024276462],
          [60, 41.52185070435002],
          [61, 41.613587244137946],
          [62, 44.23763577861365],
          [63, 44.91439321362589],
          [64, 42.18546432611939],
          [65, 41.0624926886062],
          [66, 44.24453261527582],
          [67, 47.34794952778721],
          [68, 48.10833243543891],
          [69, 43.640893412371504],
          [70, 40.614056030997666],
          [71, 42.9374730102888],
          [72, 46.1355421298619],
          [73, 48.995759760197956],
          [74, 52.19926195857424],
          [75, 49.2778849176981],
          [76, 52.46274689069702],
          [77, 56.74969793098863],
          [78, 60.92623317241021],
          [79, 57.70969775380601],
          [80, 57.35168105637668],
      ],
      type: 'area'
  }],
  yaxis: {
      min: 0,
      show: false,
      axisBorder: {
        show: false
    },
  },
  xaxis: {
      axisBorder: {
          show: false
      },
  },
  colors: ["var(--primary-color)"],
  tooltip: {
      enabled: false,
  }
  }
  chartOptions1:any={
    series: [{
      name: "Price",
      data: [20, 38, 38, 72, 55, 63, 43, 76, 55, 80, 40, 80]
  }, {
      name: "Volume",
      data: [85, 65, 75, 38, 85, 35, 62, 40, 40, 64, 50, 89]
  }],
  chart: {
      height: 300,
      type: 'bar',
      zoom: {
          enabled: false
      },
  },
  plotOptions: {
      bar: {
          columnWidth: "30%",
          borderRadius: 3,
      }
  },
  dataLabels: {
      enabled: false
  },
  legend: {
      show: true,
      position: "top",
      offsetX: 0,
      offsetY: 8,
      markers: {
          width: 5,
          height: 5,
          strokeWidth: 0,
          strokeColor: '#fff',
          fillColors: undefined,
          radius: 12,
          customHTML: undefined,
          onClick: undefined,
          offsetX: 0,
          offsetY: 0
      },
  },
  stroke: {
      show: true,
      width: 2,
      colors: ['transparent']
  },
  grid: {
      borderColor: '#f1f1f1',
      strokeDashArray: 3
  },
  colors: ["var(--primary-color)", "rgb(244, 110, 244)"],
  yaxis: {
      title: {
          text: 'Statistics',
          style: {
              color: '#adb5be',
              fontSize: '14px',
              fontFamily: 'poppins, sans-serif',
              fontWeight: 600,
              cssClass: 'apexcharts-yaxis-label',
          },
      },
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
  }
  }
  chartOptions2:any={
    chart: {
      type: 'line',
      height: 20,
      width: 80,
      sparkline: {
          enabled: true
      },
      dropShadow: {
          enabled: true,
          enabledOnSeries: undefined,
          top: 0,
          left: 0,
          blur: 3,
          color: '#000',
          opacity: 0.1
      }
  },
  tooltip: {
      enabled: false
  },
  grid: {
      show: false,
      xaxis: {
          lines: {
              show: false
          }
      },
      yaxis: {
          lines: {
              show: false
          }
      },
  },
  stroke: {
      show: true,
      curve: 'smooth',
      lineCap: 'butt',
      colors: undefined,
      width: 2,
      dashArray: 0,
  },
  fill: {
      gradient: {
          enabled: false
      }
  },
  series: [{
      name: 'Value',
      data: [54, 38, 56, 24, 65]
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
      axisTicks: {
          show: false
      },
      axisBorder: {
          show: false
      }
  },
  colors: ['var(--primary-color)'],
  }
  chartOptions3:any={
    ...this.chartOptions2,
    colors: ['rgb(133, 204, 65)'],
  }
  chartOptions4:any={
    ...this.chartOptions2,
    colors: ['rgb(40, 200, 235)'],
  }
  chartOptions5:any={
    ...this.chartOptions2,
    colors: ['rgb(244, 110, 244)'],
  }
  chartOptions6:any={
    ...this.chartOptions2,
    colors: ['rgb(250, 182, 50)'],
  }
  chartOptions7:any={
    ...this.chartOptions2,
    colors: ['rgb(250, 75, 66)'],

  }

  cardData = [
    {
      title: 'Total Assets',
      value: '543',
      valueChange: '0.25%',
      valueChangeClass: 'success',
      arrowDirection: 'up',
      iconClass: 'primary',
      bgColor: 'bg-primary',
      SvgPath:false,
      SvgCircle:false,
      iconPath: 'M18 2H6c-1.1 0-2 .9-2 2v16c0 1.1.9 2 2 2h12c1.1 0 2-.9 2-2V4c0-1.1-.9-2-2-2zM9 4h2v5l-1-.75L9 9V4zm9 16H6V4h1v9l3-2.25L13 13V4h5v16z'
    },
    {
      title: 'Total Value',
      value: '$5,322',
      valueChange: '0.14%',
      valueChangeClass: 'danger',
      arrowDirection: 'down',
      iconClass: 'secondary',
      bgColor: 'bg-success',
      SvgPath:true,
      SvgCircle:false,
      iconPath: 'M19.5,3.5L18,2l-1.5,1.5L15,2l-1.5,1.5L12,2l-1.5,1.5L9,2L7.5,3.5L6,2v14H3v3c0,1.66,1.34,3,3,3h12c1.66,0,3-1.34,3-3V2 L19.5,3.5z M15,20H6c-0.55,0-1-0.45-1-1v-1h10V20z M19,19c0,0.55-0.45,1-1,1s-1-0.45-1-1v-3H8V5h11V19z'
    },
    {
      title: 'Total Sales',
      value: '662',
      valueChange: '1.57%',
      valueChangeClass: 'success',
      arrowDirection: 'up',
      iconClass: 'info',
      bgColor: 'bg-info',
      SvgCircle:true,
      SvgPath:false,
      iconPath: 'M21.41,11.41l-8.83-8.83C12.21,2.21,11.7,2,11.17,2H4C2.9,2,2,2.9,2,4v7.17c0,0.53,0.21,1.04,0.59,1.41l8.83,8.83 c0.78,0.78,2.05,0.78,2.83,0l7.17-7.17C22.2,13.46,22.2,12.2,21.41,11.41z M12.83,20L4,11.17V4h7.17L20,12.83L12.83,20z'
    },
    {
      title: 'Total Revenue',
      value: '$7,977',
      valueChange: '0.34%',
      valueChangeClass: 'success',
      arrowDirection: 'up',
      iconClass: 'orange',
      bgColor: 'bg-secondary',
      SvgPath:false,
      SvgCircle:false,
      iconPath: 'M12,2C6.48,2,2,6.48,2,12s4.48,10,10,10s10-4.48,10-10S17.52,2,12,2z M12,20c-4.41,0-8-3.59-8-8c0-4.41,3.59-8,8-8 s8,3.59,8,8C20,16.41,16.41,20,12,20z M12.89,11.1c-1.78-0.59-2.64-0.96-2.64-1.9c0-1.02,1.11-1.39,1.81-1.39 c1.31,0,1.79,0.99,1.9,1.34l1.58-0.67c-0.15-0.44-0.82-1.91-2.66-2.23V5h-1.75v1.26c-2.6,0.56-2.62,2.85-2.62,2.96 c0,2.27,2.25,2.91,3.35,3.31c1.58,0.56,2.28,1.07,2.28,2.03c0,1.13-1.05,1.61-1.98,1.61c-1.82,0-2.34-1.87-2.4-2.09L8.1,14.75 c0.63,2.19,2.28,2.78,3.02,2.96V19h1.75v-1.24c0.52-0.09,3.02-0.59,3.02-3.22C15.9,13.15,15.29,11.93,12.89,11.1z'
    }
  ];
  cards = [
    {
      time: '07hrs : 33m : 45s',
      image: './assets/images/nft-images/2.jpg',
      likes: '1.43k',
      title: 'Vibrant Spec Cat NFT',
      avatar: './assets/images/faces/10.jpg',
      creatorName: 'Kelinnies NFT',
      creatorHandle: 'kelinnies05',
      bidAmount: '0.045'
    },
    {
      time: '05hrs : 12m : 30s',
      image: './assets/images/nft-images/4.jpg',
      likes: '3.2k',
      title: 'Abstract Digital Art',
      avatar: './assets/images/faces/1.jpg',
      creatorName: 'Manistics NFT',
      creatorHandle: 'manistics454',
      bidAmount: '0.025'
    },
    {
      time: '01hrs : 20m : 15s',
      image: './assets/images/nft-images/5.jpg',
      likes: '2.0k',
      title: 'Galaxy Landscapes',
      avatar: './assets/images/faces/2.jpg',
      creatorName: 'SpaceArt NFTs',
      creatorHandle: 'spaceart100',
      bidAmount: '0.075'
    }
    // Add more objects as needed
  ];
  users = [
    {
      name: 'Meesthi Si',
      username: 'meesthi05',
      image: './assets/images/nft-images/3.jpg',
      followers: [
        { image: './assets/images/faces/2.jpg' },
        { image: './assets/images/faces/12.jpg' },
      ],
    },
    {
      name: 'Oorichimaru lo',
      username: 'ooro001',
      image: './assets/images/nft-images/4.jpg',
      followers: [{ image: './assets/images/faces/7.jpg' }],
    },
    {
      name: 'Moniket Ms',
      username: 'moniket98',
      image: './assets/images/nft-images/5.jpg',
      followers: [
        { image: './assets/images/faces/15.jpg' },
        { image: './assets/images/faces/2.jpg' },
      ],
    },
    {
      name: 'SakuraYM',
      username: 'sakura903',
      image: './assets/images/nft-images/6.jpg',
      followers: [
        { image: './assets/images/faces/7.jpg' },
      ],
    },
    {
      name: 'Sasuke Uchiha',
      username: 'sasuke777',
      image: './assets/images/nft-images/7.jpg',
      followers: [
        { image: './assets/images/faces/5.jpg' },
        { image: './assets/images/faces/6.jpg' },
      ],
    },
    {
      name: 'Tomarko Ki',
      username: 'tomarko98',
      image: './assets/images/nft-images/8.jpg',
      followers: [
        { image: './assets/images/faces/6.jpg' },
      ],
    },
  ];

  topSellers = [
    { name: 'Kakashi Si', username: '@lunalogic011', bgColor:'btn-outline-light', avatar: './assets/images/faces/10.jpg', verified: true },
    { name: 'NFTNebula', username: '@synthwavesage', bgColor:'btn-outline-light', avatar: './assets/images/faces/2.jpg', verified: false },
    { name: 'PixelPioneer', username: '@binarybard89', bgColor:'btn-secondary', avatar: './assets/images/faces/3.jpg', verified: true },
    { name: 'VirtualVisionary', username: '@auroracode712', bgColor:'btn-secondary', avatar: './assets/images/faces/7.jpg', verified: true },
    { name: 'BitByteBrush', username: '@maxbyte98', bgColor:'btn-outline-light', avatar: './assets/images/faces/9.jpg', verified: false },
    { name: 'NoveltyNurturer', username: '@celestenova89', bgColor:'btn-secondary', avatar: './assets/images/faces/5.jpg', verified: true },
    { name: 'RoboRhythms', username: '@circuitmaestro', bgColor:'btn-outline-light', avatar: './assets/images/faces/8.jpg', verified: true },
  ];
  creators = [
    { name: 'Alicia Smith', avatar: './assets/images/faces/5.jpg', chartOptions: this.chartOptions2 , earnings: '$9,223.46' },
    { name: 'Alex Carey', avatar: './assets/images/faces/15.jpg', chartOptions: this.chartOptions3, earnings: '$17,239.09' },
    { name: 'Emiley Jack', avatar: './assets/images/faces/4.jpg', chartOptions: this.chartOptions4, earnings: '$5,902.83' },
    { name: 'Jessica', avatar: './assets/images/faces/3.jpg', chartOptions: this.chartOptions5, earnings: '$3,993.09' },
    { name: 'Toni Stark', avatar: './assets/images/faces/11.jpg', chartOptions: this.chartOptions6, earnings: '$12,124.34' },
    { name: 'Kiara May', avatar: './assets/images/faces/2.jpg', chartOptions: this.chartOptions7, earnings: '$2,534.56' },
  ];

  nftData = [
    { 
      avatar: './assets/images/nft-images/2.jpg', 
      title: 'Auction started For', 
      title1: 'Luminous Petal',
      user: '@monisteris547', 
      time: '5 mins' 
    },
    { 
      avatar: './assets/images/nft-images/3.jpg', 
      title: 'Bid placed on top', 
      title1: 'Radium Radiance', 
      user: 'isther @isther457', 
      time: '2 Days' 
    },
    { 
      avatar: './assets/images/nft-images/4.jpg', 
      title: 'Artwork sold to', 
      title1: '@Lanisis',
      user: 'rokonis @rokonis658', 
      time: '3 Days' 
    },
    { 
      avatar: './assets/images/nft-images/7.jpg', 
      title: 'New Arrivals from New one', 
      title1: '@kakashi', 
      user: 'kanith @kanith6589', 
      time: '3 Days' 
    }
  ];

  LiveAuctionHeader = [
    {header:'Item'},
    {header:'Open Price'},
    {header:'Auction Time'},
    {header:'Your Bid'},
    {header:'Last Bid'},
    {header:'Actions'},
  ]

  LiveAuctionData = [
    {
      image: './assets/images/nft-images/2.jpg',
      name: 'EtherEden',
      creator: '@Eden Pixelist',
      price: '1.27 ETH',
      timeLeft: '1hr 45min 32sec',
      bgColor: 'primary',
      highestBid: '1.75 ETH',
      highestBidderImage: './assets/images/faces/1.jpg',
      highestBidAmount: '2.25 ETH'
    },
    {
      image: './assets/images/nft-images/3.jpg',
      name: 'CryptoCraze',
      creator: '@TechnoTrendsetter',
      price: '1.5 ETH',
      timeLeft: '1hr 45min 32sec',
      bgColor: 'orange',
      highestBid: '2.45 ETH',
      highestBidderImage: './assets/images/faces/11.jpg',
      highestBidAmount: '3.75 ETH'
    },
    {
      image: './assets/images/nft-images/6.jpg',
      name: 'Cosmic Canvases',
      creator: '@AstroArtisan',
      price: '1.75 ETH',
      timeLeft: '2hr 15min 10sec',
      bgColor: 'secondary',
      highestBid: '2.25 ETH',
      highestBidderImage: './assets/images/faces/5.jpg',
      highestBidAmount: '5.65 ETH'
    },
    {
      image: './assets/images/nft-images/7.jpg',
      name: 'Mystic Mosaics',
      creator: '@Enigma Weaver',
      price: '2.00 ETH',
      timeLeft: '3hr 30min 45sec',
      bgColor: 'success',
      highestBid: '3.75 ETH',
      highestBidderImage: './assets/images/faces/13.jpg',
      highestBidAmount: '6.45 ETH'
    },
    {
      image: './assets/images/nft-images/4.jpg',
      name: 'Virtual Voyages',
      creator: '@Binary Navigator',
      price: '1.25 ETH',
      timeLeft: '0hr 50min 20sec',
      bgColor: 'info',
      highestBid: '1.35 ETH',
      highestBidderImage: './assets/images/faces/7.jpg',
      highestBidAmount: '2.15 ETH'
    }
  ];

}
