import { Component, Input, OnInit, Output, EventEmitter } from '@angular/core';
import { QuestionTypesEnum } from "../../models/questionTypes";
import { Question } from "../../models/Question";

@Component({
  selector: 'app-question',
  templateUrl: './question.component.html',
  styleUrls: ['./question.component.scss']
})
export class QuestionComponent implements OnInit {

  @Input()
  public question: Question = new Question();
  @Input()
  public questionIndex: number = 0;

  @Output() removeQuestion: EventEmitter<number> = new EventEmitter<number>();

  constructor() { }

  ngOnInit(): void {
    this.question!.order = this.questionIndex + 1;
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
      this.question.choices?.push({ choice: '' });
    }
  }

  sendRemoveQuestion(questionIdx: number): void {
    this.removeQuestion.emit(questionIdx);
  }

  removeChoice(choiceIdx: number): void {
    this.question!.choices!.splice(choiceIdx, 1);
  }

  pressEnterInChoice(choiceIdx: number): void {
    if (choiceIdx == (this.question!.choices!.length - 1)) {

      this.addChoice();
      window.setTimeout(() => {
        let lastChoice: HTMLElement | null = document.getElementById(`text-choice-${this.question!.choices!.length - 1}-question-${this.questionIndex}`);
        lastChoice?.focus();
      }, 100);

    } else {

      let nextChoice: HTMLElement | null = document.getElementById(`text-choice-${choiceIdx + 1}-question-${this.questionIndex}`);
      nextChoice?.focus();

    }
  }

}
