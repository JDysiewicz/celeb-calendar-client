import { AccountPermissions } from './index.types';

export interface User {
  id: string;
  username: string;
  perm: AccountPermissions;
}
