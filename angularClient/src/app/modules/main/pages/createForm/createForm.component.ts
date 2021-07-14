import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { Router, ActivatedRoute, ParamMap } from '@angular/router';
import { CreateUser } from 'src/app/models/createUser';
import { AccountService } from 'src/app/services/account.service';
import { ToastrService } from "ngx-toastr";
import { SessionService } from 'src/app/services/session.service';
import { Question } from "../../../../models/Question";

@Component({
  selector: 'app-createForm',
  templateUrl: './createForm.component.html',
  styleUrls: ['./createForm.component.scss']
})
export class CreateFormComponent implements OnInit {
  
  public questions: Question[] | undefined = [];

  constructor( )
  {

  }

  ngOnInit(): void {
    let questionTest1 = new Question();
    questionTest1.question = "Type your question";
    questionTest1.questionType = 1;
    questionTest1.choices = [];

    this.questions?.push(questionTest1);
  }

  addQuestion(): void {
    let newQuestion = new Question();
    newQuestion.question = "Type your question";
    newQuestion.questionType = 1;
    newQuestion.choices = [];

    this.questions?.push(newQuestion);

    console.log('Questions list:');
    console.log(this.questions);
  }

}
