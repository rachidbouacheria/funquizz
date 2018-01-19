import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';
import { of } from 'rxjs/observable/of';

import { catchError, map, tap } from 'rxjs/operators';

import {QuizzQuestion} from './quizz-question'
import {Quizz} from './quizz'

import {MockQuizz} from './mock-quizz'


const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};

@Injectable()
export class QuizzService {
        
  private quizzUrl = '/quizz';
    
    
  mockQuizz = new MockQuizz();
  constructor( private http: HttpClient) { }
    
 
     getEmptyQuizz() {

        let quizz = new Quizz(0, '', '',[]);

        return quizz;
    }
    
    getMockNewQuestion() {
        return this.mockQuizz.getMockNewQuestion();
    }
    
    getHeroes (): Observable<Quizz[]> {
        return this.http.get<Quizz[]>(this.quizzUrl);
    }
        
    addQuizz (quizz: Quizz): Observable<Quizz> {
      return this.http.post<Quizz>(this.quizzUrl, quizz, httpOptions);
    }
    
    addQuestion(quizz: Quizz, aNewQuestion: QuizzQuestion){
          let addedNewQuestion  = JSON.parse(JSON.stringify(aNewQuestion ));
          quizz.questions.push(addedNewQuestion);
     }
    
    removeQuestion(quizz: Quizz, questionIndex){
       quizz.questions.splice(questionIndex, 1);
    }
    
    updateQuizz (quizz: Quizz): Observable<Quizz> {
      return this.http.put<Quizz>(this.quizzUrl, quizz, httpOptions);
    }
    
    deleteQuizz (quizzId): Observable<Quizz> {      
      var delete_url = "/quizz/"+quizzId;
   
      return this.http.delete<Quizz>(delete_url, httpOptions);
    }
       
        
     selectQuizz (quizzId): Observable<Quizz> {    
      var select_url = "/quizz/"+quizzId;
      return this.http.get<Quizz>(select_url, httpOptions);
    }
        
    
    removeQuizz(name){
      alert('Removing quizz ubs= service '+ name);
    }
    
    getMockNewQuestion1(): Observable<QuizzQuestion> {
      return of(this.mockQuizz.getMockNewQuestion());
    }
    
    getNewQuestion() {
       return this.mockQuizz.getNewQuestion();
    }

    getMockQuizz() {
        return this.mockQuizz.getMockQuizz();
    }
    
    
    validateQuizzQuestion(aNewQuestion: QuizzQuestion){
        
        let c1 = aNewQuestion.responses[0].correct;
        let c2 = aNewQuestion.responses[1].correct;
        let c3 = aNewQuestion.responses[2].correct;
        let c4 = aNewQuestion.responses[3].correct;
 
          
        if(c1==c2 && c3==c4 && c1==c3){
            if (c1 == 'false'){
               return 'At least one response must be correct'; 
            }else{
                 return'Responses cannot all be correct'; 
            }
        }
        let numberOfCorrect = 0;
        if(c1=='true') numberOfCorrect ++
        
        if(c2=='true') numberOfCorrect ++
        if(c3=='true') numberOfCorrect ++
        if(c4=='true') numberOfCorrect ++
        
        if(numberOfCorrect>1){
             return 'You can only have one correct response. You have:' + numberOfCorrect;
            
        }
        return null;
    }
    

    /**
   * Handle Http operation that failed.
   * Let the app continue.
   * @param operation - name of the operation that failed
   * @param result - optional value to return as the observable result
   */
//  private handleError<T> (operation = 'operation', result?: T) {
//    return (error: any): Observable<T> => {
// 
//      // TODO: send the error to remote logging infrastructure
//      console.error(error); // log to console instead
// 
//      // TODO: better job of transforming error for user consumption
//      this.log("${operation} failed: ${error.message}");
// 
//      // Let the app keep running by returning an empty result.
//      return of(result as T);
//    };
//  }
 
  /** Log a HeroService message with the MessageService */
//  private log(message: string) {
//    this.log('HeroService: ' + message);
//  }

}
