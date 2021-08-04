import { Component } from '@angular/core';

import { Router } from '@angular/router';

import { AuthService } from 'src/app/core/services/auth.service';
import { ApiError } from 'src/app/shared/models/ApiError.model';
import { CelebSignUp, RegisterFormValeus, SignUpCredentials } from './types';

@Component({
  selector: 'app-register',
  templateUrl: './register.page.html',
  styleUrls: ['./register.page.css'],
})
export class RegisterPage {
  formErrorMessage = '';

  isSubmitting = false;

  constructor(private authService: AuthService, private router: Router) {}

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
