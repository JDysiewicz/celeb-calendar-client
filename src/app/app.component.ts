import { Component, OnInit } from '@angular/core';
import { AuthService } from './core/auth.service';
import { ApiError } from './shared/models/apiError.model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent implements OnInit {
  constructor(private authService: AuthService) {}

  ngOnInit() {
    this.authService.currentUser().subscribe(
      (response) => {
        this.authService.user.next(response);
      },
      (error) => {
        this.authService.user.next(null);
        const errorObj = new ApiError(
          error.status,
          error.error.errors.detail,
          error
        );
        if (errorObj.getCode == 401) {
          console.log('No user');
        } else {
          errorObj.processError();
        }
      }
    );
  }
}
