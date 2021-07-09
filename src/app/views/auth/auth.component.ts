import { AbstractControl, FormBuilder, FormGroup, ValidationErrors, ValidatorFn, Validators } from '@angular/forms';
import { Component, OnInit } from '@angular/core';

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
    this.loginForm = this.formBuilder.group(
      {
        email: ['', Validators.required],
        password: ['', Validators.required],
        passwordConf: ['', Validators.required]
      },
      { validators: this.checkPasswords }
    );
  }

  get f() {
    return this.loginForm.controls;
  }

  switchForm() {
    this.showSignup = !this.showSignup;
    if (!this.showSignup) {
      this.loginForm = this.formBuilder.group({
        email: ['', Validators.required],
        password: ['', Validators.required]
      });
    } else {
      this.loginForm = this.formBuilder.group(
        {
          email: ['', Validators.required],
          password: ['', Validators.required],
          passwordConf: ['', Validators.required]
        },
        { validators: this.checkPasswords }
      );
    }
  }

  checkPasswords: ValidatorFn = (group: AbstractControl): ValidationErrors | null => {
    let pass = group.get('password').value;
    let confirmPass = group.get('passwordConf').value;
    return pass === confirmPass ? null : { notSame: true };
  };

  onSubmit() {
    console.log('SUBMITTING', this.f);
    this.submitted = true;
    if (this.loginForm.invalid) {
      console.log('FORM IS INVALID', this.loginForm);
      return;
    }

    if (this.showSignup) {
      //sign up
    }
    if (!this.showSignup) {
      //login
    }
    // window.location.href = environment.spotifyServerBaseUrl + 'login';
  }
}
