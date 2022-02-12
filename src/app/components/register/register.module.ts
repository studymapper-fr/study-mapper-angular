import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from "@angular/core";
import { BrowserModule } from "@angular/platform-browser";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { RegisterComponent } from "./register.component";
import { UIKitModule } from "src/app/uikit/uikit.module";
import { RegisterService } from "./register.service";
import { HttpClient, HttpHandler } from "@angular/common/http";

@NgModule({
  declarations: [RegisterComponent],
  imports: [BrowserModule, FormsModule, ReactiveFormsModule, UIKitModule],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
  providers: [RegisterService],
  bootstrap: [RegisterComponent],
})
export class RegisterModule {}
