import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { environment } from "@root/environments/environment";
import { User } from "../register/register.interface";
import { LoginResponse } from "./login.interface";

@Injectable()
export class LoginService {
  constructor(private http: HttpClient) {}

  login(user: User): Observable<LoginResponse> {
    return this.http.post<LoginResponse>(
      `${environment.baseUrl}/v1/users/login`,
      user
    );
  }
}
