import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';
interface RevenueData {
  label: string;
  amount: string;
  change: string;
  changeType: 'success' | 'danger' | any  // Defines color coding (green/red)
  iconClass: string;
}

@Component({
  selector: 'spk-revenue-list',
  imports: [CommonModule],
  templateUrl: './spk-revenue-list.component.html',
  styleUrl: './spk-revenue-list.component.scss'
})
export class SpkRevenueListComponent {
  @Input() revenues: RevenueData[]  = [];
}
