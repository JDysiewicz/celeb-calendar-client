import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/core/auth.service';
import { ApiError } from '../../models/apiError.model';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css'],
})
export class NavbarComponent implements OnInit {
  constructor(private authService: AuthService, private router: Router) {}

  ngOnInit(): void {}

  currentUser() {
    return this.authService.user.getValue();
  }

  signOut() {
    return this.authService.signOut().subscribe(
      (response) => {
        this.authService.user.next(null);
        alert(response.message);
        this.router.navigate(['/login']);
      },
      (error) => {
        const errorObj = new ApiError(
          error.status,
          error.error.errors.detail,
          error
        );
        errorObj.processError();
      }
    );
  }
}
