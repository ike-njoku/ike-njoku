import { Component, OnInit } from '@angular/core';
import { PortfolioService } from '../services/portfolio.service';

@Component({
  selector: 'app-portfolio',
  templateUrl: './portfolio.component.html',
  styleUrls: ['./portfolio.component.css']
})
export class PortfolioComponent implements OnInit {

  // items to count
  itemsToCount = [
    // projects is fetched from github
    {name:'Clients', runningValue:0 ,stopValue:42 },
    {name:'Projects', runningValue:0 ,stopValue:52 },
    {name:'Articles', runningValue:0 ,stopValue:174 },
  ];

  // projects
  projects;

  // count each item pair
  count(){
    this.itemsToCount.forEach((item)=>{
      // range checks
      if(item.runningValue == item.stopValue) return
      // increment the running value
      item.runningValue++;
    })
  }

  constructor( private portfolioService : PortfolioService) { }

  private getGitHubRepos(){
    this.portfolioService.getGithubRepos().subscribe((projects)=>{
      this.projects = projects.filter((d)=>d.private != true);
        this.projects.forEach((project)=>{
          // make the repo accessable by ediing the string returned in the json object
          project.url = project.url.replace('api.github.com/repos','github.com');
        })
      }, (error)=>{
      window.alert(error)
    });
  }
  
  ngOnInit(): void {
    this.getGitHubRepos();
    setInterval(()=>this.count(),70);
  }

}
