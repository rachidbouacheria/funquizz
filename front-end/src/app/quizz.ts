import {QuizzResponse} from './quizz-response';
import {QuizzQuestion} from './quizz-question'

export class Quizz {

    constructor(
        public id: number,
        public name: string,
        public description: string,
        public  questions : QuizzQuestion[]) {         
   
     }

//     addQuestion(aNewQuestion: QuizzQuestion){
//          let addedNewQuestion  = JSON.parse(JSON.stringify(aNewQuestion ));
//          this.questions.push(addedNewQuestion);
//     }
    
    removeQuestion(questionIndex){
       this.questions.splice(questionIndex, 1);
    }
  
}
