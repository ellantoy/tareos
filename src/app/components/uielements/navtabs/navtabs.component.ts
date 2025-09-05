import { Component } from '@angular/core';
import { SharedModule } from '../../../shared/sharedmodule';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { SpkReusableTablesComponent } from '../../../@spk/spk-reusable-tables/spk-reusable-tables.component';

@Component({
  selector: 'app-navtabs',
  standalone: true,
  imports: [SharedModule,NgbModule,SpkReusableTablesComponent],
  templateUrl: './navtabs.component.html',
  styleUrls: ['./navtabs.component.scss']
})
export class NavtabsComponent {
  active2 = 4;
  active3 = 10;
  active4 = 14;
  active5 = 17;
  active6 = 19;
  active7 = 28;
  active8 = 31;
  active9 = 34;
  active12 = 43;
  active13 = 46;
  active14 = 52;
  active15 = 53;
  active16 = 59;
  active17 = 60;
  active18=56;;
  active=2;
  active1=3;
  activeJustified=2;
  activeNav=3;
  products = [
    {
      name: 'Alarm Clock',
      category: 'Clocks',
      price: '$1,299.00',
      imageUrl: './assets/images/ecommerce/png/32.png'
    },
    {
      name: 'Wrist Watch',
      category: 'Gadgets',
      price: '$7,249.29',
      imageUrl: './assets/images/ecommerce/png/10.png'
    },
    {
      name: 'Sport Shoes',
      category: 'Footwear',
      price: '$799.00',
      imageUrl: './assets/images/ecommerce/png/6.png'
    }
  ];
  tabsColumn=[
    {header:"Product",field:"Product"},
    {header:"Name",field:"Name"},
    {header:"Category",field:"Category"},
    {header:"Price",field:"Price"},

  ]
}
