import { Component } from '@angular/core';
import { LeafletModule } from '@bluehalo/ngx-leaflet';
import {NgApexchartsModule} from 'ng-apexcharts';
import { NgbDropdownModule,NgbNavModule  } from '@ng-bootstrap/ng-bootstrap';
import { SharedModule } from '../../shared/sharedmodule';
import { DomSanitizer, SafeHtml } from '@angular/platform-browser';
import { ApexChartComponent } from '../../@spk/apex-chart/apex-chart.component';
import { audienceReportData, CustomersData, profitData, RevenueData, SaleRevenueData, SalesAnalysisData, SalesData, SalesRevenueData, TotalRevenuedata1, TotalSalesData, TotalSalesData1, TransactionsData } from '../../shared/data/widgets_chart_data';
import { SpkSalesCard1Component } from '../../@spk/reusable-widgets/spk-sales-card-1/spk-sales-card-1.component';
import { SpkSalesCard2Component } from '../../@spk/reusable-widgets/spk-sales-card-2/spk-sales-card-2.component';
import { SpkSalesCard3Component } from '../../@spk/reusable-widgets/spk-sales-card-3/spk-sales-card-3.component';
import { SpkSalesCard4Component } from '../../@spk/reusable-widgets/spk-sales-card-4/spk-sales-card-4.component';
import { SpkDropdownsComponent } from '../../@spk/reusable-ui-elements/spk-dropdowns/spk-dropdowns.component';
import { SpkRevenueListComponent } from '../../@spk/reusable-widgets/spk-revenue-list/spk-revenue-list.component';
import { SpkTransactionCardComponent } from '../../@spk/reusable-widgets/spk-transaction-card/spk-transaction-card.component';
import { SpkTopCustomersComponent } from '../../@spk/reusable-widgets/spk-top-customers/spk-top-customers.component';
import { SpkSalesDetailsComponent } from '../../@spk/reusable-widgets/spk-sales-details/spk-sales-details.component';
import { SpkRecentTransactionComponent } from '../../@spk/reusable-widgets/spk-recent-transaction/spk-recent-transaction.component';

