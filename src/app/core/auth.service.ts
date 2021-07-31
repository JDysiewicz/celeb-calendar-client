import { Injectable, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import {
  SignInCredentials,
  SignUpApiParams,
  SignUpCredentials,
} from '../shared/types/index.types';
import { User } from '../shared/models/user.model';
import { map } from 'rxjs/operators';
import { BehaviorSubject } from 'rxjs';

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
      .post<{ data: User }>(
        'http://127.0.0.1:4000/api/users/sign_in',
        credentials,
        {
          withCredentials: true,
        }
      )
      .pipe(map((response) => response.data));
  }

  register(credentials: SignUpCredentials) {
    const userParams = this.createUserParams(credentials);
    return this.http
      .post<{ data: User }>('http://127.0.0.1:4000/api/users', userParams)
      .pipe(map((response) => response.data));
  }

  // DELETE THIS; ONLY HERE FOR CHECKING COOKIES
  check() {
    return this.http.get<any>('http://127.0.0.1:4000/api/users', {
      withCredentials: true,
    });
  }

  currentUser() {
    console.log('SOMETHING');
    return this.http
      .get<{ data: User }>(
        'http://127.0.0.1:4000/api/users/current',

        { withCredentials: true }
      )
      .pipe(map((response) => response.data));
  }

  signOut() {
    return this.http.post<{ message: string }>(
      'http://127.0.0.1:4000/api/users/sign_out',
      {},
      { withCredentials: true }
    );
  }

  // user data and celeb data (if applicable) needs to be passed in this format as this is what API expects
  private createUserParams(credentials: SignUpCredentials) {
    let userParams: SignUpApiParams = {
      user: {
        username: credentials.username,
        password: credentials.password,
        perm: credentials.perm,
      },
    };

    if (credentials.celebInfo) {
      userParams.celeb = credentials.celebInfo;
    }

    return userParams;
  }
}
