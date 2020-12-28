import { Component, OnInit } from '@angular/core';

const writeUp = "Page Not Found ...";

@Component({
  selector: 'app-page-not-found',
  templateUrl: './page-not-found.component.html',
  styleUrls: ['./page-not-found.component.css']
})


export class PageNotFoundComponent implements OnInit {


  constructor() { }
    // the write up that should appear on the screen
    characters ='';
    private characterIndex = 0;
    

  writeOnScreen(){
    let interval = setInterval(()=>{
      // range checks 
      if(this.characterIndex > writeUp.length-1){clearInterval(interval);return}

     this.characters += writeUp[this.characterIndex];
     this.characterIndex++;
    },100)

  }

  ngOnInit(): void {
    this.writeOnScreen();
  }
 

}
