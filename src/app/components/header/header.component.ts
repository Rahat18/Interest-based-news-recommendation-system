import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  constructor(private router:Router ) { }

  ngOnInit(): void {
  }

  searchData(value:string){
  
    this.router.navigate(['search'], {
      queryParams: {
        search: value
      }
    })

  }
}
