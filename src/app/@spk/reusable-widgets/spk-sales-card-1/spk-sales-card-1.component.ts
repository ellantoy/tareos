import { Component, Input } from '@angular/core';
import { ApexChartComponent } from '../../apex-chart/apex-chart.component';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'spk-sales-card-1',
  imports: [CommonModule,ApexChartComponent],
  templateUrl: './spk-sales-card-1.component.html',
  styleUrl: './spk-sales-card-1.component.scss'
})
export class SpkSalesCard1Component {
  @Input() cardData!: {
    title: string;
    value: string;
    change: string;
    icon: string;
    bgColor: string;
    colorClass: string;
    chartOptions: any;
  };

 
}
