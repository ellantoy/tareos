import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { ShowcodeCardComponent } from '../../../../shared/common/includes/showcode-card/showcode-card.component';
import * as prismCodeData from '../../../../shared/prismData/forms/check_radio'
import { ToggleBtnDirective } from '../../../../shared/directives/toggle-btn.directive';
import { SharedModule } from '../../../../shared/sharedmodule';

@Component({
  selector: 'app-checks-radios',
  standalone: true,
  imports: [SharedModule, CommonModule, FormsModule, ShowcodeCardComponent, ToggleBtnDirective],
  templateUrl: './checks-radios.component.html',
  styleUrl: './checks-radios.component.scss',
})
export class ChecksRadiosComponent {
  prismCode = prismCodeData;
}
