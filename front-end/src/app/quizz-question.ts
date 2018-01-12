import {QuizzResponse} from './quizz-response';


export class QuizzQuestion {
    
    constructor(public question: string, public responses: QuizzResponse[]) {  
      
    }
}
