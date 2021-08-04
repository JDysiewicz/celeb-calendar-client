import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { ApiError } from 'src/app/core/models/apiError.model';
import { AuthService } from 'src/app/core/services/auth.service';
import { LoginForm } from './types';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent {
  isSubmitting = false;
  formErrorMessage = '';

  constructor(private authService: AuthService, private router: Router) {}

  onSubmit(formValues: LoginForm) {
    this.isSubmitting = true;

    return this.authService.signIn(formValues).subscribe(
      (response) => {
        this.authService.user.next(response);
        this.isSubmitting = false;
        alert(`Welcome, ${this.authService.user.getValue()?.username}`);
        this.router.navigate(['/calendar']);
      },
      (error) => {
        const errorObj = new ApiError(
          error.status,
          error.error.errors.detail,
          error
        );
        errorObj.processError();
        this.isSubmitting = false;
        if (errorObj.getCode == 401) {
          this.formErrorMessage = errorObj.getMessage;
        }
      }
    );
  }
}
