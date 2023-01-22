import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-for-you',
  templateUrl: './for-you.component.html',
  styleUrls: ['./for-you.component.css']
})
export class ForYouComponent implements OnInit {
@Input() data:any;
  constructor(private router:Router) { }

  ngOnInit(): void {
   
    this.data = this.data.map((val:any) => {
      return { ...val , title:  this.replaceStartingDash(val.title.replaceAll("#","" )), hashTagStr: val.hashTags.join(" , ").replaceAll("#", "")}

    })

  }

  replaceStartingDash(title:string){
    if(title[0] === '-'){
      return title.slice(1,title.length -1);
    }else {
      return title
    }
  }

  gotoContent(data:any){
    
    this.router.navigate(['news', data._id])
  }
}

