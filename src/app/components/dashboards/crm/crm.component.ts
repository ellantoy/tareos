import { Component } from '@angular/core';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { NgApexchartsModule } from 'ng-apexcharts';
import { SharedModule } from '../../../shared/sharedmodule';
import { ApexChartComponent } from '../../../@spk/apex-chart/apex-chart.component';
import { DomSanitizer, SafeHtml } from '@angular/platform-browser';
import { CommonModule } from '@angular/common';
import { SpkReusableTablesComponent } from '../../../@spk/spk-reusable-tables/spk-reusable-tables.component';
import { SpkDropdownsComponent } from '../../../@spk/reusable-ui-elements/spk-dropdowns/spk-dropdowns.component';
import { SpkCrmDashboardComponent } from '../../../@spk/reusable-dashboards/spk-crm-dashboard/spk-crm-dashboard.component';

@Component({
  selector: 'app-crm',
  standalone: true,
  imports: [NgApexchartsModule,NgbModule,SharedModule,ApexChartComponent,SpkReusableTablesComponent,SpkDropdownsComponent,
	SpkCrmDashboardComponent,CommonModule],
  templateUrl: './crm.component.html',
  styleUrl: './crm.component.scss'
})
export class CrmComponent {
	active=1;
  chartOptions:any={
	series: [
        {
            type: 'line',
            name: 'Profit',
            data: [
                {
                    x: 'Jan',
                    y: 100
                },
                {
                    x: 'Feb',
                    y: 210
                },
                {
                    x: 'Mar',
                    y: 180
                },
                {
                    x: 'Apr',
                    y: 454
                },
                {
                    x: 'May',
                    y: 230
                },
                {
                    x: 'Jun',
                    y: 320
                },
                {
                    x: 'Jul',
                    y: 656
                },
                {
                    x: 'Aug',
                    y: 830
                },
                {
                    x: 'Sep',
                    y: 350
                },
                {
                    x: 'Oct',
                    y: 350
                },
                {
                    x: 'Nov',
                    y: 210
                },
                {
                    x: 'Dec',
                    y: 410
                }
            ]
        },
        {
            type: 'line',
            name: 'Revenue',
            chart: {
                dropShadow: {
                    enabled: true,
                    enabledOnSeries: undefined,
                    top: 5,
                    left: 0,
                    blur: 3,
                    color: '#000',
                    opacity: 0.1
                }
            },
            data: [
                {
                    x: 'Jan',
                    y: 180
                },
                {
                    x: 'Feb',
                    y: 620
                },
                {
                    x: 'Mar',
                    y: 476
                },
                {
                    x: 'Apr',
                    y: 220
                },
                {
                    x: 'May',
                    y: 520
                },
                {
                    x: 'Jun',
                    y: 780
                },
                {
                    x: 'Jul',
                    y: 435
                },
                {
                    x: 'Aug',
                    y: 515
                },
                {
                    x: 'Sep',
                    y: 738
                },
                {
                    x: 'Oct',
                    y: 454
                },
                {
                    x: 'Nov',
                    y: 525
                },
                {
                    x: 'Dec',
                    y: 230
                }
            ]
        },
        {
            type: 'line',
            name: 'Sales',
            chart: {
                dropShadow: {
                    enabled: true,
                    enabledOnSeries: undefined,
                    top: 5,
                    left: 0,
                    blur: 3,
                    color: '#000',
                    opacity: 0.1
                }
            },
            data: [
                {
                    x: 'Jan',
                    y: 200
                },
                {
                    x: 'Feb',
                    y: 530
                },
                {
                    x: 'Mar',
                    y: 110
                },
                {
                    x: 'Apr',
                    y: 130
                },
                {
                    x: 'May',
                    y: 480
                },
                {
                    x: 'Jun',
                    y: 520
                },
                {
                    x: 'Jul',
                    y: 780
                },
                {
                    x: 'Aug',
                    y: 435
                },
                {
                    x: 'Sep',
                    y: 475
                },
                {
                    x: 'Oct',
                    y: 738
                },
                {
                    x: 'Nov',
                    y: 454
                },
                {
                    x: 'Dec',
                    y: 480
                }
            ]
        }
    ],
    chart: {
        height: 290,
        animations: {
            speed: 500
        },
        zoom: {
            enabled: false
          },
    },
    colors: ["var(--primary-color)", "rgb(133, 204, 65)", "rgb(250, 182, 50)"],
    dataLabels: {
        enabled: false
    },
    grid: {
        borderColor: '#f1f1f1',
        strokeDashArray: 3
    },
    stroke: {
        curve: 'smooth',
        width: [2, 2, 2],
        dashArray: [0, 0, 5]
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
            }
        },
    },
    tooltip: {
        y: [{
            formatter: function (e:any) {
                return void 0 !== e ? "$" + e.toFixed(0) : e
            }
        }, {
            formatter: function (e:any) {
                return void 0 !== e ? "$" + e.toFixed(0) : e
            }
        }, {
            formatter: function (e:any) {
                return void 0 !== e ? e.toFixed(0) : e
            }
        }]
    },
    legend: {
        show: true,
        position: "bottom",
        offsetX: 0,
        offsetY: 8,
        markers: {
            size: 4,
            strokeWidth: 0,
            strokeColor: '#fff',
        },
    },
    title: {
        align: 'left',
        style: {
            fontSize: '.8125rem',
            fontWeight: 'semibold',
            color: '#8c9097'
        },
    },
    markers: {
        hover: {
            sizeOffset: 5
        }
    }
  }
  chartOptions1:any={
	series: [{
        data: [20, 14, 19, 10, 23, 20, 22, 9, 12]
    }],
    chart: {
        height: 40,
        width: 80,
        type: 'bar',
        fontFamily: 'Poppins, Arial, sans-serif',
        foreColor: '#5d6162',
        zoom: {
            enabled: false
        },
        sparkline: {
            enabled: true
        }
    },
    plotOptions: {
        bar: {
            columnWidth: '40%',
            borderRadius: 2,
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
    stroke: {
        curve: 'straight'
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
    
  }
  chartOptions2:any={
	series: [{
        data: [20, 14, 20, 22, 9, 12, 19, 10, 25]
    }],
    chart: {
        height: 40,
        width: 80,
        type: 'line',
        fontFamily: 'Poppins, Arial, sans-serif',
        foreColor: '#5d6162',
        zoom: {
            enabled: false
        },
        sparkline: {
            enabled: true
        }
    },
    plotOptions: {
        bar: {
            columnWidth: '40%',
            borderRadius: 2,
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
    stroke: {
        curve: 'smooth',
        width: 2,
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
  }
  chartOptions3:any={
    series: [{
        data: [20, 20, 22, 9, 14, 19, 10, 25, 12]
    }],
    chart: {
        height: 40,
        width: 80,
        type: 'bar',
        fontFamily: 'Poppins, Arial, sans-serif',
        foreColor: '#5d6162',
        zoom: {
            enabled: false
        },
        sparkline: {
            enabled: true
        }
    },
    plotOptions: {
        bar: {
            columnWidth: '40%',
            borderRadius: 2,
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
    stroke: {
        curve: 'straight'
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
  }
  chartOptions4:any={
    series: [{
        data: [20, 20, 22, 9, 12, 14, 19, 10, 25]
    }],
    chart: {
        height: 40,
        width: 80,
        type: 'line',
        fontFamily: 'Poppins, Arial, sans-serif',
        foreColor: '#5d6162',
        zoom: {
            enabled: false
        },
        sparkline: {
            enabled: true
        }
    },
    plotOptions: {
        bar: {
            columnWidth: '40%',
            borderRadius: 2,
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
    stroke: {
        curve: 'smooth',
        width: 2,
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
  }
  chartOptions5:any={
    series: [{
        data: [20, 19, 10, 25, 20, 22, 9, 12, 14]
    }],
    chart: {
        height: 40,
        width: 80,
        type: 'bar',
        fontFamily: 'Poppins, Arial, sans-serif',
        foreColor: '#5d6162',
        zoom: {
            enabled: false
        },
        sparkline: {
            enabled: true
        }
    },
    plotOptions: {
        bar: {
            columnWidth: '40%',
            borderRadius: 2,
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
    stroke: {
        curve: 'straight'
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
    colors: ["rgb(250, 182, 50)"],
  }
  chartOptions6:any={
    series: [{
        name: 'Cold Leads',
        data: [80, 50, 30, 40, 100, 20, 40],
    }, {
        name: 'Hot Leads',
        data: [20, 30, 40, 90, 20, 90, 35],
    }, {
        name: 'Warm Leads',
        data: [40, 76, 78, 13, 43, 10, 80],
    }],
    chart: {
        height: 310,
        type: 'radar',
        toolbar: {
            show: false,
        }
    },
    title: {
        align: 'left',
        style: {
            fontSize: '13px',
            fontWeight: 'bold',
            color: '#8c9097'
        },
    },
    colors: ["var(--primary08)", "rgba(133, 204, 65, 0.85)", "rgba(40, 200, 235, 0.85)"],
    stroke: {
        width: 1
    },
    fill: {
        opacity: 0.05
    },
    markers: {
        size: 0
    },
    legend: {
        show: true,
        fontSize: "12px",
        position: 'bottom',
        horizontalAlign: 'center',
        fontFamily: "Montserrat",
        fontWeight: 500,
        offsetX: 0,
        offsetY: 0,
        labels: {
            colors: '#9ba5b7',
        },
        markers: {
            size: 4,
            strokeWidth: 0,
            strokeColor: '#fff',
            fillColors: undefined,
            radius: 7,
            offsetX: 0,
            offsetY: 0
        },
    },
    xaxis: {
        categories: ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat']
    },
    yaxis: {
        tickAmount: 7,
        labels: {
            formatter: function (val:any, i:any) {
                if (i % 5 === 0) {
                    return val
                }
            }
        }
    }
  }

  crmCards = [
    {
      title: "Total Leads",
      value: "1,1125",
      percentageChange: "+2.5%",
      isIncrease: true,
      chartOptions: this.chartOptions1,
      icon: "M224,200h-8V40a8,8,0,0,0-8-8H152a8,8,0,0,0-8,8V80H96a8,8,0,0,0-8,8v40H48a8,8,0,0,0-8,8v64H32a8,8,0,0,0,0,16H224a8,8,0,0,0,0-16ZM160,48h40V200H160ZM104,96h40V200H104ZM56,144H88v56H56Z",
      iconColor: "border-primary bg-primary-transparent",
	  BgColor: "bg-primary"
    },
    {
      title: "Conversion Rate",
      value: "15.8%",
      percentageChange: "-2.5%",
      isIncrease: false,
      chartOptions: this.chartOptions2,
      icon: "M205.66,61.64l-144,144a8,8,0,0,1-11.32-11.32l144-144a8,8,0,0,1,11.32,11.31ZM50.54,101.44a36,36,0,0,1,50.92-50.91h0a36,36,0,0,1-50.92,50.91ZM56,76A20,20,0,1,0,90.14,61.84h0A20,20,0,0,0,56,76ZM216,180a36,36,0,1,1-10.54-25.46h0A35.76,35.76,0,0,1,216,180Zm-16,0a20,20,0,1,0-5.86,14.14A19.87,19.87,0,0,0,200,180Z",
      iconColor: "border-success bg-success-transparent",
	  BgColor: "bg-success"
    },
    {
      title: "Tasks Pending",
      value: "$3,132",
      percentageChange: "+2.5%",
      isIncrease: true,
      chartOptions: this.chartOptions3,
      icon: "M173.66,98.34a8,8,0,0,1,0,11.32l-56,56a8,8,0,0,1-11.32,0l-24-24a8,8,0,0,1,11.32-11.32L112,148.69l50.34-50.35A8,8,0,0,1,173.66,98.34ZM232,128A104,104,0,1,1,128,24,104.11,104.11,0,0,1,232,128Zm-16,0a88,88,0,1,0-88,88A88.1,88.1,0,0,0,216,128Z",
      iconColor: "border-info bg-info-transparent",
	  BgColor: "bg-info"
    },
	{
		title: "Sales Pipeline",
		value: "$3,132",
		percentageChange: "+2.5%",
		isIncrease: true,
	    chartOptions: this.chartOptions4,
		icon: "M232,208a8,8,0,0,1-8,8H32a8,8,0,0,1-8-8V48a8,8,0,0,1,16,0V156.69l50.34-50.35a8,8,0,0,1,11.32,0L128,132.69,180.69,80H160a8,8,0,0,1,0-16h40a8,8,0,0,1,8,8v40a8,8,0,0,1-16,0V91.31l-58.34,58.35a8,8,0,0,1-11.32,0L96,123.31l-56,56V200H224A8,8,0,0,1,232,208Z",
		iconColor: "border-secondary bg-secondary-transparent",
		BgColor: "bg-secondary"
	  },
	  {
		title: "New Contacts",
		value: "968",
		percentageChange: "-2.5%",
		isIncrease: false,
	    chartOptions: this.chartOptions5,
		icon: "M256,136a8,8,0,0,1-8,8H232v16a8,8,0,0,1-16,0V144H200a8,8,0,0,1,0-16h16V112a8,8,0,0,1,16,0v16h16A8,8,0,0,1,256,136Zm-57.87,58.85a8,8,0,0,1-12.26,10.3C165.75,181.19,138.09,168,108,168s-57.75,13.19-77.87,37.15a8,8,0,0,1-12.25-10.3c14.94-17.78,33.52-30.41,54.17-37.17a68,68,0,1,1,71.9,0C164.6,164.44,183.18,177.07,198.13,194.85ZM108,152a52,52,0,1,0-52-52A52.06,52.06,0,0,0,108,152Z",
		iconColor: "border-warning bg-warning-transparent",
		BgColor: "bg-warning"
	  },
  ];
  deals = [
    {
      name: 'Michael Jordan',
      email: 'michael.jordan@example.com',
      avatar: './assets/images/faces/10.jpg',
      avatarBg:'',
      amount: 2893
    },
    {
      name: 'Emigo Kiaren',
      email: 'emigo.kiaren@gmail.com',
      avatar: '',
      initials: 'EK',
      avatarBg:'warning',
      amount: 4289
    },
    {
      name: 'Randy Origoan',
      email: 'randy.origoan@gmail.com',
      avatar: './assets/images/faces/12.jpg',
      avatarBg:'',
      amount: 6347
    },
    {
      name: 'George Pieterson',
      email: 'george.pieterson@gmail.com',
      avatarBg:'success',
      avatar: '',
      initials: 'GP',
      amount: 3894
    },
    {
      name: 'Kiara Advain',
      email: 'kiaraadvain214@gmail.com',
      avatar: '',
      initials: 'KA',
      avatarBg:'primary',
      amount: 2679
    },
    {
      name: 'Leo Phillip',
      email: 'leophillip343@gmail.com',
      avatarBg:'',
      avatar: './assets/images/faces/13.jpg',
      amount: 2446
    }
  ];
  tasks1 = [
    {
      name: 'Review Marketing Campaign Strategy',
      description: 'Nemo enim ipsam voluptatem',
      status: 'Progress',
      completed: false
    },
    {
      name: 'Update Client Database',
      description: 'Eos dolor ea',
      status: 'Completed',
      completed: true
    },
    {
      name: 'Prepare Monthly Sales Report',
      description: 'Nonumy erat ipsum ut ipsum',
      status: 'Pending',
      completed: false
    },
    {
      name: 'Schedule Team Meeting',
      description: 'Nemo enim ipsam voluptatem',
      status: 'Completed',
      completed: true
    },
    {
      name: 'Update User Database',
      description: 'Eos dolor ea',
      status: 'Progress',
      completed: false
    },
    {
      name: 'Respond to Customer Inquiries',
      description: 'Sed labore ut sed',
      status: 'Completed',
      completed: true
    }
  ];
  tasks2 = [
    {
      name: 'Conduct Product Demo Sessions',
      description: 'Nonumy erat ipsum ut ipsum',
      status: 'Not Started',
      statusClass: 'bg-secondary-transparent',
    },
    {
      name: 'Organize Training Session',
      description: 'Consetetur et amet dolor',
      status: 'Not Started',
      statusClass: 'bg-secondary-transparent',
    },
    {
      name: 'Analyze Market Trends',
      description: 'Nonumy erat ipsum ut ipsum',
      status: 'Not Started',
      statusClass: 'bg-secondary-transparent',
    },
    {
      name: 'Coordinate with Logistics Department',
      description: 'Nonumy erat ipsum ut ipsum',
      status: 'Not Started',
      statusClass: 'bg-secondary-transparent',
    },
    {
      name: 'Meeting On Updation',
      description: 'Nonumy erat ipsum ut ipsum',
      status: 'Not Started',
      statusClass: 'bg-secondary-transparent',
    },
    {
      name: 'Plan Social Media Content Calendar',
      description: 'Accusam aliquyam ea sea',
      status: 'Completed',
      statusClass: 'bg-secondary-transparent',
    },
  ];

  dealsheader = [
	{header:'Deal'},
	{header:'Value'},
	{header:'Probability'},
	{header:'Status'}
  ]

  Topdeals = [
    {
      name: 'Et Management',
      value: '$121K',
      probability: 50,
      status: 'Contract Sent',
      statusClass: 'bg-primary-transparent',
      avatarClass: 'bg-primary',
      icon: 'fe fe-terminal',
	  iconName: ''
    },
    {
      name: 'Raslk Assoc',
      value: '$68K',
      probability: 70,
      status: 'On Hold',
      statusClass: 'bg-warning-transparent',
      avatarClass: 'bg-secondary',
      icon: '',
	  iconName: 'Ra'
	  
    },
    {
      name: 'Sed Systems',
      value: '$221K',
      probability: 10,
      status: 'Contract Failed',
      statusClass: 'bg-danger-transparent',
      avatarClass: 'bg-orange',
      icon: 'fe fe-monitor',
	  iconName: ''
    },
    {
      name: 'Justo Manufacturers',
      value: '$521K',
      probability: 70,
      status: 'Won',
      statusClass: 'bg-success-transparent',
      avatarClass: 'bg-success',
      icon: '',
	  iconName: 'JM'
    },
    {
      name: 'At Developers',
      value: '$51K',
      probability: 90,
      status: 'Contract Sent',
      statusClass: 'bg-primary-transparent',
      avatarClass: 'bg-info',
      icon: '',
	  iconName: 'AD'
    },
    {
      name: 'Jumbotrics',
      value: '$51K',
      probability: 90,
      status: 'Closed',
      statusClass: 'bg-danger-transparent',
      avatarClass: 'bg-warning',
      icon: '',
	  iconName: 'JU'
    }
  ];

  profitItems = [
    {
      title: 'Total Sales',
      amount: '$12,345',
      increaseText: '10% Increases',
      avatarClass: 'bg-primary-transparent',
      iconClass: 'bx-wallet-alt fs-18',
      progress: 80,
      progressBarClass: 'bg-primary'
    },
    {
      title: 'Total Profit',
      amount: '$9,345',
      increaseText: '12% Increases',
      avatarClass: 'bg-secondary-transparent',
      iconClass: 'bx-money-withdraw fs-18',
      progress: 75,
      progressBarClass: 'bg-secondary'
    },
    {
      title: 'Total Revenue',
      amount: '$9,345',
      increaseText: '11% Decrease',
      avatarClass: 'bg-success-transparent',
      iconClass: 'bx-money-withdraw fs-18',
      progress: 78,
      progressBarClass: 'bg-success'
    },
    {
      title: 'Total Loss',
      amount: '$11,345',
      increaseText: '11% Decrease',
      avatarClass: 'bg-info-transparent',
      iconClass: 'bx-money-withdraw fs-18',
      progress: 68,
      progressBarClass: 'bg-info'
    }
  ];

  Tableheader = [
	{header:'S.No',tableHeadColumn:'text-center'},
	{header:'Deal'},
	{header:'Sales Rep'},
	{header:'Mail'},
	{header:'Amount'},
	{header:'Location'},
	{header:'Sales Cycle length'},
	{header:'Action'}
  ]

  tableData = [
    {
      id: 1,
      company: 'Xenon Tech. Ed.',
      name: 'Simon Cowall',
      email: 'mayorkelly@gmail.com',
      amount: 4320.29,
      country: 'Germany',
      days: 43,
      avatar: 'assets/images/faces/15.jpg'
    },
    {
      id: 2,
      company: 'Ideal IT Sol.',
      name: 'Meisha Kerr',
      email: 'andrewgarfield@gmail.com',
      amount: 6745.99,
      country: 'Canada',
      days: 45,
      avatar: 'assets/images/faces/4.jpg'
    },
    {
      id: 3,
      company: 'Inferno Xo',
      name: 'Jessica',
      email: 'simoncowel234@gmail.com',
      amount: 1176.89,
      country: 'Singapore',
      days: 50,
      avatar: 'assets/images/faces/5.jpg'
    },
    {
      id: 4,
      company: 'Myami Group & Tech.',
      name: 'Amanda B',
      email: 'mirindahers@gmail.com',
      amount: 1899.99,
      country: 'USA',
      days: 55,
      avatar: 'assets/images/faces/6.jpg'
    },
    {
      id: 5,
      company: 'Mevengo Tech Et Sed',
      name: 'Jason Stathman',
      email: 'jacobsmith@gmail.com',
      amount: 1867.29,
      country: 'Europe',
      days: 30,
      avatar: 'assets/images/faces/11.jpg'
    },
    {
      id: 6,
      company: 'Lackme Info Et.',
      name: 'Khabib Hussain',
      email: 'Hussain@gmail.com',
      amount: 2439.99,
      country: 'Canada',
      days: 35,
      avatar: 'assets/images/faces/13.jpg'
    }
  ];
}
