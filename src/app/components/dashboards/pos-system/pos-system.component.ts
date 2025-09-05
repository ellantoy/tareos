import { SpkPoscardComponent } from './../../../@spk/reusable-dashboards/spk-poscard/spk-poscard.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { Component, TemplateRef } from '@angular/core';
import { SharedModule } from '../../../shared/sharedmodule';
import { NgbModule, NgbOffcanvas } from '@ng-bootstrap/ng-bootstrap';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-pos-system',
  standalone: true,
  imports: [SharedModule,NgbModule,CommonModule,FormsModule,ReactiveFormsModule,RouterModule,SpkPoscardComponent],
  templateUrl: './pos-system.component.html',
  styleUrl: './pos-system.component.scss'
})
export class PosSystemComponent {

decreaseQuantity(item: any) {
  if (item.quantity > 1) {
    item.quantity--;     
  }
}

increaseQuantity(item: any) {
  item.quantity++; 
}
items=[
  {
    id:'1',
    src:"./assets/images/pos-system/17.jpg",
    name:"Cappuccino",
    type:"Coffee",
    quantity:"2"
  },
  {
    id:'2',
    src:"./assets/images/pos-system/11.jpg",
    name:"Frosting",
    type:"Cupcakes",
    quantity:"2"
  },
  {
    id:'3',
    src:"./assets/images/pos-system/9.jpg",
    name:"Cheeseburger",
    type:"Burger",
    quantity:"2"
  },
  {
    id:'4',
    src:"./assets/images/pos-system/16.jpg",
    name:"Cheese Pizza",
    type:"Pizza",
    quantity:"2"
  },
  {
    id:'5',
    src:"./assets/images/pos-system/10.jpg",
    name:"Normal Pizza",
    type:"Pizza",
    quantity:"2"
  }
]
handleCardClick(event: MouseEvent) {
  // Prevent the click event from propagating to the container
  event.stopPropagation();
}

removeRow(id: string) {
  const rowElement = document.getElementById(id);
  if (rowElement) {
    rowElement.remove();
  }
}
products = [
  {
    name: 'Classic Cheeseburger',
    description: 'Classic Burgers',
    price: 78.99,
    category: 'burger',
    image: './assets/images/pos-system/9.jpg',
    isOutOfStock: false
  },
  {
    name: 'Coconut Almond Fudge',
    description: 'Specialty Flavors',
    price: 29.99,
    category: 'icecream',
    image: './assets/images/pos-system/18.jpg',
    isOutOfStock: true
  },
  {
    name: 'Cappuccino',
    description: 'Espresso Beverages',
    price: 7.99,
    category: 'coffee',
    image: './assets/images/pos-system/17.jpg',
    isOutOfStock: false
  },
  {
    name: 'Frosting Choices',
    description: 'Cupcake Creations',
    price: 19.99,
    category: 'cupcakes',
    image: './assets/images/pos-system/11.jpg',
    isOutOfStock: false
  },
  {
    name: 'Nutella Cupcake',
    description: 'Specialty Cupcakes',
    price: 123.99,
    category: 'cupcakes',
    image: './assets/images/pos-system/12.jpg',
    isOutOfStock: false
  },
  {
    name: 'Mediterranean',
    description: 'Specialty Pizzas',
    price: 2.79,
    category: 'pizza',
    image: './assets/images/pos-system/16.jpg',
    isOutOfStock: false
  },
  {
    name: 'Cold Brew Concentrate',
    description: 'Cold Brews',
    price: 1.29,
    category: 'coffee',
    image: './assets/images/pos-system/14.jpg',
    isOutOfStock: false
  },
  {
    name: 'Blue Cheese Burger',
    description: 'Gourmet Burgers',
    price: 24.99,
    category: 'burger',
    image: './assets/images/pos-system/15.jpg',
    isOutOfStock: false
  },
  {
    name: 'Apple Cinnamon Waffle',
    description: 'Specialty Waffles',
    price: 24.99,
    category: 'waffle',
    image: './assets/images/pos-system/19.jpg',
    isOutOfStock: false
  },
  {
    name: 'Pesto Delight',
    description: 'Specialty Pizzas',
    price: 24.99,
    category: 'pizza',
    image: './assets/images/pos-system/10.jpg',
    isOutOfStock: false
  },
  {
    name: 'Cookie Dough Sundae',
    description: 'Sundae Creations',
    price: 24.99,
    category: 'icecream',
    image: './assets/images/pos-system/8.jpg',
    isOutOfStock: false
  },
  {
    name: 'Americano',
    description: 'Espresso Beverages',
    price: 24.99,
    category: 'coffee',
    image: './assets/images/pos-system/13.jpg',
    isOutOfStock: false
  }
];
}
