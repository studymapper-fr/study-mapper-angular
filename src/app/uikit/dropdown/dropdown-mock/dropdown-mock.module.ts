import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { BsDropdownModule } from "ngx-bootstrap/dropdown";
import { DropdownSearchModule } from "../dropdown-search/dropdown-search.module";
import { DropdownComponentMock } from "./dropdown.component.mock";

@NgModule({
  imports: [CommonModule, DropdownSearchModule, BsDropdownModule],
  declarations: [DropdownComponentMock],
  exports: [DropdownComponentMock],
  providers: [],
})
export class DropdownMockModule {}
