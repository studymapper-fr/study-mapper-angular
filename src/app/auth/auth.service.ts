import { Injectable } from "@angular/core";
import { StorageService } from "@app/utility/storage.service";
import { JwtHelperService } from "@auth0/angular-jwt";
import { TOKEN, USER_INFORMATION } from "./auth.constant";

@Injectable()
export class AuthService {
  constructor(private storageService: StorageService) {}

  public getToken(): string | null {
    return localStorage.getItem(TOKEN);
  }

  public isAuthenticated(): boolean {
    const helper = new JwtHelperService();
    const token = this.getToken();
    if (token) {
      return !helper?.isTokenExpired(token);
    } else return false;
  }

  public logout(): void {
    this.storageService.remove(TOKEN);
    this.storageService.remove(USER_INFORMATION);
  }
}
