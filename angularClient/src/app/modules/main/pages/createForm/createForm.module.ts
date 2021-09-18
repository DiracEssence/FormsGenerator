import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CreateFormComponent } from './createForm.component';
import { CreateFormRoutingModule } from './createForm-routing.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { AccountService } from 'src/app/services/account.service';
import { QuestionComponent } from "../../../../components/question/question.component";
import { FormsService } from 'src/app/services/forms.service';

@NgModule({
  declarations: [
    CreateFormComponent,
    QuestionComponent
  ],
  imports: [
    CommonModule,
    CreateFormRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule
  ],
  providers: [
    AccountService,
    FormsService
  ]
})
export class CreateFormModule { }
