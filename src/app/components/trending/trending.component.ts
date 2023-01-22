import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-trending',
  templateUrl: './trending.component.html',
  styleUrls: ['./trending.component.css']
})
export class TrendingComponent implements OnInit {

  @Input() data = [{
    img: 'assets/img/news/weekly2News1.jpg',
    text: 'Welcome To The Best Model Winner Contest',
    hashtag: 'Corporate'
  },
  {
    img: 'assets/img/news/weekly2News1.jpg',
    text: 'Welcome To The Best Model Winner Contest',
    hashtag: 'Corporate'
  },{
    img: 'assets/img/news/weekly2News1.jpg',
    text: 'Welcome To The Best Model Winner Contest',
    hashtag: 'Corporate'
  },{
    img: 'assets/img/news/weekly2News1.jpg',
    text: 'Welcome To The Best Model Winner Contest',
    hashtag: 'Corporate'
  }
,{
  img: 'assets/img/news/weekly2News1.jpg',
  text: 'Welcome To The Best Model Winner Contest',
  hashtag: 'Corporate'
}];
  constructor(private router:Router) { }

  ngOnInit(): void {
  }
  gotoContent(data:any){
    console.log(data);
    this.router.navigate(['news'])
  }

}
