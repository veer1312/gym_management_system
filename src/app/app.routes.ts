import { Routes } from '@angular/router';
import { MainLayout } from './layout/main-layout/main-layout';

export const routes: Routes = [

  // Main application
  {
    path: '',
    component: MainLayout,
    children: [

      {
        path: 'user',
        loadChildren: () =>
          import('./user/user.routes')
            .then(m => m.USER_ROUTES)
      },
      {
        path: 'payment',
        loadChildren: () =>
          import('./payment/payment.routes')
            .then(m => m.PAYMENT_ROUTES)
      },
    ]
  },

  {
    path: '**',
    redirectTo: 'user/dashboard'
  }
];
