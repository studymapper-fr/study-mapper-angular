import { User } from "../register/register.interface";

export interface LoginResponse {
  status: string;
  data: {
    user: User;
    token: string;
  };
  message: string;
}
