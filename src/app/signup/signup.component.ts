import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { NzMessageService } from 'ng-zorro-antd/message';
import { CommonService } from '../common.service';
import { of } from 'rxjs';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {

  value = [];
  listOfOption: any = [];
  constructor(private message: NzMessageService, private router: Router, private commonService: CommonService) { }

  ngOnInit(): void {
    this.commonService.getAllInterests().subscribe((res: any) => {
      this.listOfOption = res.data.map((val: any) => ({ label: val.name, value: val.name }))
    })
  }

  onSignup(form: NgForm) {
    let includesExtra = ['in', 'com', 'org'];
    if (!this.validateEmail(form.value.emailId)) {
      this.message.error('Please Enter A Valid Email!');
      return;
    }
    if (!form.value.name) {
      this.message.error('Please Enter Your Name!');
      return;
    }


    if (!form.valid) {
      this.message.error('All Fields Are Required To Create An Account!');
      return
    }

    if (!this.value.length) {
      this.message.error('Please select at least one interest');
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


    this.commonService.signup({
      ...form.value,
      interests: this.value
    }).subscribe((res: any) => {
      this.message.success('Account Created Successfully! Please Login To Continue.')
      this.router.navigate(['/login'])

    }, (err: any) => {
      let fieldName = err?.error?.errors?.length ? ('The data in ' + err.error.errors[0].param + ' is invalid.') : 'Something Went Wrong';
      if (fieldName.includes('password')) {
        fieldName = 'Password must be at least 6 characters long.'
      }
      if (!err?.error?.errors?.length) {
        fieldName = err.error.message
      }
      this.message.error(fieldName)
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

