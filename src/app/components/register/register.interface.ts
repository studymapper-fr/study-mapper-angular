export interface User {
  email: string;
  firstName?: string;
  lastName?: string;
  password: string;
  city?: string;
  state?: string;
  zipCode?: string;
  country?: string;
  active?: boolean;
  createdAt?: Date;
  updatedAt?: Date;
}

export interface RegisterResponse {
  status: string;
  data: {
    user: User;
  };
  message: string;
}
