import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {

  loginGroup : FormGroup
  constructor(private builder: FormBuilder) { }

  ngOnInit() {
    // this.loginGroup = this.builder.group([
    //   login: this.loginGroup.validator
    // ])
  }

}
