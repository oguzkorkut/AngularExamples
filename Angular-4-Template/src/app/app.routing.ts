import {Routes} from '@angular/router';
import {AdminComponent} from './layout/admin/admin.component';

export const AppRoutes: Routes = [
  { path: '', redirectTo: 'lottery' , pathMatch: 'full' },
  {
    path: '',
    component: AdminComponent,
    children: [
      {
        path: '', 
        redirectTo: 'dashboard/default', 
        pathMatch: 'full'
      }, 
      {
        path: 'dashboard',
        loadChildren: './pages/dashboard/dashboard.module#DashboardModule'
      }
    ]
  },
  { path: '**', redirectTo: '/', pathMatch: 'full' }
];
