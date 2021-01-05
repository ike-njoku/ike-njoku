import { Component, ElementRef, OnInit, Renderer2, ViewChild } from '@angular/core';


@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css']
})



export class AboutComponent implements OnInit {

  @ViewChild('heading')contentHeading: ElementRef;
  @ViewChild('body')contentBody: ElementRef;

  contents = [
    {title:" Who I am ", body:" My Name Is Ike-Njoku David. I am a software Engineer and freelance Web Developer with quite some Experience. Over the years, I have become more than just a programmer; teaching people to code both in class rooms and through articles!. I love to write, play the guitar, basket ball and travel. I love photography  "},
    {title:" How it Started ", body:" I started Coding back in 2017, after i felt a developer had over charged me to create a blog. I decided to build the blog myself. Along the line, I fell in love with Coding. I never finished the blog because I found there was so much more that I could build "},
    {title:" How It's Going ", body:" I started Coding back in 2017, after i felt a developer had over charged me to create a blog. I decided to build the blog myself. Along the line, I fell in love with Coding. I never finished the blog because I found there was so much more that I could build "},
  ];

  // current  content Index
  currentContentIndex = 0;
  // current Content
  currentContent = this.contents[this.currentContentIndex];

  constructor(
    private renderer: Renderer2
  ) { }

  // jump to content
  goToContent(content){
    // loop through the array/ object of contents and find the match
    for (let i = 0; i < this.contents.length; i++) {
      if(this.contents[i] == content){
        // if a match is found, reassign variables/ values
        this.currentContentIndex = i;
        this.currentContent = this.contents[this.currentContentIndex];
      }
    }
  }

  // add animataions
  addAnimation(animationName){
    // remove the animation first
    this.renderer.removeClass(this.contentHeading.nativeElement,animationName);
    this.renderer.removeClass(this.contentBody.nativeElement,animationName);

    // wait a small while before re-adding the animation
    setTimeout(()=>{
      this.renderer.addClass(this.contentBody.nativeElement,animationName);
      this.renderer.addClass(this.contentHeading.nativeElement,animationName);
    },5)

  }


  ngOnInit(): void {
    this.currentContent = this.contents[this.currentContentIndex];
  }

 

}
