import { CUSTOM_ELEMENTS_SCHEMA, Component, ElementRef, ViewChild } from '@angular/core';
import { SharedModule } from '../../../../shared/sharedmodule';
import { NgbTooltipModule } from '@ng-bootstrap/ng-bootstrap';
import { FormsModule } from '@angular/forms';
import Swiper from 'swiper'
import { register } from 'swiper/element';
import { Autoplay, Pagination, Navigation } from 'swiper/modules';
import { SpkReusableTablesComponent } from '../../../../@spk/spk-reusable-tables/spk-reusable-tables.component';
Swiper.use([Autoplay, Navigation, Pagination]);
register();

@Component({
  selector: 'app-candidate-details',
  standalone: true,
  imports: [SharedModule,NgbTooltipModule,FormsModule,SpkReusableTablesComponent],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
  templateUrl: './candidate-details.component.html',
  styleUrl: './candidate-details.component.scss'
})
export class CandidateDetailsComponent {
  thumbsSwiper: any;
  setThumbsSwiper(swiper: any) {
    this.thumbsSwiper = swiper;
  }

  breakpoints= {
    0: {
      slidesPerView: 1,
      spaceBetween: 20,
      },
  400: {
    slidesPerView: 3,
    spaceBetween: 30,
    },
  1110: {
    slidesPerView: 3,
    spaceBetween: 30,
  },
  1300: {
    slidesPerView: 3,
    spaceBetween: 20,
  },

  }


  profileDetails = [
    { label: 'Full Name', value: 'Iliana Lilly' },
    { label: 'Email', value: 'brendra@gmail.com' },
    { label: 'D.O.B', value: '13 Jan 2008' },
    { label: 'Gender', value: 'Female' },
    { label: 'Age', value: '35' },
    { label: 'Mobile', value: '+91 7865343874' },
    { label: 'Marital Status', value: 'Unmarried' },
    { label: 'Address', value: 'Akshya Nagar 1st Block 1st Cross, Rammurthy nagar, Bangalore-560016' }
  ];
  @ViewChild('swiperContainer') swiperContainer!: ElementRef;
	ngAfterViewInit(): void {
    if (this.swiperContainer) {
		const swiperEl = this.swiperContainer.nativeElement;
	
		Object.assign(swiperEl, {
		  slidesPerView: 1,
		  spaceBetween: 10,
      direction:"vertical",
      mousewheel:true,
		  breakpoints: {
			0: {
				slidesPerView: 1,
				spaceBetween: 10,
			  },
			400: {
			  slidesPerView: 3,
			  spaceBetween: 10,
			},
			1300: {
			  slidesPerView: 3,
			  spaceBetween: 10,
			},
      1400: {
			  slidesPerView: 2,
			  spaceBetween: 10,
			},
      1440: {
			  slidesPerView: 3,
			  spaceBetween: 10,
			},
		  },
	  });
  }
  }
  candidates=[
    {
      src:"./assets/images/faces/1.jpg",
      name:"Samantha",
      role:"UX Designer",
      location:"Canada",
      ratings:'24',
      salary:"$55k",
      language:"Spanish",
      salary1:"$80k",
      degree:"Master's Degree"
    },
    {
      src:"./assets/images/faces/11.jpg",
      name:"Michael",
      role:"UI Developer",
      location:" New York",
      ratings:'189',
      salary:"$65k",
      language:"French",
      salary1:"$90k",
      degree:"Master's Degree"
    },
    {
      src:"./assets/images/faces/3.jpg",
      name:"Emily",
      role:"React",
      location:"London,UK",
      ratings:'20',
      salary:"$50k",
      language:"German",
      salary1:"$70k",
      degree:"Master's Degree"
    },
    {
      src:"./assets/images/faces/15.jpg",
      name:"Joseph",
      role:"Ui Developer",
      location:"New York",
      ratings:'35',
      salary:"$65k",
      language:"French",
      salary1:"$90k",
      degree:"Master's Degree"
    }
  ]
}
