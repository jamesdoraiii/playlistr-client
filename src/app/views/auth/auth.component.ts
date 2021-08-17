import { AbstractControl, FormBuilder, FormGroup, ValidationErrors, ValidatorFn, Validators } from '@angular/forms';
import { Component, OnInit } from '@angular/core';

import { AuthService } from '@services/auth.service';
import { Router } from '@angular/router';
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

  constructor(private auth: AuthService, private formBuilder: FormBuilder, private router: Router) {
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
    this.submitted = false;
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
    this.submitted = true;

    if (this.loginForm.invalid) {
      return;
    }

    if (this.showSignup) {
      this.submitSignup();
    }
    if (!this.showSignup) {
      this.submitLogin();
    }
  }

  submitSignup() {
    const signInInfo = {
      email: this.f.email.value,
      password: this.f.password.value
    };
    this.auth.signUp(signInInfo).subscribe(
      (response: any) => {
        if (response.errors) {
          alert('An account already exists with this username.');
          return;
        }
        window.location.href = environment.spotifyServerBaseUrl + 'login';
      },
      err => alert('There was an error trying to sign you up. Please try again.')
    );
  }

  submitLogin() {
    const signInInfo = {
      email: this.f.email.value,
      password: this.f.password.value
    };
    this.auth.signIn(signInInfo).subscribe(response => {
      this.router.navigate(['/home']);
    });
  }
}
