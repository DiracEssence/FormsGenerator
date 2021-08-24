import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { Router, ActivatedRoute, ParamMap } from '@angular/router';
import { CreateUser } from 'src/app/models/createUser';
import { AccountService } from 'src/app/services/account.service';
import { Toast, ToastrService } from "ngx-toastr";
import { SessionService } from 'src/app/services/session.service';
import { Question } from "../../../../models/Question";
import { QuestionTypesEnum } from 'src/app/models/questionTypes';
import { Choice } from 'src/app/models/Choice';

@Component({
  selector: 'app-createForm',
  templateUrl: './createForm.component.html',
  styleUrls: ['./createForm.component.scss']
})
export class CreateFormComponent implements OnInit {
  
  public questions: Question[] = [];
  public formName: string = "";
  public formDescription: string = "";

  public disableSaveBtn: boolean = false;
  public disableClearBtn: boolean = false;

  constructor(private toastrService: ToastrService)
  {

  }

  ngOnInit(): void {
    let questionTest1 = new Question();
    questionTest1.question = "";
    questionTest1.questionType = 1;
    questionTest1.choices = [];

    this.questions?.push(questionTest1);
  }

  addQuestion(): void {
    let newQuestion = new Question();
    newQuestion.question = "";
    newQuestion.questionType = 1;
    newQuestion.choices = [];

    this.questions?.push(newQuestion);
  }

  removeQuestion(questionIdx: number) {
    this.questions!.splice(questionIdx, 1);

    // update order of every question
    for (let i = 0; i < this.questions!.length; i++) {
      this.questions![i].order = (i + 1);
    }
  }

  cleanAllQuestions() {
    this.questions = [
      { question: '', questionType: QuestionTypesEnum.Text, choices: [], order: 1 }
    ];
  }

  saveQuestions() {
    if (this.formName == "") {
      this.toastrService.warning("Must provide the form name");
      return;
    }
    if (this.formDescription == "") {
      this.toastrService.warning("Must provide the form description");
      return;
    }
    
    // Verify all questions
    for (let i = 0; i < this.questions.length; i++) {
      const currentQuestion: Question = this.questions[i];
      if (currentQuestion.question == "") {
        this.toastrService.warning("All the questions must have a question title");
        return;
      }

      if (currentQuestion.questionType == QuestionTypesEnum.MultipleChoice) {

        if (currentQuestion.choices?.length >= 2) {
  
          for (let j = 0; j < currentQuestion.choices.length; j++) {
            const currentChoice: Choice = currentQuestion.choices[j];
            if (currentChoice.choice == "") {
              this.toastrService.warning("All the choice of multiple choice questions must have a text");
              return;
            }
          }
  
        } else {
          this.toastrService.warning("All the questions of multiple choice must have 2 choices at least");
        }

      }
    }

    // all fine
    console.log(this.questions);
  }

}
