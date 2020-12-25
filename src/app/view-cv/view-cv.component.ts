import { Component, OnInit } from '@angular/core';
import { PortfolioService } from '../services/portfolio.service';

@Component({
  selector: 'app-view-cv',
  templateUrl: './view-cv.component.html',
  styleUrls: ['./view-cv.component.css']
})
export class ViewCvComponent implements OnInit {
  // parameter to store the content of my cv
  cVContent

  constructor(private portfolioService : PortfolioService) { }
  // get the content of my cv
  getCVContent(){
   this.portfolioService.getCurriculumVitae().subscribe(
     (cv)=>this.cVContent = cv
   ),(error)=>window.alert(error);
  }

  ngOnInit(): void {
    this.getCVContent()


    console.log(this.cVContent);
  }

}
