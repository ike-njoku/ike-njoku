import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-portfolio',
  templateUrl: './portfolio.component.html',
  styleUrls: ['./portfolio.component.css']
})
export class PortfolioComponent implements OnInit {

  // items to count
  itemsToCount = [
    {name:'Clients', runningValue:0 ,stopValue:42 },
    {name:'Projects', runningValue:0 ,stopValue:52 },
    {name:'Articles', runningValue:0 ,stopValue:174 },
  ]

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
    setInterval(()=>this.count(),100);
  }

}
