import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/core/auth.service';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { MustMatch } from 'src/app/shared/utils/must-match.validator';
import {
  AccountPermissions,
  SignUpCredentials,
} from 'src/app/shared/types/index.types';
import { ApiError } from 'src/app/shared/models/apiError.model';
import { faLock, faUser } from '@fortawesome/free-solid-svg-icons';
import { Router } from '@angular/router';
import { CelebSignUp } from 'src/app/shared/models/celeb.model';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css'],
})
export class RegisterComponent {
  registerForm: FormGroup;
  formErrorMessage = '';
  faUser = faUser;
  faLock = faLock;
  submitted = false;
  isSubmitting = false;

  constructor(
    private authService: AuthService,
    private formBuilder: FormBuilder,
    private router: Router
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
        accountType: ['fan', [Validators.required]],
        name: [''],
        description: [''],
        followers: [0],
        image: [''],
        birthday: [new Date('1997-09-12')],
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

  showErrors(inputField: string) {
    return this.f[inputField].errors && this.submitted;
  }

  // TODO on register, redirect to sign in screen
  onSubmit() {
    this.submitted = true;
    if (this.registerForm.invalid) {
      return;
    }
    const userParams = {
      username: this.registerForm.value.username,
      password: this.registerForm.value.password,
      perm: this.registerForm.value.accountType,
    };
    const celebParams = this.registerForm.value.name
      ? {
          name: this.registerForm.value.name,
          description: this.registerForm.value.description,
          followers: this.registerForm.value.followers,
          image: this.registerForm.value.image,
          birthday: this.registerForm.value.birthday,
        }
      : null;
    const registerInput: SignUpCredentials = this.buildRegisterInput(
      userParams,
      celebParams
    );
    this.isSubmitting = true;

    return this.authService.register(registerInput).subscribe(
      (response) => {
        this.isSubmitting = false;
        this.authService.user.next(response);
        alert(`Successfully created account: ${response.username}`);
        this.router.navigate(['/calendar']);
      },
      (error: any) => {
        const errorObj = new ApiError(
          error.status,
          error.error.errors.detail,
          error
        );
        errorObj.processError();
        if (errorObj.getCode === 400) {
          this.formErrorMessage = errorObj.getMessage;
        }
        this.isSubmitting = false;
      }
    );
  }

  private buildRegisterInput(
    userParams: any,
    celebParams: any
  ): SignUpCredentials {
    return celebParams
      ? { user: userParams, celeb: celebParams as CelebSignUp }
      : { user: userParams };
  }
}
