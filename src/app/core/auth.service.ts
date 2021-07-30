import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import {
  SignInCredentials,
  SignUpApiParams,
  SignUpCredentials,
} from '../shared/types/index.types';
import { User } from '../shared/models/user.model';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
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

  check() {
    return this.http.get<any>('http://127.0.0.1:4000/api/users', {
      withCredentials: true,
    });
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
