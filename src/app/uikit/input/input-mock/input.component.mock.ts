import { Directive, forwardRef, Input } from "@angular/core";
import { ControlValueAccessor, NG_VALUE_ACCESSOR } from "@angular/forms";

@Directive({
  selector: "app-input",
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      multi: true,
      // eslint-disable-next-line no-use-before-define, @typescript-eslint/no-use-before-define
      useExisting: forwardRef(() => InputComponentMock),
    },
  ],
})
export class InputComponentMock implements ControlValueAccessor {
  // eslint-disable-next-line @typescript-eslint/no-empty-function
  writeValue(): void {}

  // eslint-disable-next-line @typescript-eslint/no-empty-function
  registerOnChange(): void {}

  // eslint-disable-next-line @typescript-eslint/no-empty-function
  registerOnTouched(): void {}

  @Input() label: string;

  @Input() placeholder: string;

  @Input() ngModel: string;

  @Input() disabled: boolean;

  @Input() showError: boolean;
}
