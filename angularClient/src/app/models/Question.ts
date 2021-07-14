import { Choice } from "./Choice";

export class Question {
    public question: string | undefined;
    public questionType: number | undefined;
    public choices: Choice[] | undefined;

    constructor() { }
}