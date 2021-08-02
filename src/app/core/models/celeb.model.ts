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

export interface CelebSignUp {
  birthday: Date;
  description: string;
  followers: number;
  image: string | null;
  name: string;
}
