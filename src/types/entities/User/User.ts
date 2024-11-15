export interface User {
  id: number;
  email: string;
  firstName: string;
  lastName: string;
}

export interface CreateUser extends Omit<User, "id"> {
  password: string;
}

export interface LoginUser extends Pick<User, "email"> {
  password: string;
}
