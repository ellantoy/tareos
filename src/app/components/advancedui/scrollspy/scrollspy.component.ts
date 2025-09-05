import { SpkDropdownsComponent } from './../../../@spk/reusable-ui-elements/spk-dropdowns/spk-dropdowns.component';
import { DOCUMENT } from '@angular/common';
import { Component, ElementRef, HostListener, Inject, Renderer2 } from '@angular/core';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { SharedModule } from '../../../shared/sharedmodule';
import { ShowcodeCardComponent } from '../../../shared/common/includes/showcode-card/showcode-card.component';
import * as prismCodeData from '../../../shared/prismData/advancedUi/scrollspy'
@Component({
  selector: 'app-scrollspy',
  standalone: true,
  imports: [SharedModule,NgbModule,ShowcodeCardComponent,SpkDropdownsComponent],
  templateUrl: './scrollspy.component.html',
  styleUrls: ['./scrollspy.component.scss']
})
export class ScrollspyComponent {
  prismCode = prismCodeData;
}
