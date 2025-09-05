import { Component } from '@angular/core';
import { SharedModule } from '../../../shared/sharedmodule';
import { NgbNavModule, NgbTooltipModule } from '@ng-bootstrap/ng-bootstrap';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { SpkPricingReusableCardComponent } from '../../../@spk/reusable-pages/spk-pricing-reusable-card/spk-pricing-reusable-card.component';
@Component({
  selector: 'app-pricing',
  standalone: true,
  imports: [SharedModule,NgbNavModule,FormsModule,ReactiveFormsModule,CommonModule,SpkPricingReusableCardComponent,NgbTooltipModule],
  templateUrl: './pricing.component.html',
  styleUrl: './pricing.component.scss'
})
export class PricingComponent {
  isYearly: boolean = false;
  
    onToggle() {
    }
    pricings=[
     
      {
        title: 'Basic',
        price: "$9",
       arrowClass:"text-primary",
       buttonClass:"primary",
       bodyClass:"p-3",
       borderClass:"p-3",
       priceClass:"mb-3",
       pricingPlan:"Month",
        description: 'Discover the vital features that create an enchanting foundation for a magical beginning.',
        features: [
          { text: 'Up to 10 users', badge: 'New',badgeClass:'badge bg-info-transparent rounded-pill' },
          { text: 'Community access' },
          { text: 'Basic reporting',icon:'info' },
          { text: 'Email support' },
          { text: 'Community access' },
          { text: 'Access to essential features', badge: '12 Days',badgeClass:'text-muted fs-12 fw-medium' },
          { text: 'Mobile app access', badge: '45 Days',badgeClass:'text-muted fs-12 fw-medium' }
        ],
    popular:false
      },
      {
        title:"Premium",
        mainClass:"hover border border-primary border-2",
        borderClass:"p-3",
        footerClass:"border-top border-block-start-dashed",
        buttonClass:"primary",
        price:"$29",
        pricingPlan:"Month",
        textColor:" ",
        bodyClass:"p-3",
        priceClass:"mb-3 ",
        arrowClass:"op-8",
        description:"Unlock powerful tools tailored for seasoned users, designed to take your skills to the next level.",
        features:[
         { text: 'Unlimited users', badge: 'Unlimited',badgeClass:'badge bg-success rounded-pill' },
         { text: 'Advanced analytics' },
         { text: 'Customizable dashboards',icon:'white' },
         { text: 'Phone support' },
         { text: 'Dedicated account manager' },
         { text: 'SLA guarantees', badge: '30 Days',badgeClass:'op-5 fs-12 fw-medium' },
         { text: 'On-site training for teams', badge: '120 Days',badgeClass:'op-5 fs-12 fw-medium' }
     ],
     popular:true
       },
      {
        title: 'Standard',
        price: "$49",
        arrowClass:"text-primary",
        buttonClass:"primary",
        bodyClass:"p-3",
        pricingPlan:"Month",
        borderClass:" p-3",
        priceClass:"mb-3",
        description: 'Elevate to the highest standards with unparalleled excellence and exclusive top-tier support.',
        features: [
          { text: 'Up to 50 users', badge: 'New',badgeClass:'badge bg-info-transparent rounded-pill' },
          { text: 'Access to webinars' },
          { text: 'Advanced reporting',icon:'info' },
          { text: 'Priority email support' },
          { text: '24/7 chat support' },
          { text: 'All Standard features', badge: '52 Days',badgeClass:'text-muted fs-12 fw-medium' },
          { text: 'Team collaboration tools', badge: '60 Days',badgeClass:'text-muted fs-12 fw-medium' }
        ],
    popular:false
    
      },
    ]
    yearlyPricings=[
       {
         title: 'Basic',
         price: "$99",
        arrowClass:"text-primary",
        buttonClass:"primary",
        borderClass:" p-3",
        priceClass:"mb-3",
        bodyClass:"p-3",
        pricingPlan:"Annum",
         description: 'Discover the vital features that create an enchanting foundation for a magical beginning.',
         features: [
           { text: 'Up to 10 users', badge: 'New',badgeClass:'badge bg-info-transparent rounded-pill' },
           { text: 'Community access' },
           { text: 'Basic reporting',icon:'info' },
           { text: 'Email support' },
           { text: 'Community access' },
           { text: 'Access to essential features', badge: '12 Days',badgeClass:'text-muted fs-12 fw-medium' },
           { text: 'Mobile app access', badge: '45 Days',badgeClass:'text-muted fs-12 fw-medium' }
         ],
     popular:false
     
       },
       {
        title:"Premium",
        mainClass:"hover border border-primary border-2",
        borderClass:"p-3",
        footerClass:"border-top border-block-start-dashed",
        buttonClass:"primary",
        price:"$349",
        pricingPlan:"Annum",
        textColor:" ",
        bodyClass:"p-3",
        priceClass:"mb-3 ",
        arrowClass:"op-8",
        description:"Unlock powerful tools tailored for seasoned users, designed to take your skills to the next level.",
        features:[
         { text: 'Unlimited users', badge: 'Unlimited',badgeClass:'badge bg-success rounded-pill' },
         { text: 'Advanced analytics' },
         { text: 'Customizable dashboards',icon:'white' },
         { text: 'Phone support' },
         { text: 'Dedicated account manager' },
         { text: 'SLA guarantees', badge: '30 Days',badgeClass:'op-5 fs-12 fw-medium' },
         { text: 'On-site training for teams', badge: '120 Days',badgeClass:'op-5 fs-12 fw-medium' }
     ],
     popular:true
       },
       {
         title: 'Standard',
         price: "$549",
         arrowClass:"text-primary",
         buttonClass:"primary",
         borderClass:" p-3",
         priceClass:"mb-3",
         bodyClass:"p-3",
         pricingPlan:"Annum",
         description: 'Elevate to the highest standards with unparalleled excellence and exclusive top-tier support.',
         features: [
           { text: 'Up to 50 users', badge: 'New',badgeClass:'badge bg-info-transparent rounded-pill' },
           { text: 'Access to webinars' },
           { text: 'Advanced reporting',icon:'info' },
           { text: 'Priority email support' },
           { text: '24/7 chat support' },
           { text: 'All Standard features', badge: '52 Days',badgeClass:'text-muted fs-12 fw-medium' },
           { text: 'Team collaboration tools', badge: '60 Days',badgeClass:'text-muted fs-12 fw-medium' }
         ],
     popular:false
     
       },
    ]
}
