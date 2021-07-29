export interface Celeb {
  id: string;
  birthday: Date;
  description: string;
  followers: number;
  image: string | null;
  isPrivate: boolean;
  managerId: string;
  userId: string;
}
