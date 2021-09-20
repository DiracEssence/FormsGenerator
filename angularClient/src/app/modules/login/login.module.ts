import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoginComponent } from './login.component';
import { LoginRoutingModule } from './login-routing.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { AccountService } from 'src/app/services/account.service';
import { LoadingSpinnerModule } from "../../components/loading-spinner/loading-spinner.module";

@NgModule({
  declarations: [
    LoginComponent
  ],
  imports: [
    CommonModule,
    LoginRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    LoadingSpinnerModule
  ],
  providers: [
    AccountService
  ]
})
export class LoginModule { }
