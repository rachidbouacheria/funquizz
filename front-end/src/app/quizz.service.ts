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
        
  private showUrl = '/quizz';
  mockQuizz = new MockQuizz();
  constructor( private http: HttpClient) { }
    
 
    
    getMockNewQuestion() {
        return this.mockQuizz.getMockNewQuestion();
    }
    
     getHeroes (): Observable<Quizz[]> {
        return this.http.get<Quizz[]>(this.showUrl)
          ;
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
