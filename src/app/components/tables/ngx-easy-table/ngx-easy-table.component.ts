import { ChangeDetectionStrategy, Component } from '@angular/core';
import { SharedModule } from '../../../shared/sharedmodule';
import { NgxReusableTableComponent } from '../../../@spk/ngx-reusable-table/ngx-reusable-table.component';
@Component({
  selector: 'app-grid-js-tabls',
  standalone: true,
  imports: [SharedModule,NgxReusableTableComponent],
  templateUrl: './ngx-easy-table.component.html',
  styleUrl: './ngx-easy-table.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,

})
export class GridJsTablsComponent {

}

