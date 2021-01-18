import { Component, ElementRef, OnInit, Renderer2, ViewChild} from '@angular/core';
import { PortfolioService } from '../services/portfolio.service';


@Component({
  selector: 'app-portfolio',
  templateUrl: './portfolio.component.html',
  styleUrls: ['./portfolio.component.css']
})
export class PortfolioComponent implements OnInit {

  //  element(s) to animate 
  @ViewChild('animatable')animatable;

  // projects
  projects;

   // items to count
   itemsToCount = [
    // projects is fetched from github
    {name:'Clients', runningValue:0 ,stopValue:7 },
    {name:'Projects', runningValue:0 ,stopValue:10},
    {name:'Articles', runningValue:0 ,stopValue:23 },
  ];

  constructor(
    private portFolioService : PortfolioService,
    private renderer : Renderer2
    ) { }


  // count each item pair
  count(){
    this.itemsToCount.forEach((item)=>{
      // range checks
      if(item.runningValue == item.stopValue) return
      // increment the running value
      item.runningValue++;
    })
        
  }

  getGitHubRepos(){
    this.portFolioService.getGitHubRepos().subscribe((projects)=>{
      // filter the projects and return only those that are not private
      this.projects = projects.filter((p)=>p.private !== true);
      // edit the project URLs of each project to allow for a visitable link
      projects.forEach((project)=>project.url = project.url.replace('api.github.com/repos','github.com') )
      // handle errors
    },(error)=>window.alert(error))
  }

  // add slide up effect to elements on scroll
  addAnimation(){
    const clientHeight = window.innerHeight;
    const ChildElements =[ ...this.animatable.nativeElement.children]
    ChildElements.forEach((childElement)=>{
     if(childElement.getBoundingClientRect().top < clientHeight){
       childElement.classList.add('slide-up')
      };
    })
  }


  ngOnInit(): void {
    setInterval(()=>this.count(),70);
    this.getGitHubRepos();

    window.addEventListener('scroll',()=>{
      this.addAnimation();
    })
  }

  
}

