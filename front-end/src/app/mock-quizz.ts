import {QuizzResponse} from './quizz-response';
import {QuizzQuestion} from './quizz-question'
import {Quizz} from './quizz'


export class MockQuizz {
      
    
    getMockNewQuestion() {
        let resp1 = new QuizzResponse('R4', 'false');
        let resp2 = new QuizzResponse('R5', 'false');
        let resp3 = new QuizzResponse('R6', 'false');
        let resp4 = new QuizzResponse('R7', 'true');
        let responses = [resp1, resp2, resp3, resp4];
        let newQuestion = new QuizzQuestion('Quelle est la couleur du cheval blanc d henry IV?', responses);

        return newQuestion;
    }
    
    getNewQuestion() {
        let resp1 = new QuizzResponse('', 'false');
        let resp2 = new QuizzResponse('', 'false');
        let resp3 = new QuizzResponse('', 'false');
        let resp4 = new QuizzResponse('', 'false');
        
        let responses = [resp1, resp2, resp3, resp4];
        let newQuestion = new QuizzQuestion('', responses);

        return newQuestion;
    }

    getMockQuizz() {

        let quizz = new Quizz(0, '', '',[]);

        return quizz;
    }
  
}


