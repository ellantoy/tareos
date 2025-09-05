import { Component } from '@angular/core';
import { SharedModule } from '../../../../shared/sharedmodule';
import {NgbAccordionConfig, NgbAccordionModule } from '@ng-bootstrap/ng-bootstrap';
import { SpkReusableTablesComponent } from '../../../../@spk/spk-reusable-tables/spk-reusable-tables.component';

@Component({
  selector: 'app-order-details',
  standalone: true,
  imports: [SharedModule,NgbAccordionModule,SpkReusableTablesComponent],
  templateUrl: './order-details.component.html',
  styleUrl: './order-details.component.scss'
})
export class OrderDetailsComponent {
 
  constructor(config: NgbAccordionConfig) {
		config.closeOthers = true;
}
orderColumn=[
  {header:"Item",field:"Item"},
  {header:"Tracking ID",field:"Tracking ID"},
  {header:"Price",field:"Price"},
  {header:"Quantity",field:"Quantity"},
  {header:"Total Price",field:"Total Price"},
]

products = [
  {
    image: './assets/images/ecommerce/png/7.png',
    name: 'Wireless Headphones',
    category: 'Electronics',
    brand: 'Sony',
    sku: 'SPK1218153635',
    price: 99,
    quantity: 1,
    total: 99,
  },
  {
    image: './assets/images/ecommerce/png/8.png',
    name: "Ladies' Handbag",
    category: 'Accessories',
    brand: 'Gucci',
    sku: 'SPK3789423789',
    price: 79,
    quantity: 2,
    total: 158,
    offer: 'In Offer',
  },
  {
    image: './assets/images/ecommerce/png/10.png',
    name: 'Smartwatch',
    category: 'Electronics',
    brand: 'Apple',
    sku: 'SPK1120324532',
    price: 199,
    quantity: 1,
    total: 199,
    discount: '20% Off',
  },
  {
    image: './assets/images/ecommerce/png/11.png',
    name: 'Gaming Mouse',
    category: 'Electronics',
    brand: 'Logitech',
    sku: 'SPK1218153635',
    price: 49,
    quantity: 1,
    total: 49,
  },
  {
    image: './assets/images/ecommerce/png/12.png',
    name: 'DSLR Camera',
    category: 'Electronics',
    brand: 'Canon',
    sku: 'SPK3789423789',
    price: 999,
    quantity: 2,
    total: 1998,
    offer: 'In Offer',
  },
  {
    image: './assets/images/ecommerce/png/13.png',
    name: 'Bluetooth Speaker',
    category: 'Electronics',
    brand: 'JBL',
    sku: 'SPK1120324532',
    price: 149,
    quantity: 1,
    total: 149,
    discount: '25% Off',
  },
];

cartSummary = [
  { label: 'Total Items', value: '06' },
  { label: 'Applied Coupon', value: '<span class="badge bg-success-transparent">SP0578A</span>' },
  { label: 'Delivery Fees', value: '<span class="text-danger">+$29</span>' },
  { label: 'Sub Total', value: '<span class="fs-14 fw-medium">$3,799</span>' },
  { label: 'Total Price', value: '<span class="fs-20 fw-semibold">$3,129</span>' }
];
}
