import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { SharedModule } from '../../../../shared/sharedmodule';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { SpkReusableTablesComponent } from '../../../../@spk/spk-reusable-tables/spk-reusable-tables.component';
const DATA=[
  {
    id:'1',
    img:"./assets/images/ecommerce/png/6.png" ,
    product:"Men's Casual Shoes",
    type:'Nike',
    category:"Footware",
    price:'$1,299',
    stock:'283',
    bg:"primary",
    status:'Published',
    src:"./assets/images/faces/4.jpg",
    seller:'Mayor Kelly',
    date:'24,Nov 2023 - 04:42PM',
    checked:false,
  
  },
  {
    id:'2',
    img:"./assets/images/ecommerce/png/7.png" ,
    product:'Wireless Headphones',
    type:'Sony',
    category:"Electronics",
    price:'$799',
    stock:'98',
    bg:"danger",
    status:'Unpublished',
    src:"./assets/images/faces/15.jpg",
    seller:'Andrew Garfield',
    date:'18,Nov 2023 - 06:53AM',
    checked:false,
  
  },
  {
    id:'3',
    img:"./assets/images/ecommerce/png/8.png" ,
    product:"Ladies' Handbag",
    type:'Gucci',
    category:"Accessories",
    price:'$2,499',
    stock:'194',
    bg:"primary",
    status:'Published',
    src:"./assets/images/faces/11.jpg",
    seller:'Simon Cowel',
    checked:false,
    date:'12,Aug 2023 - 11:21AM',
  },
  {
    id:'4',
    img:"./assets/images/ecommerce/png/9.png" ,
    product:"Smartphone",
    type:'Samsung',
    category:"Electronics",
    price:'$899',
    stock:'267',
    bg:"danger",
    status:'Unpublished',
    src:"./assets/images/faces/8.jpg",
    seller:'Mirinda Hers',
    checked:false,
    date:'05,Sep 2023 - 10:14AM',
  },
  {
    id:'5',
    img:"./assets/images/ecommerce/png/10.png" ,
    product:"Smartwatch",
    type:'Apple',
    category:"Electronics",
    price:'$499',
    stock:'143',
    bg:"primary",
    status:'Published',
    src:"./assets/images/faces/1.jpg",
    seller:'Simon Cowel',
    checked:false,
    date:'18,Nov 2023 - 14:35PM',
  },
  {
    id:'6',
    img:"./assets/images/ecommerce/png/11.png" ,
    product:"Gaming Mouse",
    type:'Logitech',
    category:"Electronics",
    price:'$999',
    stock:'365',
    bg:"primary",
    status:'Published',
    src:"./assets/images/faces/2.jpg",
    seller:'Mirinda Hers',
    checked:false,
    date:'27,Nov 2023 - 05:12AM',
  },
  {
    id:'7',
    img:"./assets/images/ecommerce/png/12.png" ,
    product:"DSLR Camera",
    type:'Canon',
    category:"Electronics",
    price:'$1,499',
    stock:'257',
    bg:"danger",
    status:'Unpublished',
    src:"./assets/images/faces/9.jpg",
    seller:'Jhon Trendy',
    checked:false,
    date:'29,Nov 2023 - 16:32PM',
  },

]
@Component({
  selector: 'app-productslist',
  standalone: true,
  imports: [SharedModule,RouterModule,FormsModule,ReactiveFormsModule,SpkReusableTablesComponent],
  templateUrl: './productslist.component.html',
  styleUrl: './productslist.component.scss'
})
export class ProductslistComponent {
  lists=DATA
  toggleRowChecked(row: any): void {
    // Check if all rows are selected
    this.allTasksChecked = this.lists.every(row => row.checked);

    // Update the state of the header checkbox accordingly
  }
  handleToggleSelectAll(checked: any) {
    this.lists.forEach(list => list.checked = checked);
    this.allTasksChecked = checked;
  }

  Remove(id: any) {
    var Outputdata = this.lists.filter((x) => {
      return x.id != id;
    });
    this.lists = Outputdata;
  }

  Clear = () => {
    this.lists = [];
  };
  allTasksChecked: boolean = false;
  tasks: any[] = [/* your tasks here */];

  toggleSelectAll(event: Event) {
    this.allTasksChecked = (event.target as HTMLInputElement).checked;
  }
  productlistColumns=[
    {header:"Product",field:"Product"},
    {header:"Category",field:"Category"},
    {header:"Price",field:"Price"},
    {header:"Stock",field:"Stock"},
    {header:"Status",field:"Status"},
    {header:"Seller",field:"Seller"},
    {header:"Published",field:"Published"},
    {header:"Action",field:"Action"},



  ]
}
