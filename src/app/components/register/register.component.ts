import { Component, OnInit } from "@angular/core";
import { FormControl, FormGroup, Validators } from "@angular/forms";
import { Router } from "@angular/router";
import { NotificationService } from "@app/utility/notification.service";
import { StorageService } from "@app/utility/storage.service";
import { CATEGORIES } from "./register.constant";
import { RegisterResponse, User } from "./register.interface";
import { RegisterService } from "./register.service";
@Component({
  selector: "app-register",
  templateUrl: "./register.component.html",
  styleUrls: ["./register.component.scss"],
})
export class RegisterComponent implements OnInit {
  public categories: any = CATEGORIES;

  public registerForm: FormGroup;

  constructor(
    private router: Router,
    private registerService: RegisterService,
    private notificationService: NotificationService
  ) {}

  ngOnInit(): void {
    this.registerForm = new FormGroup({
      firstName: new FormControl("", [Validators.required]),
      lastName: new FormControl("", [Validators.required]),
      email: new FormControl("", [Validators.required]),
      password: new FormControl("", [Validators.required]),
      confirmPassword: new FormControl("", [Validators.required]),
    });
  }

  submit(): void {
    const user: User = this.registerForm?.value;
    this.registerService.postUser(user).subscribe(
      (result: RegisterResponse) => {
        this.notificationService.showSuccess(result);
        this.registerForm.reset();
        this.navigateToLogin();
      },
      (error) => console.error(error)
    );
  }

  navigateToLogin() {
    this.router.navigateByUrl("/login");
  }
}
