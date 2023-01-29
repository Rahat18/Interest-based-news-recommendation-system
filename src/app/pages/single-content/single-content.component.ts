import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { from, lastValueFrom } from 'rxjs';
import { delay } from 'rxjs/operators';
import { CommonService } from 'src/app/common.service';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-single-content',
  templateUrl: './single-content.component.html',
  styleUrls: ['./single-content.component.css']
})
export class SingleContentComponent implements OnInit {
  data: any;
  recentNews: any = []
  allLinks: any = [];
  index = 0;
  baseUrl = '';
  constructor(private route: ActivatedRoute, private commonService: CommonService, private router: Router) { }
  ngOnInit(): void {
    this.baseUrl = environment.baseUrl + '/news/get-preview-url'
    this.route.params.subscribe((param: any) => {
      if (param.id) {
        this.commonService.getSingleData({ newsId: param.id }).subscribe(async (res: any) => {
          if (res.status) {
            let news = res.data.news
            this.data = { ...news, title: await this.replaceStartingDash(news.title.replaceAll("#", "")), hashTagStr: news.hashTags.join(" , ").replaceAll("#", "") };
            this.recentNews = res.data.recent.map((val: any) => ({ ...val, title: this.replaceSting(val.title.replaceAll("#", "")), hashTagStr: val.hashTags.join(" , ").replaceAll("#", "") }));
          }
        })
      }
    })
  }

  async replaceStartingDash(title: string) {
    let allLinks: any = title.match(/\bhttps?:\/\/\S+/gi);

    let finalLinks = [];
    for (let i = 0; i < allLinks.length; i++) {
      let link: any = await lastValueFrom(this.commonService.getLinksText('https://cors-proxy.xyz/fetch/' + allLinks[i]))
      let actualLink: any = link.match(/\bhttps?:\/\/\S+/gi);
      actualLink = actualLink[0].split("<")[0].replaceAll(`">`, '')
      if (!actualLink.includes('twitter')) {

        actualLink = await lastValueFrom(this.commonService.getLinks(this.baseUrl + '?url=' + actualLink));
        finalLinks.push({ ...actualLink, description: actualLink.description.length > 150 ? actualLink.description.slice(0, 150) + '...' : actualLink.description });
      }
    }
    this.allLinks = finalLinks;

    if (title[0] === '-') {
      return title.slice(1, title.length - 1).replaceAll(/(?:https?|ftp):\/\/[\n\S]+/g, '') + '.';
    } else {
      return title.replaceAll(/(?:https?|ftp):\/\/[\n\S]+/g, '')+ '.';
    }

  }

  replaceSting(title: string) {
    if (title[0] === '-') {
      return title.slice(1, title.length - 1).replaceAll(/(?:https?|ftp):\/\/[\n\S]+/g, '');
    } else {
      return title.replaceAll(/(?:https?|ftp):\/\/[\n\S]+/g, '');;
    }

  }


  openLink(link: any) {
    window.open(link.url, '_blank')
  }


  gotoContent(data: any) {

    this.router.navigate(['news', data._id])
  }

}
