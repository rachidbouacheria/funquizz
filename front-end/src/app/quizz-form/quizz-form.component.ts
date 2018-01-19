import { Component, OnInit } from '@angular/core';
import {Router, ActivatedRoute} from "@angular/router";


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

    isUpdate    = false;
    submitted   = false;
    newQuestion = null;
    model       = null;
    httpModel   = null;
    errorMsg    = null;

    correctValues: string[] = ['false','true']

    constructor(private router: Router, 
                private route: ActivatedRoute,
                private quizzService: QuizzService) {
    }

    onSubmit() { this.submitted = true; }

    addQuizz () {
     
     if(this.isUpdate){
         this.quizzService.updateQuizz(this.model).subscribe(savedQuizz => {
            this.router.navigate(['/dashboard']);
         });
     }else{
         this.quizzService.addQuizz(this.model).subscribe(savedQuizz => {
            this.router.navigate(['/dashboard']);
         });
     }
    }
    addQuestion(questionForm) {
        
        this.errorMsg = this.quizzService.validateQuizzQuestion(this.newQuestion);
        if(this.errorMsg !=null){
            return;
        }
        
        this.quizzService.addQuestion(this.model, this.newQuestion);
        this.submitted   = false;
        questionForm.reset();
        this.resetNewQuestion();
    }
    
    removeQuestion(questionIndex){
        this.quizzService.removeQuestion(this.model,questionIndex);
    }
    
    resetNewQuestion(){
        this.newQuestion = this.quizzService.getNewQuestion();
    }
    
    ngOnInit() {
       this.newQuestion =   this.quizzService.getNewQuestion();
       this.route.params.subscribe( params => {
            var myQuizzId = params['id'];
            if(myQuizzId){
                this.isUpdate = true;
                this.quizzService.selectQuizz(myQuizzId).subscribe(res => { 
                 this.model =res;
                });
            }else{
              this.isUpdate = false;
              this.model = this.quizzService.getEmptyQuizz();
            }
       });
    }

}
