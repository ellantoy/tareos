import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';

@Component({
  selector: 'spk-sales-card-2',
  imports: [CommonModule],
  templateUrl: './spk-sales-card-2.component.html',
  styleUrl: './spk-sales-card-2.component.scss'
})
export class SpkSalesCard2Component {
  @Input() title: string = '';
  @Input() value: string = '';
  @Input() percentageChange: number = 0;
  @Input() avatarClass: string = '';
  @Input() svgViewBox: string = '';
  @Input() svgFill: string = 'evenodd';
  @Input() svgPath: string = '';
}
