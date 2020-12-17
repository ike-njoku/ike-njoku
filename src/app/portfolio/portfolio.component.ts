import { Component, OnInit } from '@angular/core';

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
  projects = [
    {title:'Project-1', description:'An E-commerce Website ( a two-way multi-client shopping website )', link:'http://link-to-project-1', gitHub:'http://github.com/ike-njoku/project-1' },
    {title:'Project-2', description:'A Blog that geeds the general public with Accurate information and recent updates', link:'http://link-to-project-2', gitHub:'http://github.com/ike-njoku/project-2' },
    {title:'Project-3', description:'A student Portal Management system for Christ the Kings College Gwagwalada Abuja', link:'http://link-to-project-3', gitHub:'http://github.com/ike-njoku/project-3' },
    {title:'Project-4', description:'A grid Based Tetris Game built in Js', link:'http://link-to-project-4', gitHub:'http://github.com/ike-njoku/project-4' },
    {title:'Project-5', description:'An E-commerce Website ( a two-way multi-client shopping website )', link:'http://link-to-project-5', gitHub:'http://github.com/ike-njoku/project-5' },
    {title:'Project-6', description:'An E-commerce Website ( a two-way multi-client shopping website )', link:'http://link-to-project-6', gitHub:'http://github.com/ike-njoku/project-6' },
  ];

  // count each item pair
  count(){
    this.itemsToCount.forEach((item)=>{
      // range checks
      if(item.runningValue == item.stopValue) return
      // increment the running value
      item.runningValue++;
    })
  }

  constructor() { }

  ngOnInit(): void {
    setInterval(()=>this.count(),70);
  }

}
