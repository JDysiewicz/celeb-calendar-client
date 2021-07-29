import { AccountPermissions } from '../types/index.types';

export interface User {
  id: string;
  username: string;
  perm: AccountPermissions;
}
