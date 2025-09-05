import { Component } from '@angular/core';
import { SharedModule } from '../../../shared/sharedmodule';
import { RibbonCardsComponent } from '../../../@spk/ribbon-cards/ribbon-cards.component';

@Component({
  selector: 'app-ribbons',
  standalone: true,
  imports: [SharedModule,RibbonCardsComponent],
  templateUrl: './ribbons.component.html',
  styleUrl: './ribbons.component.scss'
})
export class RibbonsComponent {

}
