import { Component } from '@angular/core';
import { ShowcodeCardComponent } from '../../../shared/common/includes/showcode-card/showcode-card.component';
import * as prismCodeData from '../../../shared/prismData/forms/floating_labels'
import { SharedModule } from '../../../shared/sharedmodule';
import { NgSelectModule } from '@ng-select/ng-select';
import { MaterialModuleModule } from '../../../material-module/material-module.module';

@Component({
  selector: 'app-floating-labels',
  standalone: true,
  imports: [SharedModule, ShowcodeCardComponent,NgSelectModule,MaterialModuleModule],
  templateUrl: './floating-labels.component.html',
  styleUrl: './floating-labels.component.scss'
})
export class FloatingLabelsComponent {
  prismCode = prismCodeData;

}
