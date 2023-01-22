import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-for-you',
  templateUrl: './for-you.component.html',
  styleUrls: ['./for-you.component.css']
})
export class ForYouComponent implements OnInit {
@Input() data =[
  {
    img: "assets/img/news/whatNews1.jpg",
    text: "Welcome To The Best Model Winner Contest",
    hashTag: "Night party"
  },
  {
    img: "assets/img/news/whatNews1.jpg",
    text: "Welcome To The Best Model Winner Contest",
    hashTag: "Night party"
  },
  {
    img: "assets/img/news/whatNews1.jpg",
    text: "Welcome To The Best Model Winner Contest",
    hashTag: "Night party"
  },
  {
    img: "assets/img/news/whatNews1.jpg",
    text: "Welcome To The Best Model Winner Contest",
    hashTag: "Night party"
  },
]
  constructor(private router:Router) { }

  ngOnInit(): void {
  }

  gotoContent(data:any){
    console.log(data);
    this.router.navigate(['news'])
  }
}

