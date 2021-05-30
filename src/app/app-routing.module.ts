import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';


const routes: Routes = [
  { path: "", loadChildren: () => import('./modules/main/main.module').then(m => m.MainModule) },
  { path: "login", loadChildren: () => import('./modules/login/login.module').then(m => m.LoginModule) },
  { path: "register", loadChildren: () => import('./modules/register/register.module').then(m => m.RegisterModule) },
  { path: "**", redirectTo: '/', pathMatch: 'full' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
