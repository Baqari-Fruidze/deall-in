export interface IUser {
  username: string;
  email: string;
  password1: string;
  password2: string;
  role: string;
  month: string;
  year: string;
  day: string;
}

export interface ILogin {
  password: string;
  email: string;
}

export interface IerrorsInRegister {
  email?: string[];
  username?: string[];
}
