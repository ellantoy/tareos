import { Component } from '@angular/core';
import { FormsModule, ReactiveFormsModule} from '@angular/forms';
import { RouterModule } from '@angular/router';
import { NgbModal, NgbNavModule } from '@ng-bootstrap/ng-bootstrap';
import { SharedModule } from '../../../../shared/sharedmodule';
import { SpkNgSelectComponent } from '../../../../@spk/spk-ng-select/spk-ng-select.component';
import { SpkFlatpickrComponent } from '../../../../@spk/spk-flatpickr/spk-flatpickr.component';
@Component({
  selector: 'app-checkout',
  standalone: true,
  imports: [RouterModule,SharedModule,ReactiveFormsModule,FormsModule,NgbNavModule,SpkNgSelectComponent,SpkFlatpickrComponent],
  templateUrl: './checkout.component.html',
  styleUrl: './checkout.component.scss'
})
export class CheckoutComponent {
  constructor(private modalService: NgbModal) { }

  navigateToTab(tabIndex: number, nav: any): void {
    nav.select(tabIndex); // Programmatically select the tab
  }

  Address(content: any) {
    this.modalService.open(content,{ size: 'lg' });
  }

  cityData=[
    {label:'Georgetown',value:1},
    {label:'Alexandria',value:2},
    {label:'Rockville',value:3},
    {label:'Frederick',value:4},
  ]
  StateData=[
    {label:'Washington,D.C',value:1},
    {label:'California',value:2},
    {label:'Texas',value:3},
    {label:'Alaska',value:4},
  ]
  handleSelectChange(value: any | any[]) {
  }
}
