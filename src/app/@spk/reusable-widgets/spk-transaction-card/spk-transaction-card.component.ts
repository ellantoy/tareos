import { Component, Input } from '@angular/core';

@Component({
  selector: 'spk-transaction-card',
  imports: [],
  templateUrl: './spk-transaction-card.component.html',
  styleUrl: './spk-transaction-card.component.scss'
})
export class SpkTransactionCardComponent {
  @Input() avatar: string = '';
  @Input() name: string = '';
  @Input() message: string = '';
  @Input() amount: string = '';
  @Input() time: string = '';
}
