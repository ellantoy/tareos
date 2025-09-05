import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { SharedModule } from '../../../shared/sharedmodule';
import { NgbDropdownModule, NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { DomSanitizer, SafeHtml } from '@angular/platform-browser';
import { ApexChartComponent } from '../../../@spk/apex-chart/apex-chart.component';
import { SpkReusableTablesComponent } from '../../../@spk/spk-reusable-tables/spk-reusable-tables.component';
import { SpkDropdownsComponent } from '../../../@spk/reusable-ui-elements/spk-dropdowns/spk-dropdowns.component';
import { SpkEcommerceCardComponent } from '../../../@spk/reusable-dashboards/spk-ecommerce-card/spk-ecommerce-card.component';

@Component({
  selector: 'app-ecommerce',
  standalone: true,
  imports: [SharedModule,NgbDropdownModule,NgbModule,SpkEcommerceCardComponent,SpkDropdownsComponent,
    ApexChartComponent,SpkReusableTablesComponent,CommonModule],
  templateUrl: './ecommerce.component.html',
  styleUrl: './ecommerce.component.scss'
})
export class EcommerceComponent {
  chartOptions:any = {
    series: [{
      name: "Paid",
      type: "column",
      data: [33, 21, 32, 37, 23, 32, 47, 31, 54, 32, 20, 38]
    }, {
      name: "Unpaid",
      type: "area",
      data: [44, 55, 41, 42, 22, 43, 21, 35, 56, 27, 43, 27]
    }, {
      name: "Refunded",
      type: "line",
      data: [30, 25, 36, 30, 45, 35, 64, 51, 59, 36, 39, 51]
    }],
    chart: {
      height: 300,
      type: "line",
      stacked: !1,
      toolbar: {
        show: !1
      },
      zoom: {
        enabled: false
      },
    },
    stroke: {
      width: [0, 0, 2],
      dashArray: [0, 0, 4],
      show: true,
      curve: 'smooth',
      lineCap: 'butt',
    },
    grid: {
      borderColor: '#f1f1f1',
      strokeDashArray: 3
    },
    xaxis: {
      axisBorder: {
        color: 'rgba(119, 119, 142, 0.05)',
        offsetX: 0,
        offsetY: 0,
      },
      axisTicks: {
        color: 'rgba(119, 119, 142, 0.05)',
        width: 6,
        offsetX: 0,
        offsetY: 0
      },
    },
    plotOptions: {
      bar: {
        columnWidth: "10%",
        borderRadius: 3
      }
    },
    legend: {
      position: "top"
    },
    labels: ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"],
    markers: {
      size: 0
    },
    colors: ['var(--primary-color)', "rgba(244, 110, 244, 0.05)", 'rgb(133, 204, 65)'],
    tooltip: {
      theme: "dark",
    },
  }
  chartOptions1:any = {
    chart: {
      height: 295,
      type: 'radialBar',
      responsive: 'true',
      offsetX: 0,
      offsetY: 15,
    },
    plotOptions: {
      radialBar: {
        startAngle: -135,
        endAngle: 135,
        size: 120,
        imageWidth: 50,
        imageHeight: 50,
        track: {
          strokeWidth: '97%',
          // strokeWidth: "0",
        },
        dropShadow: {
          enabled: false,
          top: 0,
          left: 0,
          bottom: 0,
          blur: 3,
          opacity: 0.5
        },
        dataLabels: {
          name: {
            fontSize: '16px',
            color: undefined,
            offsetY: 30,
          },
          hollow: {
            size: "60%"
          },
          value: {
            offsetY: -10,
            fontSize: '22px',
            color: undefined,
            formatter: function (val:any) {
              return val + "%";
            }
          }
        }
      }
    },
    colors: ['var(--primary-color)'],
    fill: {
      type: "solid",
      gradient: {
        shade: "dark",
        type: "horizontal",
        shadeIntensity: .5,
        gradientToColors: ["#b94eed"],
        inverseColors: false,
        opacityFrom: 1,
        opacityTo: 1,
        stops: [0, 100]
      }
    },
    stroke: {
      dashArray: 3
    },
    series: [92],
    labels: ["Orders"]
  }
  chartOptions2:any = {
    series: [{
      name: 'Sales',
      data: [650, 770, 840, 890, 1100, 1380]
    }],
    chart: {
      height: 310,
      type: 'bar',
      events: {
        click: function () {
        }
      },
      toolbar: {
        show: false,
      }
    },
    colors: ['var(--primary-color)', 'rgba(133, 204, 65, 1)', 'rgba(40, 200, 235, 1)', 'rgba(244, 110, 244, 1)', 'rgba(250, 182, 50, 1)', 'rgba(250, 75, 66, 1)'],
    plotOptions: {
      bar: {
        barHeight: '15%',
        distributed: true,
        horizontal: true,
        borderRadius: 3,
      }
    },
    dataLabels: {
      enabled: false
    },
    legend: {
      show: false
    },
    grid: {
      borderColor: '#f1f1f1',
      strokeDashArray: 3
    },
    xaxis: {
      categories: [
        ['Electronics'],
        ['Fashion'],
        ['Kitchen Appliances'],
        ['Beauty Products'],
        ['Books'],
        ['Toys and Games'],
      ],
      labels: {
        show: false,
        style: {
          fontSize: '12px'
        },
      }
    },
    yaxis: {
      offsetX: 30,
      offsetY: 30,
      labels: {
        show: true,
        style: {
          colors: "#8c9097",
          fontSize: '11px',
          fontWeight: 500,
          cssClass: 'apexcharts-yaxis-label',
        },
        offsetY: 8,
      }
    },
    tooltip: {
      enabled: true,
      shared: false,
      intersect: true,
      x: {
        show: false
      },
      theme: "dark",
    },
  }
  cards = [
    {
      title: 'Total Sales',
      value: '15,432',
      percentageChange: '5.1%',
      changeDirection: 'increase' as 'increase' | 'decrease',
      iconSvg: 'M136,120v56a8,8,0,0,1-16,0V120a8,8,0,0,1,16,0ZM239.86,98.11,226,202.12A16,16,0,0,1,210.13,216H45.87A16,16,0,0,1,30,202.12l-13.87-104A16,16,0,0,1,32,80H68.37L122,18.73a8,8,0,0,1,12,0L187.63,80H224a16,16,0,0,1,15.85,18.11ZM89.63,80h76.74L128,36.15ZM224,96H32L45.87,200H210.13Zm-51.16,23.2-5.6,56A8,8,0,0,0,174.4,184a7.44,7.44,0,0,0,.81,0,8,8,0,0,0,7.95-7.2l5.6-56a8,8,0,0,0-15.92-1.6Zm-89.68,0a8,8,0,0,0-15.92,1.6l5.6,56a8,8,0,0,0,8,7.2,7.44,7.44,0,0,0,.81,0,8,8,0,0,0,7.16-8.76Z',
      avatarBgClass: 'bg-primary'
    },
    {
      title: 'Revenue',
      value: '$245,147',
      percentageChange: '0.6%',
      changeDirection: 'increase' as 'increase' | 'decrease',
      iconSvg: 'M168,56a8,8,0,0,1,8-8h16V32a8,8,0,0,1,16,0V48h16a8,8,0,0,1,0,16H208V80a8,8,0,0,1-16,0V64H176A8,8,0,0,1,168,56Zm62.56,54.68a103.92,103.92,0,1,1-85.24-85.24,8,8,0,0,1-2.64,15.78A88.07,88.07,0,0,0,40,128a87.62,87.62,0,0,0,22.24,58.41A79.66,79.66,0,0,1,98.3,157.66a48,48,0,1,1,59.4,0,79.66,79.66,0,0,1,36.06,28.75A87.62,87.62,0,0,0,216,128a88.85,88.85,0,0,0-1.22-14.68,8,8,0,1,1,15.78-2.64ZM128,152a32,32,0,1,0-32-32A32,32,0,0,0,128,152Zm0,64a87.57,87.57,0,0,0,53.92-18.5,64,64,0,0,0-107.84,0A87.57,87.57,0,0,0,128,216Z',
      avatarBgClass: 'bg-success'
    },
    {
      title: 'Avg. Order Value',
      value: '$120',
      percentageChange: '1.08%',
      changeDirection: 'decrease' as 'increase' | 'decrease',
      iconSvg: 'M224,200h-8V40a8,8,0,0,0-8-8H152a8,8,0,0,0-8,8V80H96a8,8,0,0,0-8,8v40H48a8,8,0,0,0-8,8v64H32a8,8,0,0,0,0,16H224a8,8,0,0,0,0-16ZM160,48h40V200H160ZM104,96h40V200H104ZM56,144H88v56H56Z',
      avatarBgClass: 'bg-info'
    },
    {
      title: 'Total Orders',
      value: '1,25,032',
      percentageChange: '2.3%',
      changeDirection: 'increase' as 'increase' | 'decrease',
      iconSvg: 'M223.68,66.15,135.68,18a15.88,15.88,0,0,0-15.36,0l-88,48.17a16,16,0,0,0-8.32,14v95.64a16,16,0,0,0,8.32,14l88,48.17a15.88,15.88,0,0,0,15.36,0l88-48.17a16,16,0,0,0,8.32-14V80.18A16,16,0,0,0,223.68,66.15ZM128,32l80.34,44-29.77,16.3-80.35-44ZM128,120,47.66,76l33.9-18.56,80.34,44ZM40,90l80,43.78v85.79L40,175.82Zm176,85.78h0l-80,43.79V133.82l32-17.51V152a8,8,0,0,0,16,0V107.55L216,90v85.77Z',
      avatarBgClass: 'bg-secondary'
    }
  ];
  OderderTableHeader = [
    {header:'Order ID'},
    {header:'Customer'},
    {header:'Amount'},
  ]
  orders = [
    { orderId: '#SPK781', customer: 'Priceton Gray', image: './assets/images/faces/15.jpg', amount: '$2,145.90' },
    { orderId: '#SPK782', customer: 'Elsa Urena', image: './assets/images/faces/4.jpg', amount: '$2,145.90' },
    { orderId: '#SPK783', customer: 'Gloria', image: './assets/images/faces/5.jpg', amount: '$2,145.90' },
    { orderId: '#SPK784', customer: 'Priya', image: './assets/images/faces/6.jpg', amount: '$2,145.90' },
    { orderId: '#SPK785', customer: 'Adam Smith', image: './assets/images/faces/11.jpg', amount: '$2,145.90' }
  ];
  paymentMethods = [
    { name: 'Credit Card', icon: 'ri-bank-card-line', color: 'text-primary', percentage: '25%' },
    { name: 'PayPal', icon: 'ri-paypal-line', color: 'text-success', percentage: '20%' },
    { name: 'VISA', icon: 'ri-visa-line', color: 'text-info', percentage: '15%' },
    { name: 'Apple Pay', icon: 'ri-apple-line', color: 'text-secondary', percentage: '10%' },
    { name: 'Google Pay', icon: 'ri-google-line', color: 'text-warning', percentage: '10%' },
    { name: 'Stripe', icon: 'ri-refund-2-line', color: 'text-danger', percentage: '5%' }
  ];
  browsweHeader = [ 
    {header:'Browser'},
    {header:'Traffic'},
    {header:'Sessions',tableHeadColumn:'text-center'},
  ]
  browserStats = [
    {
      name: 'Chrome',
      image: 'chrome.png',
      progress: 78,
      users: '15,248',
      progressColor: 'bg-secondary',
      arrow: 'ri-arrow-up-s-fill',
      arrowColor: 'text-success'
    },
    {
      name: 'Safari',
      image: 'safari.png',
      progress: 56,
      users: '22,945',
      progressColor: 'bg-info',
      arrow: 'ri-arrow-up-s-fill',
      arrowColor: 'text-success'
    },
    {
      name: 'Opera',
      image: 'opera.png',
      progress: 62,
      users: '32,453',
      progressColor: 'bg-success',
      arrow: 'ri-arrow-down-s-fill',
      arrowColor: 'text-danger'
    },
    {
      name: 'Edge',
      image: 'edge.png',
      progress: 45,
      users: '9,886',
      progressColor: 'bg-primary',
      arrow: 'ri-arrow-up-s-fill',
      arrowColor: 'text-success'
    },
    {
      name: 'Firefox',
      image: 'firefox.png',
      progress: 65,
      users: '13,345',
      progressColor: 'bg-warning',
      arrow: 'ri-arrow-up-s-fill',
      arrowColor: 'text-success'
    }
  ];
  ProductsHeader = [
     { header:'Product Id'},
      { header:'Product Name'},
      { header:'Category'},
      { header:'% Discount'},
      { header:'Price'},
      { header:'Status'},
      { header:'Added Date'},
      { header:'Actions'},
  ]
  products = [
    {
      id: '#1547988',
      image: '12.png',
      name: 'Digital Camera',
      category: 'Gadgets',
      discount: '40%',
      price: '$241.08',
      status: 'Published',
      date: '15-05-2024'
    },
    {
      id: '#1415023',
      image: '6.png',
      name: 'Stylish Shoe',
      category: 'Foot Wear',
      discount: '30%',
      price: '$1,489.00',
      status: 'Pending',
      date: '20-05-2024'
    },
    {
      id: '#4578162',
      image: '10.png',
      name: 'Smart Watch',
      category: 'Gadgets',
      discount: '10%',
      price: '$2,457.08',
      status: 'Saved as Draft',
      date: '06-02-2024'
    },
    {
      id: '#4578954',
      image: '32.png',
      name: 'Alarm Clock',
      category: 'Home Decor',
      discount: '20%',
      price: '$359.99',
      status: 'Published',
      date: '26-01-2024'
    },
    {
      id: '#8745814',
      image: '28.png',
      name: 'Running Shoes',
      category: 'Athletic Footwear',
      discount: '0%',
      price: '$568.87',
      status: 'Published',
      date: '24-03-2024'
    }
  ];
  products2 = [
    {
      name: 'Stylish Shoe',
      category: 'Foot Wear',
      price: '$124',
      sales: 260,
      image: '6.png'
    },
    {
      name: 'Headsets',
      category: 'Accessories',
      price: '$564',
      sales: 181,
      image: '7.png'
    },
    {
      name: 'Sneakers',
      category: 'Sports',
      price: '$964',
      sales: 134,
      image: '28.png'
    },
    {
      name: 'Mouse',
      category: 'Fashion',
      price: '$769',
      sales: 127,
      image: '11.png'
    },
    {
      name: 'Smart Watch',
      category: 'Electronics',
      price: '$999',
      sales: 108,
      image: '10.png'
    }
  ];
  activities = [
    {
      icon: 'ri-shopping-cart-line',
      bgColor: 'bg-primary',
      customClass:'',
      title: 'New Order - #12345',
      description: '2 items purchased by John Doe',
      timeAgo: '3 hrs ago'
    },
    {
      icon: 'ri-checkbox-circle-line',
      bgColor: 'bg-success',
      customClass:'',
      title: 'Order Shipped - #12345',
      description: 'Shipped via FedEx',
      timeAgo: '1 day ago'
    },
    {
      icon: 'ri-add-circle-line',
      bgColor: 'bg-success',
      customClass:'',
      title: 'Added New Products',
      description: 'New items added in Fashions',
      images: ['7.png', '12.png'],
      timeAgo: '12 days ago'
    },
    {
      icon: 'ri-heart-3-line',
      bgColor: 'bg-danger',
      customClass:'',
      title: 'Product Favorited - iPhone 12 Pro',
      description: 'Added to favorites by Jane Smith',
      timeAgo: '2 days ago'
    },
    {
      icon: 'ri-star-line',
      bgColor: 'bg-warning',
      customClass:'',
      title: 'Product Rated - Samsung Galaxy S21',
      description: 'Rated 4.5 stars by John Doe',
      timeAgo: '3 days ago'
    },
    {
      icon: 'ri-price-tag-3-line',
      bgColor: 'bg-info',
      customClass:'',
      title: 'Product Discount - Nike Air Max',
      description: 'Discounted price applied',
      timeAgo: '4 days ago'
    },
    {
      icon: 'ri-chat-1-line',
      bgColor: 'bg-secondary',
      customClass:'pb-0',
      title: 'Customer Inquiry - Order ID: #12346',
      description: 'Inquiry received from customer',
      timeAgo: '5 days ago'
    }
  ];
}
