import { Component, OnInit } from '@angular/core';
import { CommonService } from '../common.service';

@Component({
  selector: 'app-main-app',
  templateUrl: './main-app.component.html',
  styleUrls: ['./main-app.component.css']
})
export class MainAppComponent implements OnInit {

  constructor(private commonService: CommonService) { }
  data: any;
  ngOnInit(): void {
    this.commonService.getHomePageNews().subscribe((res: any) => {
      if (res.status) {
        this.data = res.data
      }
    })
  }

}
