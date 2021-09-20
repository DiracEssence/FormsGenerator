import { Question } from "./Question";

export class Form {
    public name: string = '';
    public description: string = '';
    public createdAt: Date = new Date();
    public questions: Question[] = [];
}
