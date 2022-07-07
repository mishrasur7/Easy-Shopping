export interface User {
  id: string;
  name: string;
  password: string | undefined;
  email: string;
  role: UserRole;
  avatar: string | undefined;
}

export interface UserReducerState {
    userlist: User[], 
    currentUser: User | undefined
}

export type UserRole = "customer" | "admin";

export interface Login {
    email: string, 
    password: string
}
