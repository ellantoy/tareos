import { Routes } from '@angular/router';

export const landing: Routes = [
  {
    path: '',
    loadChildren: () => import('../../components/pages/landing.route').then(r => r.landingRoutingModule)
  },
   
]