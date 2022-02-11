import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from "@angular/core";
import { BrowserModule } from "@angular/platform-browser";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { IconButtonModule } from "./icon-button/icon-button.module";
import { InputModule } from "./input/input.module";
import { DropdownModule } from "./dropdown/dropdown.module";
import { BsDropdownModule } from "ngx-bootstrap/dropdown";
import { BsDatepickerModule } from "ngx-bootstrap/datepicker";

const UIKIT_COMPONENT = [IconButtonModule, InputModule, DropdownModule];

@NgModule({
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    BsDatepickerModule,
    BsDropdownModule,
    ...UIKIT_COMPONENT,
  ],
  exports: [...UIKIT_COMPONENT],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
})
export class UIKitModule {}
