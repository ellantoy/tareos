import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';
import { ApexChartComponent } from '../../apex-chart/apex-chart.component';

@Component({
  selector: 'spk-sales-card-3',
  imports: [CommonModule,ApexChartComponent],
  templateUrl: './spk-sales-card-3.component.html',
  styleUrl: './spk-sales-card-3.component.scss'
})
export class SpkSalesCard3Component {
  @Input() title: string = '';
  @Input() value: string = '';
  @Input() iconColor: string = '';
  @Input() percentageChange: number = 0;
  @Input() iconPath: string = '';
  @Input() badgeClass: string = '';
  @Input() badgeText: string = '';
  @Input() chartId: string = '';
  @Input() chartOptions: any = {};
}
