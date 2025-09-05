import { Component } from '@angular/core';
import { SharedModule } from '../../../shared/sharedmodule';
import { SpkReusableTablesComponent } from '../../../@spk/spk-reusable-tables/spk-reusable-tables.component';

@Component({
  selector: 'app-css-grid',
  standalone: true,
  imports: [SharedModule,SpkReusableTablesComponent],
  templateUrl: './css-grid.component.html',
  styleUrl: './css-grid.component.scss'
})
export class CssGridComponent {
  variables = [
    {
      variable: '--bs-rows',
      fallbackValue: '1',
      description: 'The number of rows in your grid template'
    },
    {
      variable: '--bs-columns',
      fallbackValue: '12',
      description: 'The number of columns in your grid template'
    },
    {
      variable: '--bs-gap',
      fallbackValue: '1.5rem',
      description: 'The size of the gap between columns (vertical and horizontal)'
    }
  ];
  cssColumn=[
    {header:"Variable",field:"Variable"},
    {header:"Fallback value",field:"Fallback value"},
    {header:"Description",field:"Description"},

  ]
}
