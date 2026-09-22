import { Routes } from '@angular/router';
import { Dashboard } from './dashboard/dashboard';
import { UserProfile } from './user-profile/user-profile';


export const USER_ROUTES: Routes = [
  {
    path: '',
    component: Dashboard
  },
  {
    path: 'dashboard',
    component: Dashboard
  },
  {
    path: 'profile',
    component: UserProfile
  }
];
