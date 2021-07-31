import { Component, OnInit } from '@angular/core';
import { AuthService } from './core/auth.service';

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
        console.log('RESPONSE', response);
        this.authService.user.next(response);
      },
      (error) => {
        if (error.status == 401) {
          console.log('NO USER');
        } else {
          console.log('INTERNVAL SERVER ERROR: ', error);
        }
        this.authService.user.next(null);
      }
    );
  }
}
