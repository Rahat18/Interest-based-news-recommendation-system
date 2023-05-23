import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { NzMessageService } from 'ng-zorro-antd/message';
import { CommonService } from '../common.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(private message: NzMessageService, private commonService: CommonService, private router: Router) { }

  ngOnInit(): void {
  }

  onLogin(form: NgForm) {
    if (!this.validateEmail(form.value.emailId)) {
      this.message.error('Please Enter A Valid Email!')
      return
    }
    if (!form.valid) {
      this.message.error('Please Enter Email And Password!')
      return;
    }


    this.commonService.login({ ...form.value }).subscribe((res: any) => {
      if (!res.error) {

        localStorage.setItem('user', JSON.stringify(res.data.user))
        localStorage.setItem('token', res.data.token)
        this.router.navigate(['/'])
      }
    }, (err: any) => {

      this.message.error(err?.error?.message)
    })


  }

  validateEmail(email: string) {
    return String(email)
      .toLowerCase()
      .match(
        /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
      );
  };

  switchForgot() {
    this.router.navigate(['/forgot-password'])
  }
}
