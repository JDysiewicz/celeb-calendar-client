import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/core/auth.service';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { MustMatch } from 'src/app/shared/utils/must-match.validator';
import { SignUpCredentials } from 'src/app/shared/types/index.types';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css'],
})
export class RegisterComponent {
  registerForm: FormGroup;

  constructor(
    private authService: AuthService,
    private formBuilder: FormBuilder
  ) {}

  ngOnInit(): void {
    this.registerForm = this.formBuilder.group(
      {
        username: [
          '',
          [
            Validators.required,
            Validators.pattern(/^[a-zA-Z0-9]+$/),
            Validators.minLength(3),
            Validators.maxLength(14),
          ],
        ],
        password: [
          '',
          [
            Validators.required,
            Validators.minLength(4),
            Validators.maxLength(14),
          ],
        ],
        passwordConfirmation: [
          '',
          [
            Validators.required,
            Validators.minLength(4),
            Validators.maxLength(14),
          ],
        ],
      },
      {
        validator: MustMatch('password', 'passwordConfirmation'),
      }
    );
  }

  // Getter for form access
  get f() {
    return this.registerForm.controls;
  }

  // Pass in user credentials from authForm https://www.udemy.com/course/the-modern-angular-bootcamp/learn/lecture/17869670#overview
  register() {
    console.log('HI');
    if (this.registerForm.invalid) {
      console.log(this.registerForm.value);
      return;
    }
    const registerInput: SignUpCredentials = this.buildRegisterInput(
      this.registerForm.value
    );
    console.log(registerInput);

    const obs$ = this.authService.register(registerInput);
    obs$.subscribe(
      (response) => console.log('RESP', response),
      (error) => console.log('ERR', error)
    );
  }

  private buildRegisterInput({
    username,
    password,
  }: {
    username: string;
    password: string;
  }): SignUpCredentials {
    return { username, password, perm: 'fan' };
  }
}
