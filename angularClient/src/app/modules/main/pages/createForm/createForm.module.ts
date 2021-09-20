import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CreateFormComponent } from './createForm.component';
import { CreateFormRoutingModule } from './createForm-routing.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { AccountService } from 'src/app/services/account.service';
import { FormsService } from 'src/app/services/forms.service';
import { QuestionModule } from "../../../../components/question/question.module";
import { LoadingSpinnerModule } from "../../../../components/loading-spinner/loading-spinner.module";

@NgModule({
  declarations: [
    CreateFormComponent
  ],
  imports: [
    CommonModule,
    CreateFormRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    QuestionModule,
    LoadingSpinnerModule
  ],
  providers: [
    AccountService,
    FormsService
  ]
})
export class CreateFormModule { }
