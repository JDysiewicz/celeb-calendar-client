import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { AuthService } from 'src/app/core/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent implements OnInit {
  loginForm: FormGroup;

  constructor(
    private authService: AuthService,
    private formBuilder: FormBuilder
  ) {}

  ngOnInit(): void {
    this.loginForm = this.formBuilder.group({
      username: ['', [Validators.required]],
      password: ['', [Validators.required]],
    });
  }

  get f() {
    return this.loginForm.controls;
  }

  onSubmit() {
    if (this.loginForm.invalid) {
      return;
    }

    // TODO on sign in redirect to calendar page
    return this.authService.signIn(this.loginForm.value).subscribe(
      (response) => {
        console.log('RESPONSE', response);
        this.authService.user.next(response);
      },
      (error) => {
        console.log('ERROR', error);
        console.log(error.error.errors.detail);
      }
    );
  }

  // DELETE THIS; ONLY HERE FOR CHECKING COOKIES
  check() {
    return this.authService.check().subscribe(
      (response) => console.log('RES', response),
      (error) => console.log('ERR', error)
    );
  }

  // DELETE THIS; PLACE IN BETTER PLACE
  signOut() {
    return this.authService.signOut().subscribe(
      (response) => console.log('RES', response),
      (error) => console.log('ERR', error)
    );
  }
}
