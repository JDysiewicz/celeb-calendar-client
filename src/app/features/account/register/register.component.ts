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

  // TODO on register, redirect to sign in screen
  register() {
    if (this.registerForm.invalid) {
      return;
    }
    const registerInput: SignUpCredentials = this.buildRegisterInput(
      this.registerForm.value
    );

    return this.authService.register(registerInput).subscribe(
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
