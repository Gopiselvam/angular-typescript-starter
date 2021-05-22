import { Component } from '@angular/core';
import ArrayCountries from "../utils/countries"

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'random-word-generator';
  limit:number = 10;
  words = '';

  generateRandomNumber(){
    this.limit  = Math.floor(Math.random() * 50) + 1;
  }

  generateRandomWords(){
    this.words = '';
    for(let i=0; i< this.limit ; i++){
      var x = Math.floor(Math.random() * 50) ;
      this.words =this.words + (i+1) + ')' + ArrayCountries[x].concat(', ');
    }
  }
}
