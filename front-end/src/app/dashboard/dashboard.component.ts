import { Component, OnInit } from '@angular/core';
import {Router} from "@angular/router";
import {NgbModal, ModalDismissReasons} from '@ng-bootstrap/ng-bootstrap';


import {QuizzResponse} from '../quizz-response';
import {QuizzQuestion} from '../quizz-question'
import {Quizz} from '../quizz';
import { QuizzService } from '../quizz.service';
import { QuizzModalComponent } from '../quizz-modal/quizz-modal.component';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {

  closeResult: string;
  modalQuizz = null;
  model       = null;
    
  constructor(private quizzService: QuizzService, private modalService: NgbModal) { }

  ngOnInit() {
    this.quizzService.getHeroes().subscribe(newQuizz => {
    this.model = newQuizz;});
      
  }
    
  deleteQuizz(quizzId){
      this.quizzService.deleteQuizz(quizzId).subscribe(res => {
    });
      
    this.quizzService.getHeroes().subscribe(newQuizz => {
    this.model = newQuizz;});
  }
    
  open(content,aQuizz) {
    this.modalQuizz = aQuizz;
    this.modalService.open(content).result.then((result) => {
      this.closeResult = `Closed with: ${result}`;
    }, (reason) => {
      this.closeResult = `Dismissed ${this.getDismissReason(reason)}`;
    });
  }
    
     private getDismissReason(reason: any): string {
    if (reason === ModalDismissReasons.ESC) {
      return 'by pressing ESC';
    } else if (reason === ModalDismissReasons.BACKDROP_CLICK) {
      return 'by clicking on a backdrop';
    } else {
      return  `with: ${reason}`;
    }
  }

}
