import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from "@angular/core";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { RegisterComponent } from "./register.component";
import { UIKitModule } from "src/app/uikit/uikit.module";
import { RegisterService } from "./register.service";
import { CommonModule } from "@angular/common";

@NgModule({
  declarations: [RegisterComponent],
  imports: [CommonModule, FormsModule, ReactiveFormsModule, UIKitModule],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
  providers: [RegisterService],
})
export class RegisterModule {}
