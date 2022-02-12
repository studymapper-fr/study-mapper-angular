import { Injectable } from "@angular/core";
import { JwtHelperService } from "@auth0/angular-jwt";

@Injectable()
export class AuthService {
  public getToken(): string | null {
    return localStorage.getItem("token");
  }

  public isAuthenticated(): boolean {
    const helper = new JwtHelperService();
    const token = this.getToken();
    return token ? helper.isTokenExpired(token) : false;
  }
}