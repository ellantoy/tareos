import { Component } from '@angular/core';
import { ShowcodeCardComponent } from '../../../shared/common/includes/showcode-card/showcode-card.component';
import { SharedModule } from '../../../shared/sharedmodule';
import * as PrismCode from '../../../shared/prismData/objectfit'
@Component({
  selector: 'app-objectfit',
  standalone: true,
  imports: [SharedModule,ShowcodeCardComponent],
  templateUrl: './objectfit.component.html',
  styleUrls: ['./objectfit.component.scss']
})
export class ObjectfitComponent {
  prsimCodeData: any = PrismCode;

}
