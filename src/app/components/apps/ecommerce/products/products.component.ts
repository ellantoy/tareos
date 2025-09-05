import { Component } from '@angular/core';
import { Router, RouterModule } from '@angular/router';
import { NgbCollapseModule, NgbDropdownModule, NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { FormsModule } from '@angular/forms';
import { SharedModule } from '../../../../shared/sharedmodule';
import { MaterialModuleModule } from '../../../../material-module/material-module.module';
import { ShopServiceService } from '../../../../shared/services/e-commerce/shop-service.service';
import { productsType } from './products.modal';
import { SpkProductsReusableCardComponent } from '../../../../@spk/reusable-apps/spk-products-reusable-card/spk-products-reusable-card.component';
import * as noUiSlider from 'nouislider';

@Component({
  selector: 'app-products',
  standalone: true,
  imports: [SharedModule, RouterModule, SpkProductsReusableCardComponent,
    NgbCollapseModule, FormsModule, NgbDropdownModule, MaterialModuleModule, NgbModule],
  templateUrl: './products.component.html',
  styleUrl: './products.component.scss'
})
export class ProductsComponent {
  // products=DATA
  public someRange: number[] = [0.00, 10000.00];
  isCollapsed = true;
  isCollapsed1 = true;
  isCollapsed3 = true;
  collapse1: any;
  productsList: productsType[];
  constructor(private router: Router, public ShopService: ShopServiceService,) {
    this.productsList = this.ShopService.getData();
  }

  lowerValue: number = 8000;
  upperValue: number = 40000;

  ngAfterViewInit(): void {
    const slider = document.getElementById('nonlinear') as noUiSlider.target; // Correct type is noUiSlider.target

    noUiSlider.create(slider, {
      start: [this.lowerValue, this.upperValue],
      connect: true,
      range: {
        'min': [0],
        'max': [50000]
      }
    });

    const lowerValueElem :any= document.getElementById('lower-value');
    const upperValueElem:any = document.getElementById('upper-value');

    slider.noUiSlider?.on('update', (values: any, handle: any) => {
      if (handle === 0) {
        this.lowerValue = Math.round(values[0] as number);
        lowerValueElem.innerHTML = this.lowerValue.toString();
      } else {
        this.upperValue = Math.round(values[1] as number);
        upperValueElem.innerHTML = this.upperValue.toString();
      }
    });
  }


  products = [
    {
      id: 1,
      title: "Men's Casual Shoes",
      price: "$149",
      originalPrice: "$199",
      imageUrl: "./assets/images/ecommerce/png/6.png",
      discount: "12% Off",
      color1: "secondary",
      ratingsCount: 874,
      series: "Nike",
      trending: false,
      color: "info"
    },
    {
      id: 2,
      title: "Wireless Headphones",
      price: "$99",
      originalPrice: "$149",
      imageUrl: "./assets/images/ecommerce/png/7.png",
      discount: "15% Off",
      color1: "info",
      ratingsCount: 231,
      series: "Sony",
    },
    {
      id: 3,
      title: "Ladies' Handbag",
      price: "$79",
      originalPrice: "$99",
      imageUrl: "./assets/images/ecommerce/png/8.png",
      discount: "24% Off",
      color1: "success",
      ratingsCount: 110,
      series: "Gucci",
    },
    {
      id: 4,
      title: "Smartwatch",
      price: "$199",
      originalPrice: "$249",
      imageUrl: "./assets/images/ecommerce/png/10.png",
      discount: "60% Off",
      color1: "success",
      ratingsCount: 211,
      series: "Apple",
    },
    {
      id: 5,
      title: "Gaming Mouse",
      price: "$46",
      originalPrice: "$79",
      imageUrl: "./assets/images/ecommerce/png/11.png",
      discount: "10% Off",
      color1: "info",
      ratingsCount: 514,
      series: "Logitech",
    },
    {
      id: 6,
      title: "DSLR Camera",
      price: "$999",
      originalPrice: "$1299",
      imageUrl: "./assets/images/ecommerce/png/12.png",
      discount: "60% Off",
      color1: "success",
      ratingsCount: 211,
      series: "Canon",
    },
    {
      id: 7,
      title: "Bluetooth Speaker",
      price: "$149",
      originalPrice: "$199",
      imageUrl: "./assets/images/ecommerce/png/13.png",
      discount: "15% Off",
      color1: "warning",
      ratingsCount: 225,
      series: "SmartSync 2024",
      trending: false,
      color: "JBL"
    },
    {
      id: 8,
      title: "Laptop Backpack ",
      price: "$59",
      originalPrice: "$89",
      imageUrl: "./assets/images/ecommerce/png/14.png",
      discount: "50% Off",
      color1: "danger",
      ratingsCount: 142,
      series: "Samsonite",
    },
    {
      id: 9,
      title: "Office Chair",
      price: "$299",
      originalPrice: "$399",
      imageUrl: "./assets/images/ecommerce/png/15.png",
      discount: "15% Off",
      color1: "info",
      ratingsCount: 142,
      series: "Herman Miller",
    },
    {
      id: 10,
      title: "Running Shoes",
      price: "$99",
      originalPrice: "$149",
      imageUrl: "./assets/images/ecommerce/png/17.png",
      discount: "21% Off",
      color1: "secondary",
      ratingsCount: 142,
      series: "Adidas",
    },
    {
      id: 11,
      title: "Leather Wallet",
      price: "$39",
      originalPrice: "$59",
      imageUrl: "./assets/images/ecommerce/png/16.png",
      discount: "60% Off",
      color1: "success",
      ratingsCount: 211,
      series: "Fossil",
    },
    {
      id: 12,
      title: "Wall Clock",
      price: "$45",
      originalPrice: "$50",
      imageUrl: "./assets/images/ecommerce/png/5.png",
      discount: "10% Off",
      color1: "success",
      ratingsCount: 514,
      series: "Timex",
    },


  ];
}
