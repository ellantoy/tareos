import { Component } from '@angular/core';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import * as PrismCode from '../../../shared/prismData/buttongroup';
import { ShowcodeCardComponent } from '../../../shared/common/includes/showcode-card/showcode-card.component';
import { SharedModule } from '../../../shared/sharedmodule';

@Component({
  selector: 'app-buttongroup',
  standalone: true,
  imports: [SharedModule,NgbModule,ShowcodeCardComponent],
  templateUrl: './buttongroup.component.html',
  styleUrls: ['./buttongroup.component.scss']
})
export class ButtongroupComponent {
  prsimCodeData: any = PrismCode;
  basicButtons=[
  {class:'btn-info btn-wave',icon:'bi bi-skip-backward'},
  {class:'btn-info btn-wave',icon:'bi bi-pause'},
  {class:'btn-info btn-wave',icon:'bi bi-skip-forward'}
  ]
}
