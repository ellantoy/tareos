import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';
import { SpkDropdownsComponent } from '../../reusable-ui-elements/spk-dropdowns/spk-dropdowns.component';

@Component({
  selector: 'spk-sales-card-4',
  imports: [CommonModule,SpkDropdownsComponent],
  templateUrl: './spk-sales-card-4.component.html',
  styleUrl: './spk-sales-card-4.component.scss'
})
export class SpkSalesCard4Component {
  @Input() title: string = '';
  @Input() value: string = '';
  @Input() percentageChange: string = '';
  @Input() iconSrc: string = '';
  @Input() badgeColor: string = '';
  @Input() backgroundColor: string = '';
  @Input() svgPath: string = '';
  @Input() svgPath1: string = '';
  
}
