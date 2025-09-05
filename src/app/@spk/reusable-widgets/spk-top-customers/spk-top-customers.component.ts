import { Component, Input } from '@angular/core';

@Component({
  selector: 'spk-top-customers',
  imports: [],
  templateUrl: './spk-top-customers.component.html',
  styleUrl: './spk-top-customers.component.scss'
})
export class SpkTopCustomersComponent {
  @Input() avatar: string = '';
  @Input() name: string = '';
  @Input() email: string = '';
  @Input() amount: string = '';
  @Input() defaultClass: string = '';
}

