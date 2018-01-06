import {QuizzResponse} from './quizz-response';
import {QuizzQuestion} from './quizz-question'
import {Quizz} from './quizz'


export class MockQuizz {
        
      getMockQuizz(){
       
         let quizz = new Quizz(0,'La Guerre des loups','chat ');
         quizz.newQuestion.question = 'oh yeah';
          
         let resp1 = new QuizzResponse('R1','false');
         let resp2 = new QuizzResponse('R2','false');
         let resp3 = new QuizzResponse('R3','false');
         let resp4 = new QuizzResponse('R4','false');
         quizz.newQuestion.responses[0] = resp1;
         quizz.newQuestion.responses[1] = resp2;
         quizz.newQuestion.responses[2] = resp3;
         quizz.newQuestion.responses[3] = resp4;
          
         return  quizz;  
      }
  
}


