import { Component, OnInit } from "@angular/core";
import { FormControl, FormGroup, Validators } from "@angular/forms";
import { Router } from "@angular/router";
import { CATEGORIES } from "./register.constant";
@Component({
  selector: "app-register",
  templateUrl: "./register.component.html",
  styleUrls: ["./register.component.scss"],
})
export class RegisterComponent implements OnInit {
  public categories: any = CATEGORIES;

  public registerForm: FormGroup | undefined;

  constructor(private router: Router) {}

  ngOnInit(): void {
    this.registerForm = new FormGroup({
      firstName: new FormControl("Nancy", Validators.minLength(2)),
      lastName: new FormControl("Drew"),
      email: new FormControl(""),
      cellPhoneNo: new FormControl(""),
      password: new FormControl(""),
      confirmPassword: new FormControl(""),
    });
  }

  navigateToLogin() {
    this.router.navigateByUrl("/login");
  }
}
