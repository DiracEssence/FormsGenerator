import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CreateFormComponent } from './createForm.component';
import { CreateFormRoutingModule } from './createForm-routing.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { AccountService } from 'src/app/services/account.service';
import { QuestionComponent } from "../../../../components/question/question.component";

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
    AccountService
  ]
})
export class CreateFormModule { }
