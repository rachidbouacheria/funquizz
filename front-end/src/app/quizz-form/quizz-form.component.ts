import { Component, OnInit } from '@angular/core';

import {QuizzResponse} from '../quizz-response';
import {QuizzQuestion} from '../quizz-question'
import {Quizz} from '../quizz';
import { QuizzService } from '../quizz.service';


@Component({
  selector: 'app-quizz-form',
  templateUrl: './quizz-form.component.html',
  styleUrls: ['./quizz-form.component.css']
})
export class QuizzFormComponent implements OnInit {

    submitted   = false;
    newQuestion = null;
    model       = null;
    httpModel = null;

    correctValues: string[] = ['false','true']

    constructor(private quizzService: QuizzService) {
        
    }

    onSubmit() { this.submitted = true; }

    addQuestion(questionForm) {
        
        let c1 = this.newQuestion.responses[0].correct;
        let c2 = this.newQuestion.responses[1].correct;
        let c3 = this.newQuestion.responses[2].correct;
        let c4 = this.newQuestion.responses[3].correct;
 
          
        if(c1==c2 && c3==c4 && c1==c3){
            if (c1 == 'false'){
               alert ('At least one response must be correct'); 
            }else{
                 alert ('responses cannot all be correct'); 
            }
            return;
        }
        let numberOfCorrect = 0;
        if(c1=='true') numberOfCorrect ++
        
        if(c2=='true') numberOfCorrect ++
        if(c3=='true') numberOfCorrect ++
        if(c4=='true') numberOfCorrect ++
        
        if(numberOfCorrect>1){
             alert('You can only have one correct response. You have: 333' + numberOfCorrect);
            return;
        }
                
        this.model.addQuestion(this.newQuestion);
//         var myJSON = JSON.stringify(this.model);
//        console.log("============================");
//        console.log(myJSON);
//        console.log("============================");
        
        this.submitted   = false;
        questionForm.reset();
        this.resetNewQuestion();
        
        this.quizzService.getHeroes().subscribe(newQuizz => {
            this.model = newQuizz;
            console.log("======== http model =========");
            console.log(newQuizz);
        });
        
       
    }
    
    removeQuestion(questionIndex){
        this.model.removeQuestion(questionIndex);
    }
    
    resetNewQuestion(){
        this.newQuestion = this.quizzService.getNewQuestion();
    }
    
    ngOnInit() {
        this.quizzService.getMockNewQuestion1().subscribe(newQuestion => this.newQuestion = newQuestion);
        this.model        = this.quizzService.getMockQuizz();
    }

}
