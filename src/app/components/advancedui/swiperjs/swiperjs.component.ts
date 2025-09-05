import { CUSTOM_ELEMENTS_SCHEMA, Component,  ElementRef,  Renderer2, ViewChild, ViewEncapsulation} from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedModule } from '../../../shared/sharedmodule';
import Swiper from 'swiper';

@Component({
  selector: 'app-swiperjs',
  standalone: true,
  imports: [SharedModule,CommonModule],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
  templateUrl: './swiperjs.component.html',
  styleUrls: ['./swiperjs.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class SwiperjsComponent {
  swiper!: Swiper;
    // Initialize Swiper after the view has been initialized
     swiperH = new Swiper('.swiper-horizontal1', {
      spaceBetween: 50,
      pagination: {
        el: '.swiper-pagination',
        clickable: true,
      },
    });

     swiperV = new Swiper('.swiper-vertical1', {
      direction: 'vertical',
      spaceBetween: 50,
      pagination: {
        el: '.swiper-pagination',
        clickable: true,
      },
    });


  @ViewChild('swiperContainer') swiperContainer!: ElementRef;
  @ViewChild('swiperContainer1') swiperContainer1!: ElementRef;
  @ViewChild('swiperContainer2') swiperContainer2!: ElementRef;
  @ViewChild('swiperContainer3') swiperContainer3!: ElementRef;
  @ViewChild('swiperContainer4') swiperContainer4!: ElementRef;
  @ViewChild('swiperContainer5') swiperContainer5!: ElementRef;

	ngAfterViewInit(): void {
		const swiperEl = this.swiperContainer.nativeElement;
	
		Object.assign(swiperEl, {
      loop: true,
      loopFillGroupWithBlank: true,
		  slidesPerView: 30,
		  spaceBetween: 0,
		  breakpoints: {
			320: {
				slidesPerView: 1,
				spaceBetween: 20,
			  },
			1110: {
			  slidesPerView: 1,
			  spaceBetween: 20,
			},
			1300: {
			  slidesPerView: 1,
			  spaceBetween: 20,
			},

		  },
	  });
    
    const swiperE2 = this.swiperContainer1.nativeElement;
		Object.assign(swiperE2, {
		  loop: true,
      slidesPerView: 1,
		  spaceBetween: 10,
      pagination: {
        clickable: true,
      },
		  breakpoints: {
			320: {
				slidesPerView: 1,
				spaceBetween: 20,
			  },
			1110: {
			  slidesPerView: 1,
			  spaceBetween: 20,
			},
			1300: {
			  slidesPerView: 1,
			  spaceBetween: 20,
			},

		  },
	  });

    const swiperE3 = this.swiperContainer2.nativeElement;
		Object.assign(swiperE3, {
      loop: true,
		  slidesPerView: 1,
		  spaceBetween: 10,
      pagination: {
        el: '.swiper-pagination',
        clickable: true,
        renderBullet: function (index: number, className: string) {
          return '<span class="' + className + '">' + (index + 1) + "</span>";
        },
      },
		  breakpoints: {
			320: {
				slidesPerView: 1,
				spaceBetween: 20,
			  },
			1110: {
			  slidesPerView: 1,
			  spaceBetween: 20,
			},
			1300: {
			  slidesPerView: 1,
			  spaceBetween: 20,
			},

		  },
	  });
    swiperE3.initialize();
    const swiperE4 = this.swiperContainer3.nativeElement;
	
		Object.assign(swiperE4, {
		  loop: true,
      slidesPerView: 1,
		  spaceBetween: 10,
      direction:"vertical",
      mousewheel:true,
		  breakpoints: {
			320: {
				slidesPerView: 1,
				spaceBetween: 20,
			  },
        770:{
          slidesPerView: 1,
          spaceBetween: 20,
        },
			1020: {
			  slidesPerView: 1,
			  spaceBetween: 20,
			},
			1300: {
			  slidesPerView: 1,
			  spaceBetween: 20,
			},

		  },
	  });
    const swiperE5 = this.swiperContainer4.nativeElement;
	
		Object.assign(swiperE5, {
		  loop: true,
      slidesPerView: 1,
		  spaceBetween: 10,
      direction:"vertical",
      mousewheel:true,
		  breakpoints: {
			320: {
				slidesPerView: 1,
				spaceBetween: 20,
			  },
        770:{
          slidesPerView: 1,
          spaceBetween: 20,
        },
			1020: {
			  slidesPerView: 1,
			  spaceBetween: 20,
			},
			1300: {
			  slidesPerView: 1,
			  spaceBetween: 20,
			},

		  },
	  });
    const swiperE6 = this.swiperContainer4.nativeElement;
	
		Object.assign(swiperE6, {
		  loop: true,
      slidesPerView: 1,
		  spaceBetween: 10,
      direction:"vertical",
      mousewheel:true,
		  breakpoints: {
			320: {
				slidesPerView: 1,
				spaceBetween: 20,
			  },
        770:{
          slidesPerView: 1,
          spaceBetween: 20,
        },
			1020: {
			  slidesPerView: 1,
			  spaceBetween: 20,
			},
			1300: {
			  slidesPerView: 1,
			  spaceBetween: 20,
			},

		  },
	  });
	}

  imageData = [
    {
      src: "./assets/images/media/media-27.jpg",
    },
    {
      src: "./assets/images/media/media-26.jpg",
    },
    {
      src: "./assets/images/media/media-25.jpg",
    },
  ];
  imageData1 = [
    {
      src: './assets/images/media/media-29.jpg',
    },
    {
      src: './assets/images/media/media-28.jpg',
    },
    {
      src: './assets/images/media/media-30.jpg',
    },
  ];
  imageData2 = [
    {
      src: "./assets/images/media/media-32.jpg",
    },
    {
      src: "./assets/images/media/media-31.jpg",
    },
    {
      src: "./assets/images/media/media-33.jpg",
    },
  ];
  imageData3 = [
    {
      src: "./assets/images/media/media-21.jpg",
    },
    {
      src: "./assets/images/media/media-17.jpg",
    },
    {
      src: "./assets/images/media/media-16.jpg",
    },
  ];
  imageData4 = [
    {
      src: "./assets/images/media/media-12.jpg",
    },
    {
      src: "./assets/images/media/media-8.jpg",
    },
    {
      src: "./assets/images/media/media-5.jpg",
    },
    
  ];
  imageData5 = [
    {
      src: "./assets/images/media/media-16.jpg",
    },
    {
      src: "./assets/images/media/media-30.jpg",
    },
    {
      src: "./assets/images/media/media-31.jpg",
    },
   
  ];
  imageData6 = [
    {
      src: "./assets/images/media/media-25.jpg",
    },
    {
      src:"./assets/images/media/media-5.jpg",
    },
    {
      src:"./assets/images/media/media-33.jpg",
    },

  ];
  imageData7 = [
    {
      src: "./assets/images/media/media-30.jpg",
    },
    {
      src: "./assets/images/media/media-28.jpg" ,
    },
    {
      src: "./assets/images/media/media-29.jpg" ,
    },
   
  ];
  imageData8 = [
    {
      src: "./assets/images/media/media-8.jpg",
    },
    {
      src: "./assets/images/media/media-32.jpg",
    },
    {
      src: "./assets/images/media/media-7.jpg",
    },
   
  ];
  imageData9 = [
    {
      src:"./assets/images/media/media-28.jpg",
    },
    {
      src: "./assets/images/media/media-30.jpg",
    },
    {
      src: "./assets/images/media/media-32.jpg",
    },
  
  ];
  imageData10 = [
    {
      src: "./assets/images/media/media-31.jpg",
    },
    {
      src: "./assets/images/media/media-12.jpg",
    },
    {
      src: "./assets/images/media/media-8.jpg",
    },

  ];
  imageData11 = [
    {
      src: "./assets/images/media/media-28.jpg",
    },
    {
      src: "./assets/images/media/media-30.jpg",
    },
    {
      src: "./assets/images/media/media-32.jpg",
    },
  ];
  imageData12 = [
    {
      src: "./assets/images/media/media-62.jpg",
    },
    {
      src: "./assets/images/media/media-63.jpg",
    },
    {
      src: "./assets/images/media/media-64.jpg",
    },
  ];
  imageData13 = [
    {
      src: "./assets/images/media/media-18.jpg",
    },
    {
      src: "./assets/images/media/media-19.jpg",
    },
    {
      src: "./assets/images/media/media-20.jpg",
    },
  ];
  imageData14 = [
    {
      src: "./assets/images/media/media-20.jpg",
    },
    {
      src: "./assets/images/media/media-62.jpg",
    },
    {
      src: "./assets/images/media/media-63.jpg",
    },
  ];
  imageData15=[
    {
      src: "./assets/images/media/media-40.jpg",
    },
    {
      src: "./assets/images/media/media-41.jpg",
    },
    {
      src: "./assets/images/media/media-42.jpg",
    },
    {
      src: "./assets/images/media/media-43.jpg",
    },
    {
      src: "./assets/images/media/media-44.jpg",
    },
    {
      src: "./assets/images/media/media-59.jpg",
    },
    {
      src: "./assets/images/media/media-46.jpg",
    },
    {
      src: "./assets/images/media/media-61.jpg",
    },
  ]
}