import { Component } from '@angular/core';
import { SharedModule } from '../../../shared/sharedmodule';
import { SpkReusableTablesComponent } from '../../../@spk/spk-reusable-tables/spk-reusable-tables.component';

@Component({
  selector: 'app-breakpoints',
  standalone: true,
  imports: [SharedModule,SpkReusableTablesComponent],
  templateUrl: './breakpoints.component.html',
  styleUrl: './breakpoints.component.scss'
})
export class BreakpointsComponent {
  containers = [
    {
      class: '.container',
      extraSmall: '100%',
      small: '540px',
      medium: '720px',
      large: '960px',
      xLarge: '1140px',
      xxLarge: '1320px'
    },
    {
      class: '.container-sm',
      extraSmall: '100%',
      small: '540px',
      medium: '720px',
      large: '960px',
      xLarge: '1140px',
      xxLarge: '1320px'
    },
    {
      class: '.container-md',
      extraSmall: '100%',
      small1: '100%',
      medium: '720px',
      large: '960px',
      xLarge: '1140px',
      xxLarge: '1320px'
    },
    {
      class: '.container-lg',
      extraSmall: '100%',
      small1: '100%',
      medium1: '100%',
      large: '960px',
      xLarge: '1140px',
      xxLarge: '1320px'
    },
    {
      class: '.container-xl',
      extraSmall: '100%',
      small1: '100%',
      medium1: '100%',
      large1: '100%',
      xLarge: '1140px',
      xxLarge: '1320px'
    },
    {
      class: '.container-xxl',
      extraSmall: '100%',
      small1: '100%',
      medium1: '100%',
      large1: '100%',
      xLarge1: '100%',
      xxLarge: '1320px'
    },
    {
      class: '.container-fluid',
      extraSmall: '100%',
      small1: '100%',
      medium1: '100%',
      large1: '100%',
      xLarge1: '100%',
      xxLarge1: '100%'
    }
  ];
  containerColumn=[
    {header:"Content",field:"Content"},
    {header:`Extra small 
            < 576px`,field:""},
    {header:"Small ≥576px",field:""},
    {header:"Medium ≥768px",field:""},
    {header:"Large ≥992px",field:""},
    {header:"X-Large ≥1200px",field:""},
    {header:"XX-Large ≥1400px",field:""}
  ]
  breakpoints = [
    {
      name: 'Extra small',
      infix1: 'None',
      dimensions: '576px'
    },
    {
      name: 'Small',
      infix: 'sm',
      dimensions: '≥576px'
    },
    {
      name: 'Medium',
      infix: 'md',
      dimensions: '≥768px'
    },
    {
      name: 'Large',
      infix: 'lg',
      dimensions: '≥992px'
    },
    {
      name: 'Extra large',
      infix: 'xl',
      dimensions: '≥1200px'
    },
    {
      name: 'Extra extra large',
      infix: 'xxl',
      dimensions: '≥1400px'
    }
  ];
  breakpointColumn=[
    {header:"Breakpoint",field:"Breakpoint"},
    {header:"class infix",field:"class infix"},
    {header:"Dimensions",field:"Dimensions"},


  ]
}
