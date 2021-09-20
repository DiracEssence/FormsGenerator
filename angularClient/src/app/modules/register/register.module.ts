import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RegisterComponent } from './register.component';
import { RegisterRoutingModule } from './register-routing.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { AccountService } from "../../services/account.service";
import { LoadingSpinnerModule } from "../../components/loading-spinner/loading-spinner.module";

@NgModule({
  declarations: [
    RegisterComponent
  ],
  imports: [
    CommonModule,
    RegisterRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    LoadingSpinnerModule
  ],
  providers: [
    AccountService
  ]
})
export class RegisterModule { }
