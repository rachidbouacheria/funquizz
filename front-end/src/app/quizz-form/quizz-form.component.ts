import { Component, OnInit } from '@angular/core';

import {Quizz} from '../quizz';
import {MockQuizz} from '../mock-quizz'

@Component({
  selector: 'app-quizz-form',
  templateUrl: './quizz-form.component.html',
  styleUrls: ['./quizz-form.component.css']
})
export class QuizzFormComponent implements OnInit {

  submitted = false;
  
//  model = new Quizz(0,'Napoloeon','Egypte War', 'A new Question');
    model = null;

  correctValues: string[] = [
    'false',
    'true'
  ]

  constructor() { 

  }


  onSubmit() { this.submitted = true; }
  
  addQuestion() {
  

    this.model.addQuestion();
    
    this.submitted = false;    
  }
  ngOnInit() {
      this.model = new MockQuizz().getMockQuizz();
  }

}
