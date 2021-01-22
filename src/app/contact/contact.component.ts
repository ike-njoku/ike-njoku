import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent implements OnInit {
  constructor() { }
  displayMailBox: boolean = true;
  
  showNailBox(){
    if(this.displayMailBox == true)this.displayMailBox = false;
    else this.displayMailBox = false;
  }

  ngOnInit(): void {

  }

}
