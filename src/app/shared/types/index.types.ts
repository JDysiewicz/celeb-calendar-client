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