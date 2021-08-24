import { Choice } from "./Choice";
import { QuestionTypesEnum } from "./questionTypes";

export class Question {
    public question: string = "";
    public questionType: number = QuestionTypesEnum.Text;
    public choices: Choice[] = [];
    public order: number = 0;

    constructor() { }
}