import { Component, EventEmitter, Input, Output } from "@angular/core";
@Component({
  selector: "app-icon-button",
  templateUrl: "./icon-button.component.html",
  styleUrls: ["./icon-button.component.scss"],
})
export class IconButtonComponent {
  @Input() buttonType: string = "";

  @Input() type: string = "success";

  @Input() outline = false;

  @Input() icon: string = "";

  @Input() text: string = "";

  @Input() disabled = false;

  @Output() clicked: EventEmitter<any> = new EventEmitter();

  getButtonClass(): string {
    return this.outline
      ? `icon-button-outline-${this.type}`
      : `icon-button-${this.type}`;
  }
}
