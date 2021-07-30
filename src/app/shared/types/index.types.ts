import { Celeb } from '../models/celeb.model';

export interface SignUpCredentials {
  username: string;
  password: string;
  perm: AccountPermissions;
  celebInfo?: Celeb;
}

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
