import { Component } from '@angular/core';
import { SharedModule } from '../../../shared/sharedmodule';

@Component({
  selector: 'app-columns',
  standalone: true,
  imports: [SharedModule],
  templateUrl: './columns.component.html',
  styleUrl: './columns.component.scss'
})
export class ColumnsComponent {

}
