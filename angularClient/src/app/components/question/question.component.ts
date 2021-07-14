import { Component, Input, OnInit } from '@angular/core';
import { QuestionTypesEnum } from "../../models/questionTypes";
import { Question } from "../../models/Question";

@Component({
  selector: 'app-question',
  templateUrl: './question.component.html',
  styleUrls: ['./question.component.scss']
})
export class QuestionComponent implements OnInit {

  @Input()
  public question: Question | undefined;
  @Input()
  public questionIndex: number = 0;

  constructor() { }

  ngOnInit(): void {
    console.log(this.questionIndex);
  }

  changeQuestionType(event: any): void {
    const type: string = event.target.defaultValue;
    switch(type) {
      case "Text":
        if (this.question != undefined) {
          this.question.questionType = QuestionTypesEnum.Text;
        }
        break;
      case "TrueOrFalse":
        if (this.question != undefined) {
          this.question.questionType = QuestionTypesEnum.TrueOrFalse;
        }
        break;
      case "MultipleChoice":
        if (this.question != undefined) {
          this.question.questionType = QuestionTypesEnum.MultipleChoice;
        }
        break;
    }

    // remove old choices
    if (this.question != undefined) {
      this.question.choices = [];
    }
  }

  addChoice(): void {
    if (this.question != undefined) {
      this.question.choices?.push({ choice: 'Type your choice' });
    }
    console.log('Specific question:');
    console.log(this.question);
  }

}
