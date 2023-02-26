import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { NzMessageService } from 'ng-zorro-antd/message';
import { CommonService } from 'src/app/common.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-update-user',
  templateUrl: './update-user.component.html',
  styleUrls: ['./update-user.component.css']
})
export class UpdateUserComponent implements OnInit {
  value = []
  listOfOption: any = [];
  user: any;
  passValid = false;
  constructor(private message: NzMessageService, private commonService: CommonService) { }

  ngOnInit(): void {
    let user: any = localStorage.getItem('user')
    this.user = JSON.parse(user)
    this.commonService.getAllInterests().subscribe((res: any) => {
      this.listOfOption = res.data.map((val: any) => ({ label: val.name, value: val.name }))
    })
  }

  onSubmit(form: NgForm) {
    // if (!this.validateEmail(form.value.emailId)) {
    //   this.message.error('Please Enter A Valid Email!');
    //   return;
    // }

    if (!form.valid) {
      this.message.error('All Fields Are Required To Create An Account!');
      return
    }

    if (!form.value.interests.length) {
      this.message.error('Please select at least one interest');
    }

    let data = form.value;
    delete data.emailId

    this.commonService.updateUser(data).subscribe((res: any) => {
      this.message.success("User Details Updated Successfully")
      localStorage.setItem('user', JSON.stringify(res.data))
      // form.reset();
      window.location.reload()
    }, (err) => {
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

  verifyPass(value1: string, value2: string) {
    if (value1 === value2) {
      this.passValid = true;
    } else {
      this.passValid = false
    }

  }

  onSubmitPass(form: NgForm) {
    if (!form.valid) {
      return;
    }
    this.commonService.updatePassword({
      oldPassword: form.value.oldPassword,
      newPassword: form.value.newPassword
    }).subscribe((res: any) => {
      this.message.success("Password Updated Successfully")
      form.reset();
    }, (err) => {
      this.message.error(err.error.message)
    })
  }

}
