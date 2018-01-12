import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule }   from '@angular/forms';
import { HttpClientModule }   from '@angular/common/http';



import { AppComponent } from './app.component';
import { QuizzFormComponent } from './quizz-form/quizz-form.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { AppRoutingModule } from './/app-routing.module';
import { QuizzService } from './quizz.service';


@NgModule({
  declarations: [
    AppComponent,
    QuizzFormComponent,
    DashboardComponent
  ],
  imports: [
    BrowserModule,FormsModule, AppRoutingModule,HttpClientModule
  ],
  providers: [QuizzService],
  bootstrap: [AppComponent]
})
export class AppModule { }
