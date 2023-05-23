import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { NzMessageService } from 'ng-zorro-antd/message';
import { CommonService } from '../common.service';

@Component({
  selector: 'app-forgot-password',
  templateUrl: './forgot-password.component.html',
  styleUrls: ['./forgot-password.component.css']
})
export class ForgotPasswordComponent implements OnInit {

  constructor(private message: NzMessageService, private router: Router, private commonService: CommonService) { }

  ngOnInit(): void {
  }

  onReset(form: any) {
    let includesExtra = ['in', 'com', 'org'];
    if (!this.validateEmail(form.value.emailId)) {
      this.message.error('Please Enter A Valid Email!');
      return;
    }
    let validEmail = true;
    let splitted = form.value.emailId.split('.');
    if (splitted.length > 1) {
      if (includesExtra.includes(splitted[splitted.length - 1]) && includesExtra.includes(splitted[splitted.length - 2])) {
        validEmail = false;
      }
    }

    if (!validEmail) {
      this.message.error('Invalid Email!')
      return;
    }

    this.commonService.resetPassword({ emailId: form.value.emailId }).subscribe((res: any) => {
      this.message.success('Password Reset Link Sent To Your Email!')
      this.router.navigate(['/login'])

    }, (err: any) => {

      this.message.error(err.error.message)
    })
  }



  validateEmail(email: string) {
    return String(email)
      .toLowerCase()
      .match(
        /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
      );
  };
}
