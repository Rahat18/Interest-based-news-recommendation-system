import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-what-you-love',
  templateUrl: './what-you-love.component.html',
  styleUrls: ['./what-you-love.component.css']
})
export class WhatYouLoveComponent implements OnInit {

  @Input() data: any = []
  constructor(private router: Router) { }

  ngOnInit(): void {
    let rightData:any = [];
    let mainData ={};
    let bottomData:any = [];

    this.data.forEach((val:any, i:number) => {
      if(i=== 0){
        mainData = { ...val , title:  this.replaceStartingDash(val.title.replaceAll("#","" )), hashTagStr: val.hashTags.join(" , ").replaceAll("#", "")};
      }else if( i < 4){
        bottomData.push({ ...val , title:  this.replaceStartingDash(val.title.replaceAll("#","" )), hashTagStr: val.hashTags.join(" , ").replaceAll("#", "")})
      }else {
        rightData.push({ ...val , title:  this.replaceStartingDash(val.title.replaceAll("#","" )), hashTagStr: val.hashTags.join(" , ").replaceAll("#", "")})
      }
    })


    this.data = {
      rightSideData: rightData,
      bottomData: bottomData,
      mainData: mainData
    }

  }

  replaceStartingDash(title:string){
    if(title[0] === '-'){
      return title.slice(1,title.length -1).replaceAll(/(?:https?|ftp):\/\/[\n\S]+/g, '');
    }else {
      return title.replaceAll(/(?:https?|ftp):\/\/[\n\S]+/g, '');;
    }
  }

  gotoContent(data:any){

    this.router.navigate(['news', data._id])
  }

}
