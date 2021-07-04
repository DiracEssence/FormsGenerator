import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { IsAuthenticatedGuard } from "./guards/IsAuthenticated.guard";
import { NotAuthenticatedGuard } from "./guards/notAuthenticated.guard";

const routes: Routes = [
  { path: "", loadChildren: () => import('./modules/main/main.module').then(m => m.MainModule), data: { animation: 'MainPage' }, canActivate: [IsAuthenticatedGuard] },
  { path: "login", loadChildren: () => import('./modules/login/login.module').then(m => m.LoginModule), data: { animation: 'LoginPage' }, canActivate: [NotAuthenticatedGuard] },
  { path: "register", loadChildren: () => import('./modules/register/register.module').then(m => m.RegisterModule), data: { animation: 'RegisterPage' }, canActivate: [NotAuthenticatedGuard] },
  { path: "**", redirectTo: '/', pathMatch: 'full' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
