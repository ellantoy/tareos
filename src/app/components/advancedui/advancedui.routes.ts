     import { NgModule } from '@angular/core';
      import { RouterModule, Routes } from '@angular/router';
      
      export const admin: Routes = [
       {path:'advancedui',children:[ {
        path: 'accordions',
        loadComponent: () =>
          import('./accordions/accordions.component').then((m) => m.AccordionsComponent),
      },
      {
        path: 'draggable-cards',
        loadComponent: () =>
          import('./draggable-cards/draggable-cards.component').then(
            (m) => m.DraggableCardsComponent
          ),
      },
      {
        path: 'sortable-js',
        loadComponent: () =>
          import('./sortable-js/sortable-js.component').then((m) => m.SortableJsComponent),
        
      },
      {
        path: 'carousel',
        loadComponent: () =>
          import('./carousel/carousel.component').then(
            (m) => m.CarouselComponent
          ),
      },
      {
        path: 'modals-closes',
        loadComponent: () =>
          import('./modals-closes/modals-closes.component').then(
            (m) => m.ModalsClosesComponent
          ),
      },
      {
        path: 'media-player',
        loadComponent: () =>
          import('./media-player/media-player.component').then(
            (m) => m.MediaPlayerComponent
          ),
      },
      {
        path: 'navbar',
        loadComponent: () =>
          import('./navbar/navbar.component').then((m) => m.NavbarComponent),
      },
      {
        path: 'offcanvas',
        loadComponent: () =>
          import('./offcanvas/offcanvas.component').then((m) => m.OffcanvasComponent),
      },
      {
        path: 'placeholders',
        loadComponent: () =>
          import('./placeholders/placeholders.component').then((m) => m.PlaceholdersComponent),
      },
      {
        path: 'rating',
        loadComponent: () =>
          import('./rating/rating.component').then((m) => m.RatingComponent),
      },
      {
        path: 'scrollspy',
        loadComponent: () =>
          import('./scrollspy/scrollspy.component').then((m) => m.ScrollspyComponent),
      },
      {
        path: 'swiperjs',
        loadComponent: () =>
          import('./swiperjs/swiperjs.component').then((m) => m.SwiperjsComponent),
      },
      {
        path: 'tour',
        loadComponent: () =>
          import('./tour/tour.component').then((m) => m.TourComponent),
      },
      {
        path: 'ribbons',
        loadComponent: () =>
          import('./ribbons/ribbons.component').then((m) => m.RibbonsComponent),
      },
      ]}
      ];
      @NgModule({
        imports: [RouterModule.forChild(admin)],
        exports: [RouterModule],
      })
      export class advanceduiRoutingModule {
        static routes = admin;
      }