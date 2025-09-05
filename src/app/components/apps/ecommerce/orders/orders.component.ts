import { Component } from '@angular/core';
import { SharedModule } from '../../../../shared/sharedmodule';
import { NgbDropdownModule } from '@ng-bootstrap/ng-bootstrap';
import { RouterModule } from '@angular/router';
import { SpkReusableTablesComponent } from '../../../../@spk/spk-reusable-tables/spk-reusable-tables.component';
import { SpkDropdownsComponent } from '../../../../@spk/reusable-ui-elements/spk-dropdowns/spk-dropdowns.component';

const DATA=[
  {
    id:"#1172553",
    img:"./assets/images/ecommerce/png/6.png" ,
    name:"Men's Casual Shoes",
    src1:"./assets/images/faces/4.jpg",
    customer:'Violeta Tilly',
    contact:'(222) 111 - 57840',
    date:'11 Jan 2024',
    bg:"success",
    status:"Shipped",
    payment:"Cash On Delivery",
    price:"$149",
  },
  {
    id:"#1172555",
    img:"./assets/images/ecommerce/png/7.png" ,
    name:"Wireless Headphones",
    src1:"./assets/images/faces/15.jpg",
    customer:'Danny Raj',
    contact:'(222) 687-9954',
    date:'23 Jan 2024',
    bg:"warning",
    status:"Pending",
    payment:"Online Payment",
    price:"$99",
  },
  {
    id:"#1202513",
    img:"./assets/images/ecommerce/png/8.png" ,
    name:"Ladies' Handbag",
    src1:"./assets/images/faces/8.jpg",
    customer:'Sissera William',
    contact:'(222) 987-1323',
    date:'19 Feb 2024',
    bg:"success",
    status:"Shipped",
    payment:"Cash On Delivery",
    price:"$79",
  },
  {
    id:"#1202510",
    img:"./assets/images/ecommerce/png/9.png" ,
    name:"Smartphone",
    src1:"./assets/images/faces/11.jpg",
    customer:'Red Stark',
    contact:'(222) 447-4518',
    date:' 06 Mar 2024',
    bg:"danger",
    status:"Cancelled",
    payment:"Online Payment",
    price:"$699",
  },
  {
    id:"#1222516",
    img:"./assets/images/ecommerce/png/10.png" ,
    name:"Smartwatch",
    src1:"./assets/images/faces/1.jpg",
    customer:'Henry Milo',
    contact:'(222) 666-8080',
    date:'18 Mar 2024',
    bg:"success",
    status:"Shipped",
    payment:"Cash On Delivery",
    price:"$199",
  },
  {
    id:"#1202513",
    img:"./assets/images/ecommerce/png/11.png" ,
    name:"Gaming Mouse",
    src1:"./assets/images/faces/8.jpg",
    customer:'Sissera William',
    contact:'(222) 144-1423',
    date:'19 Feb 2024',
    bg:"success",
    status:"Shipped",
    payment:"Cash On Delivery",
    price:"$49",
  },
  {
    id:"#1202510",
    img:"./assets/images/ecommerce/png/12.png" ,
    name:"DSLR Camera",
    src1:"./assets/images/faces/11.jpg",
    customer:'Red Stark',
    contact:'(222) 447-4515',
    date:' 06 Mar 2024',
    bg:"danger",
    status:"Cancelled",
    payment:"Online Payment",
    price:"$999",
  },
  {
    id:"#1222516",
    img:"./assets/images/ecommerce/png/13.png" ,
    name:"Bluetooth Speaker",
    src1:"./assets/images/faces/1.jpg",
    customer:'Henry Milo',
    contact:'(222) 887-1323',
    date:'18 Mar 2024',
    bg:"success",
    status:"Shipped",
    payment:"Cash On Delivery",
    price:"$149",
  },
]

@Component({
  selector: 'app-orders',
  standalone: true,
  imports: [SharedModule,NgbDropdownModule,RouterModule,SpkReusableTablesComponent],
  templateUrl: './orders.component.html',
  styleUrl: './orders.component.scss'
})
export class OrdersComponent {
  orders=DATA;
  remove(contact:string){
    const data = this.orders.filter((x: { contact: string }) => {
      return x.contact != contact;
  
    })
    this.orders = data;
}
ordersColumn=[
  {header:"Order Id",field:"Order Id"},
  {header:"Product",field:"Product"},
  {header:"Customer",field:"Customer"},
  {header:"Mobile Number",field:"Mobile Number"},
  {header:"Ordered Date",field:"Ordered Date"},
  {header:"Status",field:"Status"},
  {header:"Payment Mode",field:"Payment Mode"},
  {header:"Cost",field:"Cost"},
  {header:"Action",field:"Action"},
]
}
