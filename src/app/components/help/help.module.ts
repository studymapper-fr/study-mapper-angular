import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { HelpComponent } from "./help.component";

@NgModule({
  declarations: [HelpComponent],
  imports: [FormsModule, ReactiveFormsModule, CommonModule],
})
export class HelpModule {}
