import { Component } from '@angular/core';

import { Router } from '@angular/router';

import { SignUpCredentials } from 'src/app/core/models/index.types';
import { ApiError } from 'src/app/core/models/apiError.model';
import { CelebSignUp } from 'src/app/core/models/celeb.model';
import { AuthService } from 'src/app/core/services/auth.service';
import { RegisterFormValeus } from './types';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css'],
})
export class RegisterComponent {
  formErrorMessage = '';

  isSubmitting = false;

  constructor(private authService: AuthService, private router: Router) {}

  // TODO on register, redirect to sign in screen
  onSubmit(formValues: RegisterFormValeus) {
    const userParams = {
      username: formValues.username,
      password: formValues.password,
      perm: formValues.accountType,
    };
    const celebParams = formValues.name
      ? {
          name: formValues.name,
          description: formValues.description,
          followers: formValues.followers,
          image: formValues.image,
          birthday: formValues.birthday,
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
