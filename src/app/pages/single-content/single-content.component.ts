import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { CommonService } from 'src/app/common.service';

@Component({
  selector: 'app-single-content',
  templateUrl: './single-content.component.html',
  styleUrls: ['./single-content.component.css']
})
export class SingleContentComponent implements OnInit {
  data:any;
  recentNews:any = []
  constructor(private route:ActivatedRoute, private commonService: CommonService) { }
  ngOnInit(): void {
    this.route.params.subscribe((param: any) => {
      if(param.id){
        this.commonService.getSingleData({newsId: param.id}).subscribe((res:any) => {
          if(res.status){
            let news = res.data.news
            this.data = { ...news , title:  this.replaceStartingDash(news.title.replaceAll("#","" )), hashTagStr: news.hashTags.join(" , ").replaceAll("#", "")};
            this.recentNews = res.data.recent.map((val:any)=> ({ ...val , title:  this.replaceStartingDash(val.title.replaceAll("#","" )), hashTagStr: val.hashTags.join(" , ").replaceAll("#", "")}));
          }
        })
      }
    })
  }

  replaceStartingDash(title:string){
    if(title[0] === '-'){
      return title.slice(1,title.length -1);
    }else {
      return title
    }
  }
}
