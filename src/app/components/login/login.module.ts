import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from "@angular/core";
import { BrowserModule } from "@angular/platform-browser";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { UIKitModule } from "src/app/uikit/uikit.module";
import { LoginService } from "./login.service";
import { LoginComponent } from "./login.component";
import { CommonModule } from "@angular/common";

@NgModule({
  declarations: [LoginComponent],
  imports: [CommonModule, FormsModule, ReactiveFormsModule, UIKitModule],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
  providers: [LoginService],
})
export class LoginModule {}
