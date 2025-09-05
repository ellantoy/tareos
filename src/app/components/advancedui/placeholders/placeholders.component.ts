import { Component } from '@angular/core';
import { SharedModule } from '../../../shared/sharedmodule';
import { ShowcodeCardComponent } from '../../../shared/common/includes/showcode-card/showcode-card.component';
import * as prismCodeData from '../../../shared/prismData/advancedUi/placeholder';
import { CommonModule } from '@angular/common';
@Component({
  selector: 'app-placeholders',
  standalone: true,
  imports: [SharedModule,ShowcodeCardComponent,CommonModule],
  templateUrl: './placeholders.component.html',
  styleUrl: './placeholders.component.scss'
})
export class PlaceholdersComponent {
  prismCode = prismCodeData;
}
