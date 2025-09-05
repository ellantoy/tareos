import { CUSTOM_ELEMENTS_SCHEMA, Component, ElementRef, ViewChild } from '@angular/core';
import { SharedModule } from '../../../../shared/sharedmodule';
import { NgbTooltipModule } from '@ng-bootstrap/ng-bootstrap';

import { FormsModule } from '@angular/forms';

import Swiper from 'swiper'
import { register } from 'swiper/element';
import { Autoplay, Pagination, Navigation } from 'swiper/modules';
Swiper.use([Autoplay, Navigation, Pagination]);
register();
@Component({
  selector: 'app-job-details',
  standalone: true,
  imports: [SharedModule,NgbTooltipModule,FormsModule],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
  templateUrl: './job-details.component.html',
  styleUrl: './job-details.component.scss'
})
export class JobDetailsComponent {
  thumbsSwiper: any;
  setThumbsSwiper(swiper: any) {
    this.thumbsSwiper = swiper;
  }
  ngAfterViewInit(): void {
		const swiperEl = this.swiperContainer.nativeElement;
	
		Object.assign(swiperEl, {
      slidesPerView: 2,
      spaceBetween: 5,
      mousewheel: true,
      loop: true,
      direction: "vertical",
      autoplay: {
          delay: 2500,
          disableOnInteraction: false
      },
      breakpoints: {
          350: {
              slidesPerView: 3,
              spaceBetween: 8,
          },
      },
	  });
  }
  @ViewChild('swiperContainer') swiperContainer!: ElementRef;
      
  jobs = [
    {
      title: 'Frontend Developer',
      company: 'InnovateZ Solutions',
      location: 'San Francisco, CA',
      experience: '2+ Yrs Exp.',
      experienceClass:" bg-info-transparent",
      salaryRange: '$50k - $80k',
      imageUrl: './assets/images/media/jobs/2.png',
      locationClass:'bg-info-transparent',
    },
    {
      title: 'Backend Developer',
      company: 'Tech Solutions Inc.',
      location: 'New York, NY',
      experience: '3+ Yrs Exp.',
      salaryRange: '$60k - $90k',
      experienceClass:" bg-info-transparent",
      locationClass:'bg-info-transparent',
      icon:true,
      iconbg:"danger"

    },
    {
      title: 'UI/UX Designer',
      company: 'Creative Designs Co.',
      location: 'Seattle, WA',
      experience: '3+ Yrs Exp.',
      salaryRange: '$70k - $100k',
      experienceClass:" bg-info-transparent",
      locationClass:'bg-info-transparent',
      icon:true,
      iconbg:"warning"
    },
    {
      title: 'Full Stack Developer',
      company: 'TechGurus Ltd.',
      location: 'Los Angeles, CA',
      experience: '5+ Yrs Exp.',
      salaryRange: '$80k - $120k',
      experienceClass:" bg-info-transparent",
      locationClass:'bg-info-transparent',
      icon:true,
      iconbg:"info"

    }
  ];
  // jobs=[
  //   {
  //     src:"./assets/images/media/jobs/2.png",
  //     role:"Frontend Developer",
  //     company:" InnovateZ Solutions",
  //     location:"San Francisco, CA",
  //     exp:"2",
  //     salary:"$50k - $80k"
  //   },
  //   {
  //     src:"./assets/images/media/jobs/2.png",
  //     role:"Backend Developer",
  //     company:"Tech Solutions Inc.",
  //     location:"New York, NY",
  //     exp:"3",
  //     salary:"$60k - $90k"
  //   },
  //   {
  //     src:"./assets/images/media/jobs/2.png",
  //     role:"Backend Developer",
  //     company:"Tech Solutions Inc.",
  //     location:"New York, NY",
  //     exp:"3",
  //     salary:"$60k - $90k"
  //   },
  // ]
}
