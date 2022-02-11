import { BrowserModule } from "@angular/platform-browser";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from "@angular/core";
import { ResumeComponent } from "./resume.component";
import { CommonModule } from "@angular/common";

@NgModule({
  declarations: [ResumeComponent],
  imports: [FormsModule, ReactiveFormsModule, CommonModule],
})
export class ResumeModule {}
