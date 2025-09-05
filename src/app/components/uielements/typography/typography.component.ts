import { Component } from '@angular/core';
import { ShowcodeCardComponent } from '../../../shared/common/includes/showcode-card/showcode-card.component';
import { SharedModule } from '../../../shared/sharedmodule';
import * as prismcodeData from '../../../shared/prismData/typography'
@Component({
  selector: 'app-typography',
  standalone: true,
  imports: [SharedModule,ShowcodeCardComponent],
  templateUrl: './typography.component.html',
  styleUrl: './typography.component.scss'
})
export class TypographyComponent {
  prismCode = prismcodeData;
}
