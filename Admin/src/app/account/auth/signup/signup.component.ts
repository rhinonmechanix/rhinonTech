import { Component, OnInit, AfterViewInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';

import { AuthenticationService } from '../../../core/services/auth.service';
import { UserProfileService } from '../../../core/services/user.service';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.scss']
})
export class SignupComponent implements OnInit, AfterViewInit {

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private registerData: AuthenticationService,
    private userService: UserProfileService
    ) { }

  ngOnInit() {
  }

  ngAfterViewInit() {
  }

  public registerOjb = { username: "", email: "", password: "" };

  sendData() {
    console.log(this.registerOjb);
    this.registerData.registerForm(this.registerOjb).subscribe((result) => {
      console.warn(result);
    })
    this.router.navigate(['/account/login'])
  }
}
