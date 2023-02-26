import { Component, OnInit } from '@angular/core';
import { APIService } from './utils/api.service'

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'FinalYearProject';
  spinSubscription: any;
  spinner = false;
  constructor(private control: APIService) { }

  ngOnInit() {
    this.spinSubscription = this.control.getSpinner().subscribe((res) => {
      setTimeout(() => {

        this.spinner = res;

      })
    });

  }

}
