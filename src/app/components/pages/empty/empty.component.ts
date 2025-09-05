import { Component } from '@angular/core';
import { SharedModule } from '../../../shared/sharedmodule';

@Component({
  selector: 'app-empty',
  standalone: true,
  imports: [SharedModule],
  templateUrl: './empty.component.html',
  styleUrl: './empty.component.scss'
})
export class EmptyComponent {

}
