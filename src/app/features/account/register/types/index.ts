import { AccountPermissions } from 'src/app/core/models/index.types';

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
