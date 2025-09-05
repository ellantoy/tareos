import { Component, Input } from '@angular/core';

@Component({
  selector: 'spk-recent-transaction',
  imports: [],
  templateUrl: './spk-recent-transaction.component.html',
  styleUrl: './spk-recent-transaction.component.scss'
})
export class SpkRecentTransactionComponent {
  @Input() avatarSrc: string = '';
  @Input() customerName: string = '';
  @Input() purchasesCount: number = 0;
  @Input() saleValue: string = '';
}
