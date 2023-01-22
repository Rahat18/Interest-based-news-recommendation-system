import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-what-you-love',
  templateUrl: './what-you-love.component.html',
  styleUrls: ['./what-you-love.component.css']
})
export class WhatYouLoveComponent implements OnInit {

  @Input() data= {
    rightSideData: [
      {
        img: "assets/img/trending/right1.jpg",
        text: "Welcome To The Best Model Winner Contest",
        hashTag: "Concert"
      },
      {
        img: "assets/img/trending/right1.jpg",
        text: "Welcome To The Best Model Winner Contest",
        hashTag: "Concert"
      },
      {
        img: "assets/img/trending/right1.jpg",
        text: "Welcome To The Best Model Winner Contest",
        hashTag: "Concert"
      }
      , {
        img: "assets/img/trending/right1.jpg",
        text: "Welcome To The Best Model Winner Contest",
        hashTag: "Concert"
      },
      {
        img: "assets/img/trending/right1.jpg",
        text: "Welcome To The Best Model Winner Contest",
        hashTag: "Concert"
      },
      {
        img: "assets/img/trending/right1.jpg",
        text: "Welcome To The Best Model Winner Contest",
        hashTag: "Concert"
      },
      {
        img: "assets/img/trending/right1.jpg",
        text: "Welcome To The Best Model Winner Contest",
        hashTag: "Concert"
      }
    ],
    bottomData: [
      {
        img: "assets/img/trending/right1.jpg",
        text: "Welcome To The Best Model Winner Contest",
        hashTag: "Concert"
      },
      {
        img: "assets/img/trending/right1.jpg",
        text: "Welcome To The Best Model Winner Contest",
        hashTag: "Concert"
      },
      {
        img: "assets/img/trending/right1.jpg",
        text: "Welcome To The Best Model Winner Contest",
        hashTag: "Concert"
      }
    ],
    mainData:  {
      img: "assets/img/trending/right1.jpg",
      text: "Welcome To The Best Model Winner Contest",
      hashTag: "Concert"
    }
  }
  constructor(private router: Router) { }

  ngOnInit(): void {
    
  }

  gotoContent(data:any){
    console.log(data);
    this.router.navigate(['news'])
  }

}
