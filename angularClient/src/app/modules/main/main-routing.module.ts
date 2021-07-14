import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MainComponent } from './main.component';
import { LoginComponent } from '../login/login.component';

const routes: Routes = [
  { 
    path: '', component: MainComponent,
    children: [
      { path: '', loadChildren: () => import('./pages/dashboard/dashboard.module').then(m => m.DashboardModule) },
      { path: 'Create', loadChildren: () => import('./pages/createForm/createForm.module').then(m => m.CreateFormModule) },
      { path: 'YourForms', loadChildren: () => import('./pages/yourForms/yourForms.module').then(m => m.YourFormsModule) }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class MainRoutingModule { }
