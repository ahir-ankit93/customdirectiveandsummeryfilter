import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app';

  courses=[
    {
      name : "angular",
      duration:30,
      price:600,
      startingdate : Date.now(),
      rating:4.6
    }
  ]

  text=`
        hey i am ankit ahir here what can i do for you 
         i am ready to help you guys 
         stay bless
         keep rocking
         here we can learn angular node mongodb express 
         most off langages are java script based
         so most important think is you have to learne first javascript 

         
         hey i am ankit ahir here what can i do for you 
         i am ready to help you guys 
         stay bless
         keep rocking
         here we can learn angular node mongodb express 
         most off langages are java script based
         so most important think is you have to learne first javascript 

  `
}
