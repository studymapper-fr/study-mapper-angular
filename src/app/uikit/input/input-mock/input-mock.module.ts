import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { InputComponentMock } from "./input.component.mock";

@NgModule({
  imports: [CommonModule],
  declarations: [InputComponentMock],
  exports: [InputComponentMock],
  providers: [],
})
export class InputMockModule {}
