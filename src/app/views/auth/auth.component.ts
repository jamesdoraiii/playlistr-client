import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

import { AuthService } from '@services/auth.service';
import { environment } from '@environment';

@Component({
  selector: 'app-auth',
  templateUrl: './auth.component.html',
  styleUrls: ['./auth.component.css']
})
export class AuthComponent implements OnInit {
  showSignup: boolean = true;
  loginForm: FormGroup;
  submitted: boolean;
  error = '';

  constructor(private auth: AuthService, private formBuilder: FormBuilder) {
    // Here if there is already a user in the auth service navigate to the home screen
  }

  ngOnInit(): void {
    this.loginForm = this.formBuilder.group({
      email: ['', Validators.required],
      password: ['', Validators.required],
      passwordConf: ['', Validators.required]
    });
  }

  get f() {
    return this.loginForm.controls;
  }

  onSubmit() {
    console.log('SUBMITTING');
    this.submitted = true;
    if (this.loginForm.invalid) {
      console.log('FORM IS INVALID');
      return;
    }

    if (this.showSignup) {
      //sign up
    }
    if (!this.showSignup) {
      //login
    }
    window.location.href = environment.spotifyServerBaseUrl + 'login';
  }
}
