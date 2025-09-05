import { CUSTOM_ELEMENTS_SCHEMA, Component, ElementRef, ViewChild } from '@angular/core';
import { SharedModule } from '../../../../shared/sharedmodule';
import { ActivatedRoute, RouterModule } from '@angular/router';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { GalleryItem, Gallery, ImageItem, ImageSize, ThumbnailsPosition,GalleryModule } from 'ng-gallery';
import { Lightbox, LightboxModule } from 'ng-gallery/lightbox';
import Swiper from 'swiper'
import { register as registerSwiperElements } from 'swiper/element';
import { Autoplay, Pagination, Navigation } from 'swiper/modules';
import { ProductdetailsService } from '../../../../shared/services/e-commerce/productdetails.service';
import { ShopServiceService } from '../../../../shared/services/e-commerce/shop-service.service';
import { SpkProductsReusableCardComponent } from '../../../../@spk/reusable-apps/spk-products-reusable-card/spk-products-reusable-card.component';
import { SpkGalleryComponent } from '../../../../@spk/spk-reusable-plugins/spk-gallery/spk-gallery.component';
Swiper.use([Autoplay, Navigation, Pagination]);
registerSwiperElements();
const data = [
  {
    srcUrl: './assets/images/ecommerce/png/1.png',
    previewUrl: './assets/images/ecommerce/png/2.png',
    previewUrl1: './assets/images/ecommerce/png/3.png',
    previewUrl2: './assets/images/ecommerce/png/4.png',
    previewUrl4: './assets/images/ecommerce/png/5.png',
  },
]
@Component({
  selector: 'app-productdetails',
  standalone: true,
  imports: [SharedModule,RouterModule,GalleryModule,NgbModule,SpkGalleryComponent,
    LightboxModule,SpkProductsReusableCardComponent],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
  templateUrl: './productdetails.component.html',
  styleUrl: './productdetails.component.scss'
})
export class ProductdetailsComponent {
  imageData = data;
  items!: GalleryItem[];

  quantity: number = 1;
  product: number = 1;
  increase() {
    this.product++;
  }

  decrease() {
    if (this.product >0) {
      this.product--;
    }
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
  @ViewChild('swiperContainer', { static: false }) swiperContainer!: ElementRef;
  @ViewChild('swiperContainer1', { static: false }) swiperContainer1!: ElementRef;
  breakpoints = {
    0: { slidesPerView: 1, spaceBetween: 20 },
    320: { slidesPerView: 1, spaceBetween: 20 },
    500: { slidesPerView: 2, spaceBetween: 20 },
    1020: { slidesPerView: 3, spaceBetween: 20 },
    1400: { slidesPerView: 4, spaceBetween: 20 },
  };
  ngAfterViewInit(): void {
    if (this.swiperContainer) {
      const swiperEl = this.swiperContainer.nativeElement;
      Object.assign(swiperEl, {
        slidesPerView: 1,
        spaceBetween: 10,
        breakpoints: {
          320: { slidesPerView: 1, spaceBetween: 20 },
          1110: { slidesPerView: 1, spaceBetween: 20 },
          1300: { slidesPerView: 1, spaceBetween: 20 },
        },
      });
    }
  
    if (this.swiperContainer1) {
      const swiperE2 = this.swiperContainer1.nativeElement;
      Object.assign(swiperE2, {
        loop: true,
        slidesPerView: 1,
        spaceBetween: 20,
        autoplay: {
            enabled: false,
            delay: 2500,
            disableOnInteraction: false,
        },
        breakpoints: {
          320: {
            slidesPerView: 1,
            spaceBetween: 20,
        },
            500: {
                slidesPerView: 2,
                spaceBetween: 20,
            },
            768: {
                slidesPerView: 2,
                spaceBetween: 20,
            },
            1024: {
                slidesPerView: 3,
                spaceBetween: 20,
            },
            1200: {
                slidesPerView: 3,
                spaceBetween: 20,
            },
            1400: {
                slidesPerView: 4,
                spaceBetween: 20,
            },
            1600: {
                slidesPerView: 5,
                spaceBetween: 20,
            },
            1800: {
                slidesPerView: 5,
                spaceBetween: 20,
            },
        },
      })
    }
  }
  // active = 1;

// public data:any
// public posts:any
active = 1;

public data:any
public posts:any
  constructor(private shopService: ShopServiceService, private productService: ProductdetailsService, private route: ActivatedRoute,public gallery: Gallery, public lightbox: Lightbox) { }

  ngOnInit(): void {
    if(this.route.snapshot.params['id']){
      this.productService.emitProductId(location.pathname);
    }
    if (this.route.snapshot.params['id'] == undefined){
      this.data =[ {
        id: '2',
        photo: './assets/images/products/item1.png',
        name: 'Trending Half Hands Tshirt (Best Fabric Premium made T-shirt for Casual wear.)',
        offer_price: 299 ,
        price: 599,
      }]
    }
    else{
      this.data = this.shopService.getData().filter(post => post.id == this.route.snapshot.params['id']);
    }

    // console.log(this.data)
   // Creat gallery items
   this.items = this.imageData.map(
    (item) => new ImageItem({ src: item.srcUrl, thumb: item.previewUrl })
  );

  /** Lightbox Example */

  // Get a lightbox gallery ref
  const lightboxRef = this.gallery.ref('lightbox');

  // Add custom gallery config to the lightbox (optional)
  lightboxRef.setConfig({
    imageSize: ImageSize.Cover,
    thumbPosition: ThumbnailsPosition.Top,
  });

  // Load items into the lightbox gallery ref
  lightboxRef.load(this.items);
  }
  productSpecs = [
    { label: 'Brand', value: 'TechPro' },
    { label: 'Model Name', value: 'X15 Elite - 2024 Edition' },
    { label: 'Display', value: '15.6" 4K UHD Touchscreen' },
    { label: 'Processor', value: 'Intel Core i7' },
    { label: 'Operating System', value: 'Windows 10 Home' }
  ];
  similarProducts = [
    {
      name: "Ladies' Slim Bag",
      imageUrl: './assets/images/ecommerce/png/29.png',
      rating: 4.3,
      reviews: '16K',
      price: '$1,099',
      oldPrice: '$1,759'
    },
    {
      name: 'Wireless Headphones',
      imageUrl: './assets/images/ecommerce/png/30.png',
      rating: 4.3,
      reviews: '5K',
      price: '$799',
      oldPrice: '$1,299'
    },
    {
      name: 'Wireless Earbuds',
      imageUrl: './assets/images/ecommerce/png/31.png',
      rating: 4.3,
      reviews: '2K',
      price: '$1,499',
      oldPrice: '$2,599'
    },
    {
      name: 'Voluptatem Alarm Clock',
      imageUrl: './assets/images/ecommerce/png/32.png',
      rating: 4.3,
      reviews: '12K',
      price: '$2,299',
      oldPrice: '$3,299'
    },
    {
      name: 'Light weight Sneakers',
      imageUrl: './assets/images/ecommerce/png/28.png',
      rating: 4.3,
      reviews: '12K',
      price: '$899',
      oldPrice: '$1,299'
    }
  ];
}
