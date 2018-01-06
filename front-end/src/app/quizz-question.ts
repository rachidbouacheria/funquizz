import {QuizzResponse} from './quizz-response';


export class QuizzQuestion {
    responses: QuizzResponse[];
    constructor(public question: string) {  
        let response1 = new QuizzResponse('','false');
        let response2 = new QuizzResponse('','false');
        let response3 = new QuizzResponse('','false');
        let response4 = new QuizzResponse('','false');
        this.responses = [response1, response2, response3,response4];
    }
}
