import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { PrivacyComponent } from "./privacy.component";

@NgModule({
  declarations: [PrivacyComponent],
  imports: [FormsModule, ReactiveFormsModule, CommonModule],
})
export class PrivacyModule {}
