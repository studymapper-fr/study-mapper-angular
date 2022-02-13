import { Component, OnInit } from "@angular/core";
import { FormControl, FormGroup, Validators } from "@angular/forms";
import { Router } from "@angular/router";
import { NotificationService } from "@app/utility/notification.service";
import { StorageService } from "@app/utility/storage.service";
import { User } from "../register/register.interface";
import { LoginResponse } from "./login.interface";
import { LoginService } from "./login.service";
@Component({
  selector: "app-login",
  templateUrl: "./login.component.html",
  styleUrls: ["../register/register.component.scss"],
})
export class LoginComponent implements OnInit {
  public loginForm: FormGroup;

  constructor(
    private router: Router,
    private storageService: StorageService,
    private loginService: LoginService,
    private notificationService: NotificationService
  ) {}

  ngOnInit(): void {
    this.loginForm = new FormGroup({
      email: new FormControl(""),
      password: new FormControl(""),
    });
  }

  login(): void {
    const user: User = this.loginForm?.value;
    this.loginService.login(user).subscribe(
      (result: LoginResponse) => {
        const { user, token } = result.data;
        this.storageService.set("token", token);
        this.storageService.set("userInfo", JSON.stringify(user));
        this.router.navigateByUrl("/dashboard");
        this.notificationService.showSuccess(result);
      },
      (error) => {
        this.notificationService.showError(error);
      }
    );
  }

  navigateToRegister() {
    this.router.navigateByUrl("/register");
  }
}
