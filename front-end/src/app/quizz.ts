import {QuizzResponse} from './quizz-response';
import {QuizzQuestion} from './quizz-question'

export class Quizz {

    newQuestion: QuizzQuestion;
    questions : QuizzQuestion[];

    constructor(
        public id: number,
        public name: string,
        public description: string
      ) {         
            this.newQuestion = new QuizzQuestion('');
            this.questions = [];    
      }

      addQuestion(){
  
      let addedNewQuestion= Object.assign({}, this.newQuestion);
      this.questions.push(addedNewQuestion);
          
         let resp1 = new QuizzResponse('R5','false');
         let resp2 = new QuizzResponse('R5','false');
         let resp3 = new QuizzResponse('R6','false');
         let resp4 = new QuizzResponse('R7','false');
          
         let aNewerQ = new QuizzQuestion('new year');
          
         
         aNewerQ.responses[0] = resp1;
         aNewerQ.responses[1] = resp2;
         aNewerQ.responses[2] = resp3;
         aNewerQ.responses[3] = resp4; 
          
        // this.newQuestion = Object.assign({} , aNewerQ);
          
//        this.newQuestion = new QuizzQuestion('Hello'); 
       this.newQuestion = aNewerQ; 
          
          alert('adding new question 55555 '+  this.newQuestion.question);
       
       
      }
  
}
