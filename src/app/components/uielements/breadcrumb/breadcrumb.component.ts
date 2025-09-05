import { Component } from '@angular/core';
import * as PrismCode from '../../../shared/prismData/breadcrumb';
import { ShowcodeCardComponent } from '../../../shared/common/includes/showcode-card/showcode-card.component';
import { SharedModule } from '../../../shared/sharedmodule';
import { CommonModule } from '@angular/common';
import { SpkBreadcrumbComponent } from "../../../@spk/reusable-ui-elements/spk-breadcrumb/spk-breadcrumb.component";

@Component({
  selector: 'app-breadcrumb',
  standalone: true,
  imports: [SharedModule, ShowcodeCardComponent, CommonModule, SpkBreadcrumbComponent],
  templateUrl: './breadcrumb.component.html',
  styleUrls: ['./breadcrumb.component.scss']
})
export class BreadcrumbComponent {
  prsimCodeData: any = PrismCode;
  breadcrumbStyle = {
    '--bs-breadcrumb-divider':
      'url("data:image/svg+xml,%3Csvg xmlns=\'http://www.w3.org/2000/svg\' width=\'8\' height=\'8\'%3E%3Cpath d=\'M2.5 0L1 1.5 3.5 4 1 6.5 2.5 8l4-4-4-4z\' fill=\'currentColor\'/%3E%3C/svg%3E")',
  };
  divider = {
    '--bs-breadcrumb-divider': "'~'"
}
}