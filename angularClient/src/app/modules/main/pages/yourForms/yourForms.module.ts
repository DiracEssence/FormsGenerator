import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { YourFormsComponent } from './yourForms.component';
import { YourFormsRoutingModule } from './yourForms-routing.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { AccountService } from 'src/app/services/account.service';
import { FormsService } from 'src/app/services/forms.service';

@NgModule({
  declarations: [
    YourFormsComponent
  ],
  imports: [
    CommonModule,
    YourFormsRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule
  ],
  providers: [
    AccountService,
    FormsService
  ]
})
export class YourFormsModule { }
