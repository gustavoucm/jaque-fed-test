import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DashboardComponent } from './components/layout/dashboard/dashboard.component';
import { UsersComponent } from './components/pages/users/users.component';


const routes: Routes = [
  {
    path: '',
    component: DashboardComponent,
    children: [
      {
        path: 'users',
        component: UsersComponent
      },
      {
        path: '', redirectTo: '/users', pathMatch: 'full'
      }
    ]
  },
  {
    path: '*', redirectTo: '/users', pathMatch: 'full'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
