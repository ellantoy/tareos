import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { SharedModule } from '../../../../shared/sharedmodule';
import Swal from 'sweetalert2';
import { NgbDropdownModule } from '@ng-bootstrap/ng-bootstrap';
import { SpkDropdownsComponent } from '../../../../@spk/reusable-ui-elements/spk-dropdowns/spk-dropdowns.component';
import { NgxReusableTableComponent } from '../../../../@spk/ngx-reusable-table/ngx-reusable-table.component';
import { SpkReusableTablesComponent } from '../../../../@spk/spk-reusable-tables/spk-reusable-tables.component';
const DATA = [
  {
    id:'1',
    name: "Men's Casual Shoes",
    category: "Footwear",
    image: "./assets/images/ecommerce/png/6.png",
    price: 149,
    originalPrice: 199,
    quantity: 2,
    stockStatus: "In Stock",
    stockClass: "text-success",
    rating: 4.2,
    discount: "25% off"
  },
  {
    id:'2',
    name: "Wireless Headphones",
    category: "Electronics",
    image: "./assets/images/ecommerce/png/7.png",
    price: 99,
    originalPrice: 149,
    quantity: 5,
    stockStatus: "In Stock",
    stockClass: "text-success",
    rating: 4.8,
    discount: "33% off"
  },
  {
    id:'3',
    name: "Ladies' Handbag",
    category: "Accessories",
    image: "./assets/images/ecommerce/png/8.png",
    price: 79,
    originalPrice: 99,
    quantity: 10,
    stockStatus: "In Stock",
    stockClass: "text-success",
    rating: 4.3,
    discount: "20% off"
  },
  {
    id:'4',
    name: "Smartphone",
    category: "Electronics",
    image: "./assets/images/ecommerce/png/9.png",
    price: 699,
    originalPrice: 799,
    quantity: 3,
    stockStatus: "In Stock",
    stockClass: "text-success",
    rating: 4.6,
    discount: "14% off"
  },
  {
    id:'5',
    name: "Smartwatch",
    category: "Electronics",
    image: "./assets/images/ecommerce/png/10.png",
    price: 199,
    originalPrice: 249,
    quantity: 7,
    stockStatus: "In Stock",
    stockClass: "text-success",
    rating: 4.7,
    discount: "20% off"
  },
  {
    id:'6',
    name: "Gaming Mouse",
    category: "Electronics",
    image: "./assets/images/ecommerce/png/11.png",
    price: 49,
    originalPrice: 79,
    quantity: 12,
    stockStatus: "In Stock",
    stockClass: "text-success",
    rating: 4.7,
    discount: "38% off"
  },
  {
    id:'7',
    name: "DSLR Camera",
    category: "Electronics",
    image: "./assets/images/ecommerce/png/12.png",
    price: 999,
    originalPrice: 1299,
    quantity: 1,
    stockStatus: "Limited Stock",
    stockClass: "text-danger",
    rating: 4.9,
    discount: "23% off"
  },
  {
    id:'8',
    name: "Bluetooth Speaker",
    category: "Electronics",
    image: "./assets/images/ecommerce/png/13.png",
    price: 149,
    originalPrice: 199,
    quantity: 6,
    stockStatus: "In Stock",
    stockClass: "text-success",
    rating: 4.4,
    discount: "25% off"
  },
  {
    id:'9',
    name: "Laptop Backpack",
    category: "Accessories",
    image: "./assets/images/ecommerce/png/14.png",
    price: 59,
    originalPrice: 99,
    quantity: 6,
    stockStatus: "In Stock",
    stockClass: "text-success",
    rating: 4.4,
    discount: "25% off"
  },
  {
    id:'10',
    name: "Office Chair",
    category: "Furniture",
    image: "./assets/images/ecommerce/png/15.png",
    price: 299,
    originalPrice: 349,
    quantity: 6,
    stockStatus: "In Stock",
    stockClass: "text-success",
    rating: 4.4,
    discount: "25% off"
  },
];

@Component({
  selector: 'app-wishlist',
  standalone: true,
  imports: [SharedModule,RouterModule,NgbDropdownModule,SpkDropdownsComponent,SpkReusableTablesComponent],
  templateUrl: './wishlist.component.html',
  styleUrl: './wishlist.component.scss'
})
export class WishlistComponent {
  items=DATA

  ProductHeader= [
    {header:'Product'},
    {header:'Price'},
    {header:'Quantity',tableHeadColumn:'text-center'},
    {header:'Availability'},
    {header:'Ratings'},
    {header:'Offer'},
    {header:'Actions'}
  ]

  ConformAlert(id:string) {
    Swal.fire({
      icon: 'warning',
      title: 'Are you sure?',
      text: 'You will not be able to recover this imaginary file!',
      showCancelButton: true,
      cancelButtonText: 'Cancel',
      cancelButtonColor: '#0162e8',
      confirmButtonText: 'Remove',
      confirmButtonColor: '#0162e8',
    }).then((result) => {
      if (result.isConfirmed) {
        Swal.fire({
          title: 'Deleted!',
          text: 'Your imaginary file has been deleted.',
          icon: 'success',
          confirmButtonColor: '#0162e8',
          
        });
        const data = this.items.filter((x: { id: string }) => x.id !== id);
        this.items = data;
         Swal.fire("Deleted!", "Your imaginary file has been deleted!", "success");
      } else if (result.dismiss === Swal.DismissReason.cancel) {
        // Swal.fire({
        //   title: 'Cancelled!',
        //   text: 'Your imaginary file is safe :)',
        //   icon: 'error',
        //   confirmButtonColor: '#0162e8',
        // });
      }
    });

     }
 
  Clear = () => {
    this.items = [];
  };
}
