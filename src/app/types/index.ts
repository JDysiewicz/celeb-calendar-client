import { ValidationErrors } from '@angular/forms';

export interface SignInCredentials {
  username: string;
  password: string;
}

export type AccountPermissions = 'admin' | 'celeb' | 'manager' | 'fan';

export interface SignUpApiParams {
  user: { username: string; password: string; perm: AccountPermissions };
  celeb?: Celeb;
}

export type MonthString =
  | '0'
  | '1'
  | '2'
  | '3'
  | '4'
  | '5'
  | '6'
  | '7'
  | '8'
  | '9'
  | '10'
  | '11';

export interface Celeb {
  id: string;
  birthday: Date;
  description: string;
  followers: number;
  image: string | null;
  isPrivate: boolean;
  managerId: string;
  userId: string;
  name: string;
}

export interface User {
  id: string;
  username: string;
  perm: AccountPermissions;
}

export interface FormError {
  error: string;
  message: string;
}
