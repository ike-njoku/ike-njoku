import { Component, OnInit } from '@angular/core';
import { environment } from '../../environments/environment'

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  constructor() { }
  // whether or not to show menu
  showMenu: boolean = false;
  // environment variables
  environ = environment;

  link;

  links =[
    {toolTip:'Blog', href: '/'},
    {toolTip:'contact', href:'/contact'},
    {toolTip:'portfolio', href:'/portfolio'},
  ]

 showToolTip(link){
  this.link = link;
  console.log(link.toolTip)
}

hideToolTip(){
  this.link = '';
}
  
  
  ngOnInit(): void {
  }
}
