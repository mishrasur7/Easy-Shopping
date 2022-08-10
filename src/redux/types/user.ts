export interface User {
  id: string;
  firstName: string;
  lastName: string;
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
    password: string | undefined
}
