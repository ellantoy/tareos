

import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

export const admin: Routes = [
  {path:'pages',children:[
    {
      path: 'blog/blog',
      loadComponent: () =>
        import('./blog/blog/blog.component').then((m) => m.BlogComponent),
    },
    {
      path: 'blog/blogdetails',
      loadComponent: () =>
        import('./blog/blogdetails/blogdetails.component').then((m) => m.BlogdetailsComponent),
    },
    {
      path: 'blog/createblog',
      loadComponent: () =>
        import('./blog/createblog/createblog.component').then((m) => m.CreateblogComponent),
    },
    {
      path: 'chat',
      loadComponent: () =>
        import('./chat/chat.component').then((m) => m.ChatComponent),
    },
    {
      path: 'contacts',
      loadComponent: () =>
        import('./contacts/contacts.component').then((m) => m.ContactsComponent),
    },
    {
      path: 'contactus',
      loadComponent: () =>
        import('./contactus/contactus.component').then((m) => m.ContactusComponent),
    },
   
    {
      path: 'email/mailapp',
      loadComponent: () =>
        import('./email/mailapp/mailapp.component').then((m) => m.MailappComponent),
    },
    {
      path: 'email/mailsettings',
      loadComponent: () =>
        import('./email/mailsettings/mailsettings.component').then((m) => m.MailsettingsComponent),
    },
  
  
    {
      path: 'empty',
      loadComponent: () =>
        import('./empty/empty.component').then((m) => m.EmptyComponent),
    },
    {
      path: 'faqs',
      loadComponent: () =>
        import('./faqs/faqs.component').then((m) => m.FaqsComponent),
    },
    {
      path: 'filemanager',
      loadComponent: () =>
        import('./filemanager/filemanager.component').then((m) => m.FilemanagerComponent),
    },
    {
      path: 'profile-settings',
      loadComponent: () =>
        import('./profile-settings/profile-settings.component').then((m) => m.ProfileSettingsComponent),
    },
    {
      path: 'invoice/createinvoice',
      loadComponent: () =>
        import('./invoice/createinvoice/createinvoice.component').then((m) => m.CreateinvoiceComponent),
    },
    {
      path: 'invoice/invoicedetails',
      loadComponent: () =>
        import('./invoice/invoicedetails/invoicedetails.component').then((m) => m.InvoicedetailsComponent),
    },
    {
      path: 'invoice/invoicelist',
      loadComponent: () =>
        import('./invoice/invoicelist/invoicelist.component').then((m) => m.InvoicelistComponent),
    },
  
    // {
    //   path: 'landing',
    //   loadComponent: () =>
    //     import('./landing/landing.component').then((m) => m.LandingComponent),
    // },
    // {
    //   path: 'jobslanding',
    //   loadComponent: () =>
    //     import('./jobslanding/jobslanding.component').then((m) => m.JobslandingComponent),
    // },
 
    {
      path: 'pricing',
      loadComponent: () =>
        import('./pricing/pricing.component').then((m) => m.PricingComponent),
    },
    {
      path: 'profile',
      loadComponent: () =>
        import('./profile/profile.component').then((m) => m.ProfileComponent),
    },
    {
      path: 'reviews',
      loadComponent: () =>
        import('./reviews/reviews.component').then((m) => m.ReviewsComponent),
    },
    {
      path: 'team',
      loadComponent: () =>
        import('./team/team.component').then((m) => m.TeamComponent),
    },
    {
      path: 'terms-conditions',
      loadComponent: () =>
        import('./terms-conditions/terms-conditions.component').then((m) => m.TermsConditionsComponent),
    },
    {
      path: 'search',
      loadComponent: () =>
        import('./search/search.component').then((m) => m.SearchComponent),
    },
    {
      path: 'timeline',
      loadComponent: () =>
        import('./timeline/timeline.component').then((m) => m.TimelineComponent),
    },
    {
      path: 'to-do-list',
      loadComponent: () =>
      import('./to-do-list/to-do-list.component').then((m) => m.ToDoListComponent), 
    },

  ]}
];
@NgModule({
  imports: [RouterModule.forChild(admin)],
  exports: [RouterModule],
})
export class pagesRoutingModule {
  static routes = admin;
}