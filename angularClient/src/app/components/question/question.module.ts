import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { QuestionComponent } from "./question.component";
import { FormsModule } from "@angular/forms";

@NgModule({
  declarations: [
    QuestionComponent
  ],
  exports: [
    QuestionComponent
  ],
  imports: [
    CommonModule,
    FormsModule
  ]
})
export class QuestionModule { }
