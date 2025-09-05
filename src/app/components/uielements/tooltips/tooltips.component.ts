import { Component } from '@angular/core';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { ShowcodeCardComponent } from '../../../shared/common/includes/showcode-card/showcode-card.component';
import { SharedModule } from '../../../shared/sharedmodule';
import * as prismcodeData from '../../../shared/prismData/tooltips'
@Component({
  selector: 'app-tooltips',
  standalone: true,
  imports: [SharedModule,NgbModule,ShowcodeCardComponent],
  templateUrl: './tooltips.component.html',
  styleUrls: ['./tooltips.component.scss']
})
export class TooltipsComponent {
  prismCode = prismcodeData;

}
