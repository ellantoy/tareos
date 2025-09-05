import { Component } from '@angular/core';
import { ShowcodeCardComponent } from '../../../shared/common/includes/showcode-card/showcode-card.component';
import { SharedModule } from '../../../shared/sharedmodule';
import * as PrismCode from '../../../shared/prismData/listgroup'

@Component({
  selector: 'app-listgroup',
  standalone: true,
  imports: [SharedModule,ShowcodeCardComponent],
  templateUrl: './listgroup.component.html',
  styleUrls: ['./listgroup.component.scss']
})
export class ListgroupComponent {
  prsimCodeData: any = PrismCode;

}