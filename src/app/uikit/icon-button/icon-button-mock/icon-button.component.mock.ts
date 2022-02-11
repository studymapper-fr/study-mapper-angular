import { Directive, Input } from "@angular/core";

@Directive({
  selector: "app-icon-button",
})
export class IconButtonComponentMock {
  @Input() buttonType: string;

  @Input() type: string;

  @Input() outline = false;

  @Input() icon: string;

  @Input() text: string;

  @Input() disabled = false;
}
