
import { Component } from '@angular/core';
import { NgbCollapseModule,NgbDropdownModule,NgbTooltipModule } from '@ng-bootstrap/ng-bootstrap';
import { FormsModule } from '@angular/forms';
import { SharedModule } from '../../../../shared/sharedmodule';
import { MaterialModuleModule } from '../../../../material-module/material-module.module';
import { SpkSearchJobsReusableCardComponent } from '../../../../@spk/reusable-apps/spk-search-jobs-reusable-card/spk-search-jobs-reusable-card.component';
import { SpkDropdownsComponent } from '../../../../@spk/reusable-ui-elements/spk-dropdowns/spk-dropdowns.component';
import * as noUiSlider from 'nouislider';
@Component({
  selector: 'app-search-jobs',
  standalone: true,
  imports: [SharedModule,NgbCollapseModule,NgbDropdownModule,NgbTooltipModule,SpkSearchJobsReusableCardComponent,SpkDropdownsComponent,
    FormsModule,MaterialModuleModule],
  templateUrl: './search-jobs.component.html',
  styleUrl: './search-jobs.component.scss'
})
export class SearchJobsComponent {
  isCollapsed=true;
  isCollapsed1=true;
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
  public someRange: number[] = [1800.00, 8000.00];
  jobListings=[
    {
      buttonClass:"d-inline-flex",
      ngbDropdown:true,
      icons:false,
      icon:false,
      buttonIcon:true,
      jobTitle: 'Frontend Developer',
      companyName: 'Tech Solutions Inc.',
      location: 'San Francisco',
      openings: 5,
      education: 'Graduate',
      experience: 'Min - 1 Year',
      jobType: 'Full-time',
      salaryRange: '$45,000 - $60,000',
      imgSrc: './assets/images/media/jobs/2.png',
      locationClass:"fs-11 border border-primary border-opacity-10 text-primary bg-primary-transparent" ,
      experienceClass:"fs-11 border border-secondary border-opacity-10 text-secondary bg-secondary-transparent bg-secondary-transparent"
    },
    {
      buttonClass:"d-inline-flex",
      ngbDropdown:true,
      icons:false,
      icon:false,
      buttonIcon:true,
      jobTitle: 'React Lead Developer',
      companyName: 'Infratech PVT LTD',
      location: 'San Francisco',
      openings: 5,
      education: 'Graduate',
      experience: 'Min - 1 Year',
      jobType: 'Full-time',
      salaryRange: '$18,000 - $43,000',
      locationClass:"fs-11 border border-primary border-opacity-10 text-primary bg-primary-transparent",
      imgSrc: './assets/images/media/jobs/1.png',
      experienceClass:"fs-11 border border-secondary border-opacity-10 text-secondary bg-secondary-transparent"
    },
    {
      buttonClass:"d-inline-flex",
      ngbDropdown:true,
      icons:false,
      icon:false,
      buttonIcon:true,
      jobTitle: 'Vuejs Developer',
      companyName: 'G Technical Solutions',
      location: 'San Francisco',
      openings: 5,
      education: 'Graduate',
      experience: 'Min - 1 Year',
      jobType: 'Full-time',
      salaryRange: '$18,000 - $43,000',
      imgSrc: './assets/images/media/jobs/3.png',
      experienceClass:"fs-11 border border-secondary border-opacity-10 text-secondary bg-secondary-transparent",
      locationClass:"fs-11 border border-primary border-opacity-10 text-primary bg-primary-transparent",
    },
    {
      buttonClass:"d-inline-flex",
      ngbDropdown:true,
      icons:false,
      icon:false,
      buttonIcon:true,
      jobTitle: 'Wordpress Developer',
      companyName: 'Hardware Private Solutions',
      location: 'San Francisco',
      openings: 5,
      education: 'Graduate',
      experience: 'Min - 1 Year',
      jobType: 'Full-time',
      salaryRange: '$18,000 - $43,000',
      experienceClass:"fs-11 border border-secondary border-opacity-10 text-secondary bg-secondary-transparent",
      imgSrc: './assets/images/media/jobs/4.png',
      locationClass:"fs-11 border border-primary border-opacity-10 text-primary bg-primary-transparent"
    },
    {
      buttonClass:"d-inline-flex",
      ngbDropdown:true,
      icons:false,
      icon:false,
      buttonIcon:true,
      jobTitle: 'HTML Developer - Fresher',
      companyName: 'InnovateZ Solutions',
      location: 'San Francisco',
      openings: 5,
      education: 'Graduate',
      experience: 'Min - 1 Year',
      jobType: 'Full-time',
      salaryRange: '$18,000 - $43,000',
      imgSrc: './assets/images/media/jobs/2.png',
      experienceClass:"fs-11 border border-secondary border-opacity-10 text-secondary bg-secondary-transparent",
      locationClass:"fs-11 border border-primary border-opacity-10 text-primary bg-primary-transparent",
    },
   {
    buttonClass:"d-inline-flex",
    ngbDropdown:true,
    icons:false,
    icon:false,
    buttonIcon:true,
      jobTitle: 'React Lead Developer',
      companyName: 'Infratech PVT LTD',
      location: 'San Francisco',
      openings: 5,
      education: 'Graduate',
      experience: 'Min - 1 Year',
      jobType: 'Full-time',
      salaryRange: '$18,000 - $43,000',
      imgSrc: './assets/images/media/jobs/1.png',
      experienceClass:"fs-11 border border-secondary border-opacity-10 text-secondary bg-secondary-transparent",
      locationClass:"fs-11 border border-primary border-opacity-10 text-primary bg-primary-transparent"
    },
    {
      buttonClass:"d-inline-flex",
      ngbDropdown:true,
      icons:false,
      icon:false,
      buttonIcon:true,
      jobTitle: 'Vuejs Developer',
      companyName: 'G Technical Solutions',
      location: 'San Francisco',
      openings: 5,
      education: 'Graduate',
      experience: 'Min - 1 Year',
      jobType: 'Full-time',
      salaryRange: '$18,000 - $43,000',
      experienceClass:"fs-11 border border-secondary border-opacity-10 text-secondary bg-secondary-transparent",
      imgSrc: './assets/images/media/jobs/3.png',
      locationClass:"fs-11 border border-primary border-opacity-10 text-primary bg-primary-transparent"
    },
    {
      buttonClass:"d-inline-flex",
      ngbDropdown:true,
      icons:false,
      icon:false,
      buttonIcon:true,
      jobTitle: 'HTML Developer',
      companyName: 'InnovateZ Solutions',
      location: 'San Francisco',
      openings: 5,
      education: 'Graduate',
      experience: 'Min - 1 Year',
      jobType: 'Full-time',
      salaryRange: '$18,000 - $43,000',
      imgSrc: './assets/images/media/jobs/2.png',
      locationClass:"fs-11 border border-primary border-opacity-10 text-primary bg-primary-transparent",
      experienceClass:"fs-11 border border-secondary border-opacity-10 text-secondary bg-secondary-transparent"
    },
    {
      buttonClass:"d-inline-flex",
      ngbDropdown:true,
      icons:false,
      icon:false,
      buttonIcon:true,
      jobTitle: 'React Lead Developer',
      companyName: 'Infratech PVT LTD',
      location: 'San Francisco',
      openings: 5,
      education: 'Graduate',
      experience: 'Min - 1 Year',
      jobType: 'Full-time',
      salaryRange: '$18,000 - $43,000',
      imgSrc: './assets/images/media/jobs/1.png',
      locationClass:"fs-11 border border-primary border-opacity-10 text-primary bg-primary-transparent",
      experienceClass:"fs-11 border border-secondary border-opacity-10 text-secondary bg-secondary-transparent"
    },

  ]
}
