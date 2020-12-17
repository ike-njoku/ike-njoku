import { Component, OnInit } from '@angular/core';

// array of job Despciptions
const JOBDESCRIPTIONS =[
  "a Software Engineer...",
  "a UI/UX designer..",
  "a Coding Instructor...",
  "a Writer..."
];


@Component({
  selector: 'app-landing',
  templateUrl: './landing.component.html',
  styleUrls: ['./landing.component.css']
})

export class LandingComponent implements OnInit {

  // the current job description index (iteration value)
  jobDescriptionIndex = 0;
  
  // current (selected) Job Description
  currentJobDescription;

  //the letters being displayed (confer update display)
  // set to an empty string so that you can append other strings to it
  charactersToDisplay = '';

  // select the job description
  selectJobDescription(){
    this.currentJobDescription = JOBDESCRIPTIONS[this.jobDescriptionIndex];

    // update the display with the current (selected) job description
    this.addCharactersToDisplay();
    this.jobDescriptionIndex++;
    // range checks
    // reset the index to zero if it goes out of range
    if(this.jobDescriptionIndex > JOBDESCRIPTIONS.length-1)this.jobDescriptionIndex = 0;
  }

  // update the display
  addCharactersToDisplay(){
    // current character index (the current letter in the jobDescritpion being updated )
    let currentCharacterIndex = 0;

    // create a timer function (set interval method) to update the charactersToDisplay (this.charactersToDisplay) at a given interval
    let appendCharacters = setInterval(()=>{
     
      this.charactersToDisplay += this.currentJobDescription[currentCharacterIndex]
      // increment the current characterIndex
      currentCharacterIndex++;
      // range checks
      if(currentCharacterIndex > this.currentJobDescription.length -1){ 
        clearInterval(appendCharacters);
        // clear the characters that have been displayed in preparation for selecting the next job description
        // call the deleteCharacters method after time x
        setTimeout(() =>this.deleteCharactersFromDisplay(),1000)
      } 
    },150)

  }

  // method to clear the displayed characters ( meant to be inside the update display method, but CLEANER CODE... fuck Yeah!!! )
  deleteCharactersFromDisplay(){
    let clearCharacters  = setInterval(()=>{
      this.charactersToDisplay = this.charactersToDisplay.slice(0,-1)

      // range checks
      if(this.charactersToDisplay.length == 0){ 
        // stop the interval function
        clearInterval(clearCharacters);
        //call the selectJobDescsription after time x 
        setTimeout(()=>this.selectJobDescription(), 500);
      }
    } ,100)
  }

  

  constructor() { }

  ngOnInit(): void {
    this.selectJobDescription();
  }

}
