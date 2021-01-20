import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css']
})
export class FooterComponent implements OnInit {

  constructor() { }
  year: string;

  getDate(){
    const date = new Date();
    this.year = date.getFullYear().toString();
  }

  ngOnInit(): void {
    this.getDate();
  }

}
