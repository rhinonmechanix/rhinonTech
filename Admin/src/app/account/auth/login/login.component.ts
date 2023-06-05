import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

import { AuthenticationService } from '../../../core/services/auth.service';

import { ActivatedRoute, Router } from '@angular/router';
import { first } from 'rxjs/operators';

import { environment } from '../../../../environments/environment';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  resultData: any = '';
  token: any = '';
  rememberMe: boolean = false;

  public loginObj = { username: "", password: "" };

  // set the currenr year
  year: number = new Date().getFullYear();

  // tslint:disable-next-line: max-line-length
  constructor(
    private router: Router,
    public loginData: AuthenticationService)
    { }

  ngOnInit() {
    const storedLoginData = localStorage.getItem('loginData');
    if (storedLoginData) {
      this.loginObj = JSON.parse(storedLoginData);
    }
  }

  ngOnDestroy() {
    if (!this.rememberMe) {
      localStorage.removeItem('loginData');
    }
  }
  

  sendData() {
    console.log(this.loginObj);
    if (this.rememberMe) {
      // Store the login data in local storage
      localStorage.setItem('loginData', JSON.stringify(this.loginObj));
    }
    this.loginData.loginForm(this.loginObj).subscribe((result) => {
      this.resultData = result
      this.token = this.resultData.data.token
      localStorage.setItem('token', this.token)
      console.log("the Token == ", this.token);
      if (this.resultData.message == 'Success') {
        // this.router.navigate(['/chat'])
      }
    })
  }

}
