import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';

@Component({
  selector: 'spk-sales-details',
  imports: [CommonModule],
  templateUrl: './spk-sales-details.component.html',
  styleUrl: './spk-sales-details.component.scss'
})
export class SpkSalesDetailsComponent {
  @Input() iconClass: string = '';
  @Input() bgClass: string = '';
  @Input() title: string = '';
  @Input() amount: string = '';
  @Input() progress: number = 0;
  @Input() progressClass: string = '';
}
