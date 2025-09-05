import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, ChangeDetectorRef, Component, ElementRef, Renderer2 } from '@angular/core';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { RouterModule } from '@angular/router';
import { SharedModule } from '../../../shared/sharedmodule';
import flatpickr from 'flatpickr';
import { FlatpickrModule,FlatpickrDefaults  } from 'angularx-flatpickr';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ApexChartComponent } from '../../../@spk/apex-chart/apex-chart.component';
import { SpkReusableTablesComponent } from '../../../@spk/spk-reusable-tables/spk-reusable-tables.component';
import { SpkFlatpickrComponent } from '../../../@spk/spk-flatpickr/spk-flatpickr.component';
import { SpkDropdownsComponent } from '../../../@spk/reusable-ui-elements/spk-dropdowns/spk-dropdowns.component';
import { SpkSalesCardComponent } from '../../../@spk/reusable-dashboards/spk-sales-card/spk-sales-card.component';
@Component({
  selector: 'app-sales',
  standalone: true,
  imports: [SharedModule, CommonModule, NgbModule, RouterModule, SpkSalesCardComponent, SpkFlatpickrComponent,SpkReusableTablesComponent,SpkDropdownsComponent,
    FormsModule, ReactiveFormsModule, ApexChartComponent],
  providers:[FlatpickrDefaults],
  templateUrl: './sales.component.html',
  styleUrl: './sales.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class SalesComponent {
  inlineDatePicker: boolean = false;
  weekNumbers!: true
  // selectedDate: Date | null = null; 
  flatpickrOptions: any = {
    inline: true,
  };

  constructor(private cdr: ChangeDetectorRef) {}
  rangeValue: { from: Date; to: Date } = {
    from: new Date(),
    to: (new Date() as any)['fp_incr'](10)
  };

  ngOnInit() {
    this.cdr.detectChanges(); 
  }

chartOptions:any = {
  series: [{
    name: 'Sales',
    data: [74, 85, 57, 56, 76, 35, 61, 98, 36, 50, 48, 29],
    type: "bar",
  }, {
    name: 'Revenue',
    data: [46, 35, 101, 98, 44, 55, 57, 56, 55, 34, 79, 46],
    type: "bar",
  }, {
    name: 'Profit',
    data: [26, 35, 41, 78, 34, 65, 27, 46, 37, 65, 49, 23],
    type: "bar",
  }, {
    name: 'Customers',
    data: [20, 53, 11, 13, 48, 52, 78, 43, 47, 73, 45, 48],
    type: "area",
  }],
  chart: {
    height: 300,
    type: "bar",
    toolbar: {
      show: false,
    },
    stacked: true,
    fontFamily: 'Nunito, sans-serif',
  },
  dataLabels: {
    enabled: false
  },
  stroke: {
    show: true,
    width: 2,
    endingShape: 'rounded',
    colors: ['transparent'],
  },
  grid: {
    borderColor: '#f1f1f1',
    strokeDashArray: 3
  },
  xaxis: {
    categories: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'],
    axisBorder: {
      show: false,
    },
    axisTicks: {
      show: false,
    },
  },
  yaxis: {
    axisBorder: {
      show: false,
    },
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
  labels: ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"],
  colors: ['var(--primary-color)', 'rgb(40, 200, 235)', 'rgb(133, 204, 65)', "var(--primary005)"],
  plotOptions: {
    bar: {
      columnWidth: "15%",
      borderRadiusApplication: 'around',
      borderRadiusWhenStacked: 'all',
      borderRadius: 2,
    }
  },
  fill: {
    opacity: 1
  },
  tooltip: {
    y: {
      formatter: function (val:any) {
        return "$ " + val + " thousands"
      }
    }
  }
  }
 chartOptions1:any = {
  series: [{
    data: [98, 110, 80, 145, 105, 112, 87, 148, 102]
  }],
  chart: {
    height: 40,
    type: 'area',
    fontFamily: 'Montserrat, sans-serif',
    foreColor: '#5d6162',
    zoom: {
      enabled: false
    },
    sparkline: {
      enabled: true
    }
  },
  tooltip: {
    enabled: true,
    theme: "dark",
    x: {
      show: false
    },
    y: {
      title: {
        formatter: function (seriesName:any) {
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
  stroke: {
    curve: 'smooth',
    width: [1.5],
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
  title: {
    text: undefined,
  },
  grid: {
    borderColor: 'transparent',
  },
  xaxis: {
    crosshairs: {
      show: false,
    }
  },
  colors: ["var(--primary-color)"],
  };

chartOptions2:any= {
  series: [{
    data: [98, 110, 80, 145, 105, 112, 87, 148, 102]
  }],
  chart: {
    height: 40,
    type: 'area',
    fontFamily: 'Montserrat, sans-serif',
    foreColor: '#5d6162',
    zoom: {
      enabled: false
    },
    sparkline: {
      enabled: true
    }
  },
  tooltip: {
    enabled: true,
    theme: "dark",
    x: {
      show: false
    },
    y: {
      title: {
        formatter: function (seriesName:any) {
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
  stroke: {
    curve: 'smooth',
    width: [1.5],
  },
  title: {
    text: undefined,
  },
  grid: {
    borderColor: 'transparent',
  },
  xaxis: {
    crosshairs: {
      show: false,
    }
  },
  colors: ["rgb(133, 204, 65)"],
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
};
chartOptions3:any= {
  series: [{
    data: [98, 110, 80, 145, 105, 112, 87, 148, 102]
  }],
  chart: {
    height: 40,
    type: 'area',
    fontFamily: 'Montserrat, sans-serif',
    foreColor: '#5d6162',
    zoom: {
      enabled: false
    },
    sparkline: {
      enabled: true
    }
  },
  tooltip: {
    enabled: true,
    theme: "dark",
    x: {
      show: false
    },
    y: {
      title: {
        formatter: function (seriesName:any) {
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
  stroke: {
    curve: 'smooth',
    width: [1.5],
  },
  title: {
    text: undefined,
  },
  grid: {
    borderColor: 'transparent',
  },
  xaxis: {
    crosshairs: {
      show: false,
    }
  },
  colors: ["rgb(40, 200, 235)"],
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
}
chartOptions4:any= {
  series: [{
    data: [98, 110, 80, 145, 105, 112, 87, 148, 102]
  }],
  chart: {
    height: 40,
    type: 'area',
    fontFamily: 'Montserrat, sans-serif',
    foreColor: '#5d6162',
    zoom: {
      enabled: false
    },
    sparkline: {
      enabled: true
    }
  },
  tooltip: {
    enabled: true,
    theme: "dark",
    x: {
      show: false
    },
    y: {
      title: {
        formatter: function (seriesName:any) {
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
  stroke: {
    curve: 'smooth',
    width: [1.5],
  },
  title: {
    text: undefined,
  },
  grid: {
    borderColor: 'transparent',
  },
  xaxis: {
    crosshairs: {
      show: false,
    }
  },
  colors: ["rgb(244, 110, 244)"],
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
            color: 'rgba(244, 110, 244, 0.4)',
            opacity: 1
          },
          {
            offset: 60,
            color: 'rgba(244, 110, 244, 0.2)',
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
}
chartOptions5:any= {
  series: [4289, 3565, 2964, 1573],
  labels: ["Mobile", "Desktop", "Laptop", "Tablet"],
  chart: {
    height: 224,
    type: 'donut',
  },
  dataLabels: {
    enabled: false,
  },
  legend: {
    show: true,
    position: 'bottom',
    markers: {
      size: 4,
      shape: 'circle',
    },
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
      expandOnClick: false,
      donut: {
        size: '86%',
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
            label: 'Total Visitors',
            fontSize: '14px',
            fontWeight: 400,
            color: '#495057',
          }
        }
      }
    }
  },
  colors: ["var(--primary-color)", "rgba(244, 110, 244, 1)", "rgba(133, 204, 65, 1)", "rgba(40, 200, 235, 1)"],
}

cards = [
  {
    title: 'Total Revenue',
    value: '$315,244',
    percentage: '12%',
    trend: 'up',
    trendColor: 'text-success',
    chartOptions: this.chartOptions1,
    icon: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 256 256"><rect width="256" height="256" fill="none"/><line x1="128" y1="72" x2="128" y2="88" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="24"/><line x1="128" y1="168" x2="128" y2="184" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="24"/><circle cx="128" cy="128" r="96" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="24"/><path d="M104,168h36a20,20,0,0,0,0-40H116a20,20,0,0,1,0-40h36" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="24"/></svg>`,
    iconBgColor: 'bg-primary-transparent',
    chartId: 'total-revenue'
  },
  {
    title: 'Total Customers',
    value: '153,432',
    percentage: '5%',
    trend: 'down',
    trendColor: 'text-danger',
    chartOptions: this.chartOptions2,
    icon: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 256 256"><rect width="256" height="256" fill="none"/><circle cx="128" cy="144" r="40" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="24"/><path d="M72,216a65,65,0,0,1,112,0" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="24"/><path d="M164,72.55a32,32,0,1,1,39.63,45.28c14.33,3.1,27.89,14.84,36.4,26.17" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="24"/><path d="M16,144c8.51-11.33,22.06-23.07,36.4-26.17A32,32,0,1,1,92,72.55" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="24"/></svg>`,
    iconBgColor: 'bg-success-transparent',
    chartId: 'total-customers'
  },
  {
    title: 'Total Transactions',
    value: '75,275',
    percentage: '11%',
    trend: 'up',
    trendColor: 'text-success',
    chartOptions: this.chartOptions3,
    icon: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 256 256"><rect width="256" height="256" fill="none"/><line x1="80" y1="100" x2="176" y2="100" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="24"/><line x1="80" y1="140" x2="176" y2="140" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="24"/><path d="M32,208V56a8,8,0,0,1,8-8H216a8,8,0,0,1,8,8V208l-32-16-32,16-32-16L96,208,64,192Z" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="24"/></svg>`,
    iconBgColor: 'bg-info-transparent',
    chartId: 'total-transactions'
  },
  {
    title: 'Total Products',
    value: '6,26,532',
    percentage: '6.5%',
    trend: 'up',
    trendColor: 'text-success',
    chartOptions: this.chartOptions4,
    icon: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 256 256"><rect width="256" height="256" fill="none"/><polyline points="32.7 76.92 128 129.08 223.3 76.92" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="24"/><line x1="128" y1="129.09" x2="128" y2="231.97" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="24"/><path d="M219.84,182.84l-88,48.18a8,8,0,0,1-7.68,0l-88-48.18a8,8,0,0,1-4.16-7V80.18a8,8,0,0,1,4.16-7l88-48.18a8,8,0,0,1,7.68,0l88,48.18a8,8,0,0,1,4.16,7v95.64A8,8,0,0,1,219.84,182.84Z" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="24"/><polyline points="81.56 48.31 176 100 176 152" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="24"/></svg>`,
    iconBgColor: 'bg-secondary-transparent',
    chartId: 'total-products'
  }
]
orders = [
  {
    status: 'Delivered',
    count: '12,864 Orders',
    percentage: 12.6,
    amount: '$5,11,754',
    icon: 'ri-box-3-fill',
    color: 'primary',
    textColor:'danger',
    dirction:'down'
  },
  {
    status: 'Pending',
    count: '15,875 Orders',
    percentage: 2.76,
    amount: '$1,234.78',
    icon: 'ri-survey-fill',
    color: 'secondary',
     textColor:'success',
       dirction:'up'
  },
  {
    status: 'Cancelled',
    count: '32,190 Orders',
    percentage: 4.76,
    amount: '$1,234.78',
    icon: 'ri-close-circle-fill',
    color: 'orange',
     textColor:'danger',
       dirction:'down'
  },
  {
    status: 'Returned',
    count: '19,765 Orders',
    percentage: 11.6,
    amount: '$14,867',
    icon: 'ri-caravan-fill',
    color: 'info',
     textColor:'success',
       dirction:'up'
  }
];

users = [
  {
    name: 'John Doe',
    country: 'United States',
    amount: '$1,425',
    avatar: './assets/images/faces/14.jpg',
  },
  {
    name: 'Maria Gonzalez',
    country: 'Spain',
    amount: '$1,356',
    avatar: './assets/images/faces/1.jpg',
  },
  {
    name: 'Ahmed Al-Farsi',
    country: 'UAE',
    amount: '$1,276',
    avatar: './assets/images/faces/9.jpg',
  },
  {
    name: 'Akira Tanaka',
    country: 'Japan',
    amount: '$1,055',
    avatar: './assets/images/faces/15.jpg',
  },
  {
    name: 'Priya Sharma',
    country: 'India',
    amount: '$946',
    avatar: './assets/images/faces/4.jpg',
  }
];
countries = [
  { name: 'United States', flag: 'us_flag.jpg', progress: 45, color: 'bg-primary' },
  { name: 'Italy', flag: 'italy_flag.jpg', progress: 67, color: 'bg-info' },
  { name: 'Spain', flag: 'spain_flag.jpg', progress: 52, color: 'bg-success' },
  { name: 'Germany', flag: 'germany_flag.jpg', progress: 32, color: 'bg-secondary' },
  { name: 'Uae', flag: 'uae_flag.jpg', progress: 80, color: 'bg-warning' },
  { name: 'Mexico', flag: 'mexico_flag.jpg', progress: 39, color: 'bg-danger' }
];
activities = [
  { action: 'Acquired', quantity: '3,156', description: 'New Products', time: '25 mins ago', color: 'text-primary' },
  { action: 'Updated', quantity: 'Ecommerce', description: 'Offer Details', time: '4 hrs ago', color: 'text-secondary' },
  { action: 'New Categories Added', quantity: 'Clothing & Sports', description: '', time: 'Yesterday at 12:47PM', color: 'text-success' },
  { action: 'Resolved', quantity: '#32982', description: 'Invoice Issue', time: '24 Dec at 2:45PM', color: 'text-warning' },
  { action: 'Sent a invoice to', quantity: 'jhon@gmail.com', description: '$15,000', time: '22 Dec at 10:15AM', color: 'text-danger' },
  { action: 'Received', quantity: '457', description: 'Positive Reviews', time: '21 Dec at 11:55AM', color: 'text-teal' }
];

tableHeader = [
  {header:'Product'},
  {header:'Category'},
  {header:'Status'},
  {header:'Customer'},
  {header:'Qty'},
  {header:'Date Ordered'},
  {header:'Price'},
  {header:'Action'},
]
products = [
  {
    image: './assets/images/ecommerce/jpg/1.jpg',
    name: 'Elegance Wall Clock',
    brand: 'TechBrand',
    category: 'Home Decor',
    status: 'Pending',
    user: 'John Smith',
    email: 'johnsmith@mail.com',
    quantity: 8,
    date: '01 Dec 2024',
    price: '$1,200',
    checked:false,
  },
  {
    image: './assets/images/ecommerce/jpg/2.jpg',
    name: 'StrideX Pro',
    brand: 'WearCo',
    category: 'Footwear',
    status: 'Completed',
    user: 'Alice Brown',
    email: 'aliceb@mail.com',
    quantity: 15,
    date: '29 Nov 2024',
    price: '$750',
    checked:true,
  },
  {
    image: './assets/images/ecommerce/jpg/3.jpg',
    name: 'EduCarry 360',
    brand: 'DecorArts',
    category: 'School Supplies',
    status: 'Shipped',
    user: 'Leo Phillip',
    email: 'leophillip@mail.com',
    quantity: 10,
    date: '03 Dec 2024',
    price: '$500',
    checked:true,
  },
  {
    image: './assets/images/ecommerce/jpg/4.jpg',
    name: 'BloomCraft Pot',
    brand: 'FurniWorld',
    category: 'Garden & Decor',
    status: 'pending',
    user: 'Michael Green',
    email: 'mgreen@mail.com',
    quantity: 3,
    date: '30 Nov 2024',
    price: '$2,400',
    checked:false,
  },
  {
    image: './assets/images/ecommerce/jpg/5.jpg',
    name: 'Leather Wallet',
    brand: 'StylePro',
    category: 'Accessories',
    status: 'In Progress',
    user: 'BrewBuddy Mug',
    email: 'kitchen_dining@mail.com',
    quantity: 20,
    date: '02 Dec 2024',
    price: '$600',
    checked:false,
  },
];

getStatusClass(status: string) {
  switch (status) {
    case 'Pending':
      return 'bg-primary-transparent';
      case 'pending':
        return 'bg-warning-transparent';
    case 'Completed':
      return 'bg-success-transparent';
    case 'Shipped':
      return 'bg-secondary-transparent';
    case 'In Progress':
      return 'bg-danger-transparent';
    default:
      return '';
  }
}

allTasksChecked!: boolean;
toggleSelectAll(event: Event) {
  this.allTasksChecked = (event.target as HTMLInputElement).checked;
}
handleToggleSelectAll(checked: boolean) {
  this.products.forEach(order => order.checked = checked);
  this.allTasksChecked = checked;
}
transactionHeader = [
  {header:'Payment Mode'},
  {header:'Amount Paid',tableHeadColumn:'text-end'},
]

transactions = [
  {
    paymentMethod: 'Paypal ****2783',
    paymentType: 'Online Transaction',
    image: './assets/images/media/payment-gateways/paypal.png',
    amount: '$1,234.78',
    date: 'Nov 22, 2024',
  },
  {
    paymentMethod: 'Digital Wallet',
    paymentType: 'Online Transaction',
    image: './assets/images/media/payment-gateways/wallet.png',
    amount: '$623.99',
    date: 'Nov 22, 2024',
  },
  {
    paymentMethod: 'Mastro Card ****7893',
    paymentType: 'Card Payment',
    image: './assets/images/media/payment-gateways/maestro.png',
    amount: '$1,324',
    date: 'Nov 21, 2024',
  },
  {
    paymentMethod: 'Stripe',
    paymentType: 'Online Payment',
    image: './assets/images/media/payment-gateways/stripe.png',
    amount: '$1,123.49',
    date: 'Nov 20, 2024',
  },
  {
    paymentMethod: 'Visa Card ****2563',
    paymentType: 'Card Payment',
    image: './assets/images/media/payment-gateways/visa-card.png',
    amount: '$1,289',
    date: 'Nov 18, 2024',
  },
];
}