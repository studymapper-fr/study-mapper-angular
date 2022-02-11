import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { IconButtonComponentMock } from "./icon-button.component.mock";

@NgModule({
  imports: [CommonModule],
  declarations: [IconButtonComponentMock],
  exports: [IconButtonComponentMock],
  providers: [],
})
export class IconButtonMockModule {}