@Component({
  selector: 'app-widgets',
  standalone: true,
  templateUrl: './widgets.component.html',
  imports: [SharedModule,NgApexchartsModule,LeafletModule,ApexChartComponent,SpkSalesCard1Component,SpkSalesCard2Component,SpkSalesCard3Component,SpkSalesCard4Component,SpkRecentTransactionComponent,
             NgbDropdownModule,NgbNavModule,SpkDropdownsComponent,SpkRevenueListComponent,SpkTransactionCardComponent,SpkTopCustomersComponent,SpkSalesDetailsComponent ],
  styleUrl: './widgets.component.scss',
})
export class WidgetsComponent   {
    constructor(private sanitizer: DomSanitizer) {}
    sanitizeIcon(svg: string): SafeHtml {
      return this.sanitizer.bypassSecurityTrustHtml(svg);
    }
    public chartOptions1 = SalesData;
    public chartOptions2 = profitData;
    public chartOptions3 = RevenueData;
    public chartOptions4 = CustomersData;
    public chartOptions5 = SalesAnalysisData;
    public chartOptions6 = TotalSalesData;
    public chartOptions7 = SalesRevenueData;
    public chartOptions8 = TotalSalesData1;
    public chartOptions9 = SaleRevenueData;
    public chartOptions10 = audienceReportData;
    public chartOptions11 =  TotalRevenuedata1;
    public chartOptions12 = TransactionsData;
    salesCards = [
      {
        title: 'Number Of Sales',
        value: '12,432',
        change: '+2.5',
        bgColor:'success',
        icon: 'ri-bar-chart-box-line',
        colorClass: 'bg-primary-transparent',
        chartOptions: this.chartOptions1
      },
      {
        title: 'Profit By Sale',
        value: '2432',
        change: '+1.5',
        bgColor:'success',
        icon: 'ri-wallet-3-line',
        colorClass: 'bg-success-transparent',
      chartOptions: this.chartOptions2
      },
      {
        title: 'Total Revenue',
        value: '2432',
        change: '-0.5',
        bgColor:'danger',
        icon: 'ri-money-dollar-circle-line',
        colorClass: 'bg-info-transparent',
      chartOptions: this.chartOptions3
      },
      {
        title: 'Total Customers',
        value: '2432',
        change: '+4.5',
        bgColor:'success',
        icon: 'ri-group-line',
        colorClass: 'bg-secondary-transparent',
      chartOptions: this.chartOptions4
      }
    ];
    salesCards2 = [
      {
        title: 'Total Sales',
        value: '12,378',
        percentageChange: 11.35,
        avatarClass: 'bg-primary svg-white',
        svgViewBox: '0 0 394 511.978',
        svgPath: 'M158.912 88.113c-7.295-21.517-13.917-43.26-19.617-65.308l-.268-1.044-1.14-4.487c5.826-6.374 15.227-10.173 23.393-12.463l.483-.134c34.825-9.57 90.766-3.941 109.984 12.213l-23.049 54.804c12.395-16.285 16.56-22.971 23.956-32.043a71.55 71.55 0 018.789 6.815c6.556 5.935 12.41 12.494 13.596 21.636.768 5.93-.928 11.953-6.203 18.113l-52.885 61.595c-6.807-1.117-13.46-2.75-19.913-5.045l.086-.205.056-.126.033-.078.088-.205.02-.051.066-.154.076-.177.013-.03.088-.208.043-.098.045-.106.092-.208.007-.02.081-.187.066-.149.025-.058.088-.21.031-.068.061-.139.085-.2.005-.01.091-.207.054-.121.037-.089.092-.21.017-.04.073-.17.076-.172.015-.037.094-.21.04-.091.051-.119.093-.212.005-.01.087-.2.063-.144.03-.068.093-.21.028-.063.066-.15.086-.194.007-.018.094-.212.051-.114.042-.098.094-.213.015-.033.079-.179.073-.164.02-.048.096-.213.038-.085.056-.129.093-.213.003-.002.093-.21.061-.136.033-.079.096-.212.025-.056.068-.159.086-.187.01-.026.096-.214.048-.106.142-.321.013-.026.083-.189.071-.157.025-.058.093-.215.036-.076.061-.136.096-.21v-.005l.096-.215.058-.129.038-.086.096-.215.02-.045.266-.597.045-.098.051-.117.096-.214.007-.015.089-.2.068-.149.028-.066.189-.427.091-.202.005-.013.096-.215.054-.119.042-.096.094-.212.018-.038.078-.177a673.91 673.91 0 003.647-8.334l-19.255 20.795c-20.057-4.231-36.185-1.706-51.217 6.243l-53.633-64.368c-3.185-3.839-4.636-7.676-4.623-11.516.275-10.408 9.534-18.61 17.4-24.158l.063-.043c6.274-4.385 13.002-7.818 17.933-9.868l26.591 50.145zm43.53 254.869l-2.821 11.766H180.01c2.532 8.02 8.065 12.031 16.525 12.031 9.299 0 18.004-2.997 26.09-8.99v24.062c-6.72 4.583-14.829 6.875-24.325 6.875-15.361 0-26.73-3.503-34.09-10.512-7.338-7.006-11.832-14.829-13.485-23.466h-11.677l3.061-11.766h7.14c-.089-.64-.132-1.785-.132-3.415 0-1.719.043-2.955.132-3.726h-8.617l3.064-11.766h7.029c5.596-22.124 20.977-33.185 46.119-33.185 8.219 0 16.548 2.204 24.988 6.61l-5.816 23.403c-5.862-5.376-11.989-8.065-18.356-8.065-8.351 0-14.016 3.745-16.945 11.237h23.312l-2.821 11.766h-22.738c-.088.86-.134 2.093-.134 3.726v3.415h24.108zm-94.76-50.348c25.481-47.865 84.933-66.013 132.798-40.532 47.868 25.478 66.016 84.93 40.535 132.798-25.478 47.867-84.93 66.013-132.797 40.535-47.868-25.481-66.014-84.933-40.536-132.801zm119.958-88.228l-10.467-47.87c44.832 8.338 116.69 99.534 139.911 140.999 11.851 21.164 22.23 44.479 30.73 70.543 16.93 63.082.622 122.094-67.808 135.839-42.875 8.614-122.836 9.223-167.929 6.89-48.477-2.507-123.493-2.431-143.09-52.202-31.628-80.338 26.32-176.046 79.154-234.623 6.954-7.709 14.143-14.892 21.581-21.523 19.22-16.909 39.944-36.976 64.682-45.319l-23.897 44.495 34.707-46.01h18.287l24.139 48.781z'
      },
      {
        title: 'Total Revenue',
        value: '12,378',
        percentageChange: 15.35,
        avatarClass: 'bg-success svg-white',
        svgViewBox: '0 0 512 512',
        svgPath: 'M256 59.55c108.5 0 196.45 87.96 196.45 196.45S364.5 452.45 256 452.45c-108.49 0-196.45-87.96-196.45-196.45S147.51 59.55 256 59.55zM256 0c70.68 0 134.69 28.66 181.02 74.98C483.34 121.31 512 185.31 512 256c0 70.69-28.66 134.7-74.98 181.02C390.7 483.34 326.69 512 256 512c-70.69 0-134.69-28.66-181.02-74.98C28.66 390.69 0 326.68 0 256c0-70.69 28.66-134.69 74.98-181.02C121.31 28.66 185.31 0 256 0zm163.28 92.72C377.49 50.94 319.76 25.09 256 25.09c-63.77 0-121.5 25.85-163.28 67.63C50.94 134.5 25.09 192.23 25.09 256c0 63.76 25.85 121.49 67.63 163.28 41.78 41.78 99.51 67.63 163.28 67.63 63.77 0 121.5-25.85 163.28-67.63 41.78-41.78 67.63-99.51 67.63-163.28 0-63.77-25.85-121.5-67.63-163.28zM286.15 218.77c-.59-6.7-3.28-11.86-8.06-15.61-3.31-2.59-7.63-4.29-12.92-5.08v38.85l9.64 2.18c9.17 2.01 17.31 4.65 24.39 7.98 7.04 3.33 12.97 7.33 17.79 11.94 4.82 4.56 8.48 9.89 10.95 15.87 2.48 6.01 3.76 12.75 3.84 20.16-.08 11.77-3.06 21.84-8.91 30.28-5.88 8.41-14.33 14.89-25.33 19.37-9.18 3.75-19.98 5.92-32.37 6.52v21.07h-14.93v-21.08c-12.43-.64-23.48-2.9-33.13-6.81-11.6-4.65-20.6-11.73-27-21.24-6.44-9.51-9.72-21.54-9.9-36.08h43.08c.34 5.97 1.96 11 4.77 14.97 2.86 4.01 6.79 7.04 11.77 9.08 3.17 1.32 6.64 2.21 10.41 2.69v-41l-13.35-3.1c-16.11-3.7-28.78-9.68-38.08-17.95-9.26-8.27-13.86-19.45-13.82-33.57-.04-11.51 3.07-21.62 9.3-30.28 6.23-8.65 14.84-15.39 25.89-20.25 9.01-3.94 19.02-6.28 30.06-7.01V139.7h14.93v20.94c11.39.69 21.49 3.06 30.28 7.08 10.66 4.9 18.89 11.73 24.78 20.51 5.89 8.79 8.87 18.94 9 30.54h-43.08zm-35.91-20.69c-2.6.38-4.93.96-6.99 1.75-3.88 1.54-6.78 3.63-8.7 6.23-1.96 2.64-2.94 5.67-3.03 9.04-.09 2.82.47 5.25 1.71 7.38 1.23 2.13 3.07 3.97 5.45 5.58 2.4 1.63 5.3 3.03 8.66 4.23.94.33 1.91.65 2.9.95v-35.16zm14.93 115.64c2.77-.41 5.3-1.05 7.59-1.94 4.26-1.62 7.55-3.88 9.85-6.78 2.31-2.94 3.5-6.27 3.54-10.02-.04-3.5-1.15-6.52-3.28-9.04-2.13-2.52-5.38-4.69-9.77-6.53-2.31-.98-4.96-1.92-7.93-2.82v37.13z'
      },
      {
        title: 'Total Products',
        value: '12,378',
        percentageChange: -11.35,
        avatarClass: 'bg-info svg-white',
        svgViewBox: '0 0 122.43 122.88',
        svgPath: 'M22.63,12.6h93.3c6.1,0,5.77,2.47,5.24,8.77l-3.47,44.23c-0.59,7.05-0.09,5.34-7.56,6.41l-68.62,8.73 l3.63,10.53c29.77,0,44.16,0,73.91,0c1,3.74,2.36,9.83,3.36,14h-12.28l-1.18-4.26c-24.8,0-34.25,0-59.06,0 c-13.55-0.23-12.19,3.44-15.44-8.27L11.18,8.11H0V0h19.61C20.52,3.41,21.78,9.15,22.63,12.6L22.63,12.6z M63.49,23.76h17.76v18.02 h15.98L72.39,65.95L47.51,41.78h15.98V23.76L63.49,23.76z M53.69,103.92c5.23,0,9.48,4.25,9.48,9.48c0,5.24-4.24,9.48-9.48,9.48 c-5.24,0-9.48-4.24-9.48-9.48C44.21,108.17,48.45,103.92,53.69,103.92L53.69,103.92z M92.79,103.92c5.23,0,9.48,4.25,9.48,9.48 c0,5.24-4.25,9.48-9.48,9.48c-5.24,0-9.48-4.24-9.48-9.48C83.31,108.17,87.55,103.92,92.79,103.92L92.79,103.92z'
      },
      {
        title: 'Total Users',
        value: '1,234',
        percentageChange: 3.25,
        avatarClass: 'bg-secondary svg-white',
        svgViewBox: '0 0 122.88 100.54',
        svgPath: 'M65.98,54.6H56.9c-0.15,0-0.27,0.06-0.37,0.15c-0.1,0.1-0.15,0.23-0.15,0.37v19.14c0,0.15,0.06,0.27,0.15,0.37 c0.1,0.1,0.23,0.15,0.37,0.15h9.07c0.15,0,0.27-0.06,0.37-0.15c0.1-0.1,0.15-0.23,0.15-0.37V55.12c0-0.15-0.06-0.27-0.15-0.37 C66.25,54.64,66.12,54.6,65.98,54.6L65.98,54.6L65.98,54.6z M6.98,13.97h31.49V4.94c0-1.37,0.56-2.6,1.45-3.49 C40.82,0.56,42.06,0,43.41,0h36.06c1.37,0,2.59,0.56,3.49,1.45c0.89,0.89,1.45,2.14,1.45,3.49v9.03h31.49 c1.93,0,3.67,0.79,4.92,2.06c1.27,1.27,2.06,3.01,2.06,4.92v16.86c-7.89,5.41-16.03,10.02-24.42,13.78 c-8.44,3.78-17.14,6.71-26.14,8.73v-6.74c0-1.54-0.63-2.96-1.64-3.98c-1.01-1.01-2.43-1.64-3.98-1.64H56.17l0,0 c-1.54,0-2.96,0.63-3.98,1.64c-1.01,1.01-1.64,2.43-1.64,3.98v6.59c-8.76-2.01-17.25-4.89-25.48-8.58 C16.45,47.73,8.1,42.96,0,37.36V20.95c0-1.93,0.79-3.67,2.06-4.92C3.32,14.76,5.07,13.97,6.98,13.97L6.98,13.97L6.98,13.97z M122.88,47.81v45.76c0,1.93-0.79,3.67-2.06,4.92c-1.27,1.27-3.01,2.06-4.92,2.06H6.98c-1.93,0-3.67-0.79-4.92-2.06 C0.79,97.22,0,95.48,0,93.57V47.39c6.89,4.42,13.98,8.28,21.27,11.55c9.41,4.22,19.17,7.45,29.29,9.61v7.25 c0,1.54,0.63,2.96,1.64,3.98c1.01,1.01,2.44,1.64,3.98,1.64h10.53c1.54,0,2.96-0.63,3.98-1.64c1.01-1.01,1.64-2.43,1.64-3.98v-7.6 l0.11,0.46c10.31-2.17,20.25-5.43,29.83-9.73C109.33,55.77,116.2,52.05,122.88,47.81L122.88,47.81z M75.71,6.73H47.19 c-0.17,0-0.31,0.06-0.44,0.19c-0.1,0.1-0.19,0.27-0.19,0.44v6.42h29.75V7.36c0-0.17-0.06-0.31-0.19-0.44 c-0.1-0.1-0.27-0.19-0.44-0.19H75.71L75.71,6.73z'
      }
    ];
    salesCards3 = [
      {
        title: 'Number Of Sales',
        value: '12,432',
        iconPath: 'M224,200h-8V40a8,8,0,0,0-8-8H152a8,8,0,0,0-8,8V80H96a8,8,0,0,0-8,8v40H48a8,8,0,0,0-8,8v64H32a8,8,0,0,0,0,16H224a8,8,0,0,0,0-16ZM160,48h40V200H160ZM104,96h40V200H104ZM56,144H88v56H56Z',
        badgeClass: 'bg-danger-transparent text-danger',
        badgeText: '8%',
        chartId: 'chart-11',
        iconColor:'primary',
       chartOptions: this.chartOptions1
      },
      {
        title: 'Profit By Sale',
        value: '$5,472',
        iconPath: 'M117.25,157.92a60,60,0,1,0-66.5,0A95.83,95.83,0,0,0,3.53,195.63a8,8,0,1,0,13.4,8.74,80,80,0,0,1,134.14,0,8,8,0,0,0,13.4-8.74A95.83,95.83,0,0,0,117.25,157.92ZM40,108a44,44,0,1,1,44,44A44.05,44.05,0,0,1,40,108Zm210.14,98.7a8,8,0,0,1-11.07-2.33A79.83,79.83,0,0,0,172,168a8,8,0,0,1,0-16,44,44,0,1,0-16.34-84.87,8,8,0,1,1-5.94-14.85,60,60,0,0,1,55.53,105.64,95.83,95.83,0,0,1,47.22,37.71A8,8,0,0,1,250.14,206.7Z',
        badgeClass: 'bg-success-transparent text-success',
        badgeText: '9%',
        iconColor:'success',
        chartId: 'chart-12',
       chartOptions: this.chartOptions2
      },
      {
        title: 'Total Revenue',
        value: '$1462',
        iconPath: 'M216,56H176V48a24,24,0,0,0-24-24H104A24,24,0,0,0,80,48v8H40A16,16,0,0,0,24,72V200a16,16,0,0,0,16,16H216a16,16,0,0,0,16-16V72A16,16,0,0,0,216,56ZM96,48a8,8,0,0,1,8-8h48a8,8,0,0,1,8,8v8H96ZM216,72v41.61A184,184,0,0,1,128,136a184.07,184.07,0,0,1-88-22.38V72Zm0,128H40V131.64A200.19,200.19,0,0,0,128,152a200.25,200.25,0,0,0,88-20.37V200ZM104,112a8,8,0,0,1,8-8h32a8,8,0,0,1,0,16H112A8,8,0,0,1,104,112Z',
        badgeClass: 'bg-info-transparent text-info',
        badgeText: '7%',
        chartId: 'chart-13',
        iconColor:'info',
       chartOptions: this.chartOptions3
      },
      {
        title: 'Total Customers',
        value: '1032',
        iconPath: 'M128,24A104,104,0,1,0,232,128,104.11,104.11,0,0,0,128,24Zm0,192a88,88,0,1,1,88-88A88.1,88.1,0,0,1,128,216Zm40-68a28,28,0,0,1-28,28h-4v8a8,8,0,0,1-16,0v-8H104a8,8,0,0,1,0-16h36a12,12,0,0,0,0-24H116a28,28,0,0,1,0-56h4V72a8,8,0,0,1,16,0v8h16a8,8,0,0,1,0,16H116a12,12,0,0,0,0,24h24A28,28,0,0,1,168,148Z',
        badgeClass: 'bg-success-transparent text-success',
        badgeText: '6%',
        iconColor:'success',
        chartId: 'chart-14',
       chartOptions: this.chartOptions4
      }
    ];
    salesCards4 = [
      {
        title: 'Total Sales',
        value: '12,432',
        percentageChange: '+2.5%',
        svgPath:'M96,37.5v72l-62.4,36A96,96,0,0,1,96,37.5Z',
        svgPath1:'M100,116.43a8,8,0,0,0,4-6.93v-72A8,8,0,0,0,93.34,30,104.06,104.06,0,0,0,25.73,147a8,8,0,0,0,4.52,5.81,7.86,7.86,0,0,0,3.35.74,8,8,0,0,0,4-1.07ZM88,49.62v55.26L40.12,132.51C40,131,40,129.48,40,128A88.12,88.12,0,0,1,88,49.62Zm130.34,26.9c-.09-.18-.18-.37-.29-.55s-.2-.33-.31-.49A104.05,104.05,0,0,0,128,24a8,8,0,0,0-8,8v91.83l-78.81,45.9a8,8,0,0,0-2.87,11A104,104,0,0,0,232,128,103.34,103.34,0,0,0,218.34,76.52ZM136,40.36A88.05,88.05,0,0,1,199.89,77.3L136,114.51ZM128,216a88.45,88.45,0,0,1-71.49-36.68l75.4-43.91.22-.14L207.9,91.14A88,88,0,0,1,128,216Z',
        badgeColor: 'success',
        backgroundColor: 'primary'
      },
      {
        title: 'Total Revenue',
        value: '$9,432',
        percentageChange: '-2.5%',
        svgPath:'M224,118.31V200a8,8,0,0,1-8,8H40a8,8,0,0,1-8-8V118.31h0A191.14,191.14,0,0,0,128,144,191.08,191.08,0,0,0,224,118.31Z',
        svgPath1:'M104,112a8,8,0,0,1,8-8h32a8,8,0,0,1,0,16H112A8,8,0,0,1,104,112ZM232,72V200a16,16,0,0,1-16,16H40a16,16,0,0,1-16-16V72A16,16,0,0,1,40,56H80V48a24,24,0,0,1,24-24h48a24,24,0,0,1,24,24v8h40A16,16,0,0,1,232,72ZM96,56h64V48a8,8,0,0,0-8-8H104a8,8,0,0,0-8,8ZM40,72v41.62A184.07,184.07,0,0,0,128,136a184,184,0,0,0,88-22.39V72ZM216,200V131.63A200.25,200.25,0,0,1,128,152a200.19,200.19,0,0,1-88-20.36V200H216Z',
        badgeColor: 'danger',
        backgroundColor: 'secondary'
      },
      {
        title: 'Total Customers',
        value: '3,132',
        percentageChange: '+2.5%',
        svgPath:'M136,108A52,52,0,1,1,84,56,52,52,0,0,1,136,108Z',
        svgPath1:'M117.25,157.92a60,60,0,1,0-66.5,0A95.83,95.83,0,0,0,3.53,195.63a8,8,0,1,0,13.4,8.74,80,80,0,0,1,134.14,0,8,8,0,0,0,13.4-8.74A95.83,95.83,0,0,0,117.25,157.92ZM40,108a44,44,0,1,1,44,44A44.05,44.05,0,0,1,40,108Zm210.14,98.7a8,8,0,0,1-11.07-2.33A79.83,79.83,0,0,0,172,168a8,8,0,0,1,0-16,44,44,0,1,0-16.34-84.87,8,8,0,1,1-5.94-14.85,60,60,0,0,1,55.53,105.64,95.83,95.83,0,0,1,47.22,37.71A8,8,0,0,1,250.14,206.7Z',
        badgeColor: 'success',
        backgroundColor: 'success'
      },
      {
        title: 'Total Profit',
        value: '$532',
        percentageChange: '+2.5%',
        svgPath:'M224,128a96,96,0,1,1-96-96A96,96,0,0,1,224,128Z',
        svgPath1:'M128,24A104,104,0,1,0,232,128,104.11,104.11,0,0,0,128,24Zm0,192a88,88,0,1,1,88-88A88.1,88.1,0,0,1,128,216Zm40-68a28,28,0,0,1-28,28h-4v8a8,8,0,0,1-16,0v-8H104a8,8,0,0,1,0-16h36a12,12,0,0,0,0-24H116a28,28,0,0,1,0-56h4V72a8,8,0,0,1,16,0v8h16a8,8,0,0,1,0,16H116a12,12,0,0,0,0,24h24A28,28,0,0,1,168,148Z',
        badgeColor: 'success',
        backgroundColor: 'info'
      }
    ];
    revenueData = [
      {
        label: 'Today Revenue',
        amount: '$256',
        change: '-1.05%',
        changeType: 'danger',
        iconClass: 'text-primary'
      },
      {
        label: 'This Month Revenue',
        amount: '$29,754',
        change: '+0.82%',
        changeType: 'success',
        iconClass: 'text-warning'
      },
      {
        label: 'This Year Revenue',
        amount: '$2,25,116',
        change: '+0.21%',
        changeType: 'success',
        iconClass: 'text-success'
      }
    ];
    transactions = [
      {
        avatar: './assets/images/faces/10.jpg',
        name: 'Charle',
        message: 'New account created',
        amount: '$12,355',
        time: '5 mins ago'
      },
      {
        avatar: './assets/images/faces/1.jpg',
        name: 'Charle',
        message: 'New account created',
        amount: '$12,355',
        time: '12:00 AM'
      },
      {
        avatar: './assets/images/faces/2.jpg',
        name: 'Charle',
        message: 'New account created',
        amount: '$12,355',
        time: '12:00 AM'
      },
      {
        avatar: './assets/images/faces/4.jpg',
        name: 'Charle',
        message: 'New account created',
        amount: '$12,355',
        time: '12:00 AM'
      }
    ];
    topDeals = [
      {
        avatar: './assets/images/faces/10.jpg',
        name: 'Amanda Nanes',
        email: 'amandananes@gmail.com',
        amount: '$6,192',
        defaultClass:'mb-3'
      },
      {
        avatar: './assets/images/faces/1.jpg',
        name: 'Charles Achilles',
        email: 'charlesachilles@gmail.com',
        amount: '$2,415',
        defaultClass:'mb-3'
      },
      {
        avatar: './assets/images/faces/2.jpg',
        name: 'Julia Camo',
        email: 'juliacamo@gmail.com',
        amount: '$2,341',
        defaultClass:'mb-3'
      },
      {
        avatar: './assets/images/faces/3.jpg',
        name: 'Json Taylor',
        email: 'jsontaylor@gmail.com',
        amount: '$5,172',
        defaultClass:'mb-3'
      },
      {
        avatar: './assets/images/faces/4.jpg',
        name: 'Elisha Sean',
        email: 'elishasean@gmail.com',
        amount: '$2,624',
        defaultClass:'mb-0'
      }
    ];
    financialData = [
      {
        iconClass: 'bi bi-wallet text-primary fs-16',
        bgClass: 'bg-primary-transparent',
        title: 'Total Income',
        amount: '$6,192',
        progress: 65,
        progressClass: 'bg-primary'
      },
      {
        iconClass: 'bi bi-suitcase-lg fs-16 text-info',
        bgClass: 'bg-info-transparent',
        title: 'Total Expense',
        amount: '$6,192',
        progress: 55,
        progressClass: 'bg-info'
      },
      {
        iconClass: 'bi bi-bar-chart-line text-secondary fs-16',
        bgClass: 'bg-secondary-transparent',
        title: 'Total Profit',
        amount: '$6,192',
        progress: 45,
        progressClass: 'bg-secondary'
      }
    ];
    recenttransaction = [
      {
        avatarSrc: './assets/images/faces/4.jpg',
        name: 'Emma Wilson',
        purchases: 15,
        saleValue: '$1,835'
      },
      {
        avatarSrc: './assets/images/faces/15.jpg',
        name: 'Robert Lewis',
        purchases: 18,
        saleValue: '$2,415'
      },
      {
        avatarSrc: './assets/images/faces/5.jpg',
        name: 'Angelina Hose',
        purchases: 21,
        saleValue: '$2,341'
      },
      {
        avatarSrc: './assets/images/faces/2.jpg',
        name: 'Samantha Sam',
        purchases: 24,
        saleValue: '$2,624'
      },
      {
        avatarSrc: './assets/images/faces/14.jpg',
        name: 'Dwayne Smith',
        purchases: 32,
        saleValue: '$3,172'
      },
      {
        avatarSrc: './assets/images/faces/15.jpg',
        name: 'Robert Lewis',
        purchases: 18,
        saleValue: '$2,415'
      },
      {
        avatarSrc: './assets/images/faces/2.jpg',
        name: 'Samantha Sam',
        purchases: 24,
        saleValue: '$2,624'
      },
    ];
    
    
}