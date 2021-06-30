import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  { path: "", loadChildren: () => import('./modules/main/main.module').then(m => m.MainModule), data: { animation: 'MainPage' } },
  { path: "login", loadChildren: () => import('./modules/login/login.module').then(m => m.LoginModule), data: { animation: 'LoginPage' } },
  { path: "register", loadChildren: () => import('./modules/register/register.module').then(m => m.RegisterModule), data: { animation: 'RegisterPage' } },
  { path: "**", redirectTo: '/', pathMatch: 'full' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
