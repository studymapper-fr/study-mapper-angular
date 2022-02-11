import { Directive, forwardRef, Input } from "@angular/core";
import { ControlValueAccessor, NG_VALUE_ACCESSOR } from "@angular/forms";
import { DropdownOption } from "../dropdown.component";

@Directive({
  selector: "app-dropdown",
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      multi: true,
      // eslint-disable-next-line no-use-before-define, @typescript-eslint/no-use-before-define
      useExisting: forwardRef(() => DropdownComponentMock),
    },
  ],
})
export class DropdownComponentMock implements ControlValueAccessor {
  // eslint-disable-next-line @typescript-eslint/no-empty-function
  writeValue(): void {}

  // eslint-disable-next-line @typescript-eslint/no-empty-function
  registerOnChange(): void {}

  // eslint-disable-next-line @typescript-eslint/no-empty-function
  registerOnTouched(): void {}

  @Input() label: string;

  @Input() options: DropdownOption[];

  @Input() isSearchable = false;

  @Input() resetFilter: boolean;

  @Input() showClearIcon = true;

  @Input() dropup = false;

  @Input() placeholder: string;

  @Input() ngModel: any;

  @Input() disabled = false;

  @Input() useExternalSearch = false;

  @Input() showError: boolean;
}
