import {
  Component,
  EventEmitter,
  forwardRef,
  Input,
  Output,
  ViewChild,
} from "@angular/core";
import { ControlValueAccessor, NG_VALUE_ACCESSOR } from "@angular/forms";

@Component({
  selector: "app-input",
  templateUrl: "./input.component.html",
  styleUrls: ["./input.component.scss"],
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: forwardRef(() => InputComponent),
      multi: true,
    },
  ],
})
export class InputComponent implements ControlValueAccessor {
  @ViewChild("input", { static: false }) input: any;

  @Input() label: string = "";

  /**
   * The type is bound to the native control.
   * Following options can be used in the templates
   * "text" | "number" | "tel"
   * */
  @Input() type = "text";

  @Input() placeholder = "";

  @Input() disabled: boolean = false;

  @Input() required: boolean = false;

  @Input() tabIndex: number | string = 0;

  @Input() maxLength: number | string = "";

  @Input() showError: boolean = false;

  @Output() keyUp: EventEmitter<any> = new EventEmitter<any>();

  @Output() blur: EventEmitter<any> = new EventEmitter<any>();

  @Output() keyDown: EventEmitter<any> = new EventEmitter<any>();

  @Output() keyPress: EventEmitter<any> = new EventEmitter<any>();

  @Output() onFocus: EventEmitter<any> = new EventEmitter<any>();

  @Output() onValueChange: EventEmitter<any> = new EventEmitter<any>();

  @Input() prefix: string | number = "";

  @Input() suffix: string | number = "";

  @Input()
  set focus(value: boolean) {
    value && this.input.nativeElement.focus();
  }

  private inputModel: string = "";

  onChange: Function = () => {};

  onTouched: Function = () => {};

  get value(): string {
    return this.inputModel;
  }

  set value(newVal: string) {
    this.inputModel = newVal;
    this.onChange(newVal);
  }

  /**
   * Registers onChange method
   * @override
   */
  registerOnChange(fn: Function): void {
    this.onChange = fn;
  }

  /**
   * Registers onTouched method
   * @override
   */
  registerOnTouched(fn: Function): void {
    this.onTouched = fn;
  }

  /**
   * Overrides the method in @see {@link ControlValueAccessor}
   * @override
   */
  writeValue(newValue: string): void {
    this.value = newValue;
  }

  setDisabledState(isDisabled: boolean): void {
    this.disabled = isDisabled;
  }
}
