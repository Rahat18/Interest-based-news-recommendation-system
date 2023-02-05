import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { APIService } from 'src/app/utils/api.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  constructor(private router:Router , private control:APIService) { }
  user:any;
  ngOnInit(): void {
    let user:any =localStorage.getItem('user')
    this.user= JSON.parse(user)
  }

  searchData(value:string){
  
    this.router.navigate(['search'], {
      queryParams: {
        search: value
      }
    })

  }

  onLogout(){
    this.control.logout();
    window.location.reload();
  }
}
