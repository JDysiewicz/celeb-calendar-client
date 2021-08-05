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
  id: number;
  birthday: string; // ISO8601 formatted e.g. yyyy-mm-dd
  description: string;
  followers: number;
  image: string | null;
  is_private: boolean;
  manager: string | null;
  user_id: number;
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

export interface Month {
  idx: string;
  name: string;
  shortName: string;
  days: number;
}

export type ISOMonthDay = string;
