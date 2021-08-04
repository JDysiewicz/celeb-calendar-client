import { AccountPermissions } from 'src/app/types';

export interface RegisterFormValeus {
  username: string;
  password: string;
  passwordConfirmation: string;
  accountType: AccountPermissions;
  name?: string;
  description?: string;
  followers?: number;
  image?: string;
  birthday?: Date;
}

export interface CelebSignUp {
  birthday: Date;
  description: string;
  followers: number;
  image: string | null;
  name: string;
}
export interface SignUpCredentials {
  user: { username: string; password: string; perm: AccountPermissions };
  celeb?: CelebSignUp;
}
