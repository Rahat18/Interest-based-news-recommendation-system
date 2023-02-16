import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { CommonService } from 'src/app/common.service';

@Component({
  selector: 'app-search-news',
  templateUrl: './search-news.component.html',
  styleUrls: ['./search-news.component.css']
})
export class SearchNewsComponent implements OnInit {

  constructor(private route: ActivatedRoute, private router:Router, private commonService:CommonService) { }
  result:any = []
  search = '';
  page=1;
  limit = 30;
  ngOnInit(): void {
    this.route.queryParams.subscribe((params:any) => {
      console.log(params)
      if(params.search){
        this.search = params.search;
        this.result =[];
        this.page = 1;
        this.getAllNews();
      }else {
          this.router.navigateByUrl('/');
      }
    })
    window.addEventListener('scroll', () => {
      let pos = (document.documentElement.scrollTop || document.body.scrollTop) + document.documentElement.offsetHeight;
      let max = document.documentElement.scrollHeight;
      // pos/max will give you the distance between scroll bottom and and bottom of screen in percentage.
       if(pos == max )   {
       //Do your action here\
       this.page++;
        this.getAllNews()
       }
      
    })
  }

  replaceStartingDash(title:string){
    if(title[0] === '-'){
      return title.slice(1,title.length -1).replaceAll(/(?:https?|ftp):\/\/[\n\S]+/g, '');
    }else {
      return title.replaceAll(/(?:https?|ftp):\/\/[\n\S]+/g, '');;
    }
  }


  getAllNews () {
    this.commonService.getNews({page: this.page, limit: this.limit, search: this.search }).subscribe((res:any) => {
      let newData:any = []
      res.data.data.forEach((val:any) => {
        let title = val.title.length > 50 ? val.title.slice(0, 50) + '...' : val.title
        newData.push({ ...val , title:  this.replaceStartingDash(title.replaceAll("#","" )), hashTagStr: val.hashTags.join(" , ").replaceAll("#", "")})
      })

      this.result = [...this.result,...newData]
    })
  }

  gotoContent(data:any){

    this.router.navigate(['news', data._id])
  }
 
}
