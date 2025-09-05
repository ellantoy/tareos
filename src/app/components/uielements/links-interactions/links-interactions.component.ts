import { Component } from '@angular/core';
import { SharedModule } from '../../../shared/sharedmodule';
import { ShowcodeCardComponent } from '../../../shared/common/includes/showcode-card/showcode-card.component';
import * as PrismCode from '../../../shared/prismData/linksinteractions'

@Component({
  selector: 'app-links-interactions',
  standalone: true,
  imports: [SharedModule,ShowcodeCardComponent],
  templateUrl: './links-interactions.component.html',
  styleUrl: './links-interactions.component.scss'
})
export class LinksInteractionsComponent {
  prsimCodeData: any = PrismCode;
}
