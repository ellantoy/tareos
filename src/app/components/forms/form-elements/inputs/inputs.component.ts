import { Component } from '@angular/core';
import { SharedModule } from '../../../../shared/sharedmodule';
import { ShowcodeCardComponent } from '../../../../shared/common/includes/showcode-card/showcode-card.component';
import * as prismCodeData from '../../../../shared/prismData/forms/inputs'
import { NgSelectModule } from '@ng-select/ng-select';

@Component({
  selector: 'app-inputs',
  standalone: true,
  imports: [SharedModule, ShowcodeCardComponent,NgSelectModule],
  templateUrl: './inputs.component.html',
  styleUrl: './inputs.component.scss'
})
export class InputsComponent {
  prismCode = prismCodeData;

}
