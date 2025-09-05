import { Component } from '@angular/core';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { ShowcodeCardComponent } from '../../../shared/common/includes/showcode-card/showcode-card.component';
import { SharedModule } from '../../../shared/sharedmodule';
import * as prismcodeData from '../../../shared/prismData/progress'
import { SpkProgressbarComponent } from '../../../@spk/reusable-ui-elements/spk-progressbar/spk-progressbar.component';
@Component({
  selector: 'app-progress',
  standalone: true,
  imports: [SharedModule,NgbModule,ShowcodeCardComponent,SpkProgressbarComponent],
  templateUrl: './progress.component.html',
  styleUrls: ['./progress.component.scss']
})
export class ProgressComponent {
  prismCode = prismcodeData;

}
