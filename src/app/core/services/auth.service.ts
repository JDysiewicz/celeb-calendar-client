import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs/operators';
import { BehaviorSubject } from 'rxjs';
import { SignInCredentials, User } from 'src/app/types';
import { SignUpCredentials } from 'src/app/features/register/types';

// TODO find way to persist user login state in Angular app; already stores user login cookie so need a way
// to access user info when user is signed in, and set to null when user logs out
@Injectable({
  providedIn: 'root',
})
export class AuthService {
  user: BehaviorSubject<User | null> = new BehaviorSubject<User | null>(null);

  constructor(private http: HttpClient) {}

  signIn(credentials: SignInCredentials) {
    return this.http
      .post<{ data: { user: User } }>(
        'http://127.0.0.1:4000/api/users/sign_in',
        credentials,
        {
          withCredentials: true,
        }
      )
      .pipe(map((response) => response.data.user));
  }

  register(credentials: SignUpCredentials) {
    return this.http
      .post<{ data: User }>('http://127.0.0.1:4000/api/users', credentials)
      .pipe(map((response) => response.data));
  }

  currentUser() {
    return this.http
      .get<{ data: { user: User } }>(
        'http://127.0.0.1:4000/api/users/current',

        { withCredentials: true }
      )
      .pipe(map((response) => response.data.user));
  }

  signOut() {
    return this.http.post<{ message: string }>(
      'http://127.0.0.1:4000/api/users/sign_out',
      {},
      { withCredentials: true }
    );
  }
}
