import { Component } from '@angular/core';
import { SharedModule } from '../../../../shared/sharedmodule';
import { NgbCollapseModule,NgbDropdownModule,NgbTooltipModule } from '@ng-bootstrap/ng-bootstrap';
import { NgSelectModule } from '@ng-select/ng-select';
import { SpkNgSelectComponent } from '../../../../@spk/spk-ng-select/spk-ng-select.component';
import { SpkDropdownsComponent } from '../../../../@spk/reusable-ui-elements/spk-dropdowns/spk-dropdowns.component';
@Component({
  selector: 'app-search-company',
  standalone: true,
  imports: [SharedModule, NgbCollapseModule,NgbDropdownModule,NgbTooltipModule,NgSelectModule,SpkNgSelectComponent,SpkDropdownsComponent],
  templateUrl: './search-company.component.html',
  styleUrl: './search-company.component.scss'
})
export class SearchCompanyComponent {
  isCollapsed=true;
  isCollapsed1=true;
  Categories=[
    {label:"All Categories",value:1},
    {label:"Software Developer",value:2},
    {label:"Web Developer",value:3},
    {label:"Software Architect",value:4},
    {label:"IT Hardware",value:5},
    {label:"Network Engineer",value:6},
    {label:"Angular Developer",value:7},
    {label:"React Developer",value:8}
   ]
   companies = [
    { name: 'TechGurus Ltd.', logo: '1.png', location: 'Los Angeles, CA', establishment: '2015', ratings: 245, employees: 345, vacancies: 50 },
    { name: 'XYZ Solutions Ltd.', logo: '2.png', location: 'New York, NY', establishment: '2010', ratings: 318, employees: 146, vacancies: 40 },
    { name: 'Innovate Labs Inc.', logo: '3.png', location: 'San Francisco, CA', establishment: '2013', ratings: 198, employees: 56, vacancies: 35 },
    { name: 'GlobalTech Innovations', logo: '7.png', location: 'London, UK', establishment: '2011', ratings: 367, employees: 120, vacancies: 10 },
    { name: 'Innovision Software Solutions', logo: '5.png', location: 'Sydney, Aus', establishment: '2005', ratings: 276, employees: 120, vacancies: 10 },
    { name: 'Digital Nexus Solutions', logo: '6.png', location: 'Chicago, IL', establishment: '2012', ratings: 250, employees: 200, vacancies: 15 },
    { name: 'Innovate IT Solutions', logo: '10.png', location: 'Mumbai, India', establishment: '2009', ratings: 312, employees: 345, vacancies: 40 },
    { name: 'CloudSoft Technologies', logo: '9.png', location: ' Seattle, WA', establishment: '2012', ratings: 424, employees: 146, vacancies: 50 }
  ];
}
