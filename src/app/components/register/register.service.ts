import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { RegisterResponse, User } from "./register.interface";
import { environment } from "@root/environments/environment";

@Injectable()
export class RegisterService {
  constructor(private http: HttpClient) {}

  postUser(user: User): Observable<RegisterResponse> {
    return this.http.post<RegisterResponse>(
      `${environment.baseUrl}/v1/users/new`,
      user
    );
  }
}
