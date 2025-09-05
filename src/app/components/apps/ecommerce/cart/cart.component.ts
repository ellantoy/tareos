import { Component } from '@angular/core';

import Swal from 'sweetalert2';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { SharedModule } from '../../../../shared/sharedmodule';
import { CommonModule } from '@angular/common';
const DATA = [
  {
    id:'1',
    image: './assets/images/ecommerce/png/7.png',
    name: 'Wireless Headphones',
    discount: '33% OFF',
    category: 'Electronics',
    brand: 'Sony',
    price: 99,
    stockStatus: 'In Stock',
    quantity: 3,
    totalPrice: 297,
    offerBg:'secondary'
  },
  {
    id:'2',
    image: './assets/images/ecommerce/png/8.png',
    name: "Ladies' Handbag",
    discount: '',
    category: 'Accessories',
    brand: 'Gucci',
    price: 79,
    stockStatus: 'Limited Stock',
    quantity: 1,
    totalPrice: 79
  },
  {
    id:'3',
    image: './assets/images/ecommerce/png/12.png',
    name: 'DSLR Camera',
    discount: '23% OFF',
    category: 'Electronics',
    brand: 'Canon',
    price: 999,
    stockStatus: 'In Stock',
    quantity: 2,
    totalPrice: 1998,
    offerBg:'info'
  },
  {
    id:'4',
    image: './assets/images/ecommerce/png/10.png',
    name: 'Smartwatch',
    discount: '',
    category: 'Electronics',
    brand: 'Apple',
    price: 199,
    stockStatus: 'Limited Stock',
    quantity: 1,
    totalPrice: 199
  },
  {
    id:'5',
    image: './assets/images/ecommerce/png/11.png',
    name: 'Gaming Mouse',
    discount: '',
    category: 'Electronics',
    brand: 'Logitech',
    price: 49,
    stockStatus: 'In Stock',
    quantity: 1,
    totalPrice: 49
  }
];
@Component({
  selector: 'app-cart',
  standalone: true,
  imports: [SharedModule, FormsModule, RouterModule,NgbModule,CommonModule],
  templateUrl: './cart.component.html',
  styleUrl: './cart.component.scss'
})
export class CartComponent {
  constructor() {}
  products = DATA;
  confirmAlert(id: string) {
    Swal.fire({
      title: 'Are you sure?',
      text: "You won't be able to revert this!",
      icon: 'warning',
      showCancelButton: true, // This shows the Cancel button
      confirmButtonText: 'Yes, delete it!',
      cancelButtonText: 'Cancel',
      reverseButtons: true // Optional: reverses the position of the confirm and cancel buttons
    }).then((result) => {
      if (result.isConfirmed) { // result.isConfirmed is true if "Yes, delete it!" was clicked
        const data = this.products.filter((x: { id: string }) => x.id !== id);
        this.products = data;
        Swal.fire('Deleted!', 'Your item has been deleted!', 'success');
      } else { 
        // User clicked "Cancel" or closed the alert
    
      }
    });
  }
  // Remove(id: any) {
  //   var Outputdata = this.products.filter((x) => {
  //     return x.id != id;
  //   });
  //   this.products = Outputdata;
  // }

  Clear = () => {
    this.products = [];
  };

  quantity: number = 1;
  decreaseQuantity(product: any) {
    if (product.quantity > 0) {
      product.quantity--;     
    }
  }

  increaseQuantity(product: any) {
    product.quantity++; 
  }
  cartColumn=[
    {header:"Product Name",field:"product"},
    {header:"Price",field:"price"},
    {header:"Quantity",field:"quantity"},
    {header:"Total",field:"total"},
    {header:"Action",field:"action"},
  ]
}
