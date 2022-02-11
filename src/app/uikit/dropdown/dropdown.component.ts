import {
  Component,
  EventEmitter,
  forwardRef,
  Input,
  OnDestroy,
  OnInit,
  Output,
} from "@angular/core";
import { ControlValueAccessor, NG_VALUE_ACCESSOR } from "@angular/forms";

export interface DropdownOption extends Record<any, any> {
  key: any;
  value: string;
}

/**
  @description Filter Dropdown to be used in the Tablular view.
  @Input label {string} - the label refers to the title of the field.
  @Input resetFilter - refers to resetting of search filter
  @Input options {object} - the values are denoted in terms of FilterDropdownObject.
  @Input value {string} - This refers to the two way binded property.
  @Input placeholder {string} - This is the text that would be displayed as a placeholder.
  @Input disabled {boolean} - This is the boolean that enables or disabled the dropdown.
  @Input required {boolean} - This is refers state of field being required or not.
  @Input tabIndex {number | string} - This is refers tabIndex attribute which helps iterating the fields using tabs.
  @Input showError {boolean} - This refers error scenario in which styles for border & color of this field will be updated.
 */
@Component({
  selector: "app-dropdown",
  templateUrl: "./dropdown.component.html",
  styleUrls: ["./dropdown.component.scss"],
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: forwardRef(() => DropdownComponent),
      multi: true,
    },
  ],
})
export class DropdownComponent implements OnInit, ControlValueAccessor {
  /**
   * @description This clears the text from search field
   */
  @Input() set resetFilter(clearFieldFlag: boolean) {
    if (this.searchFilter) {
      this.updateDropdownOptions("");
    }
  }

  /**
   * @description This flag removes the outer-border from the button
   */
  @Input() noBorder = false;

  /**
   * @description This flag enables or disables search and select feature
   */
  @Input() isSearchable = false;

  /**
   * @description This flag enables or disables the visibility of clear-icon
   */
  @Input() showClearIcon = true;

  /**
   * @description This refers to default value in search field
   */
  @Input() searchFilterPlaceholder = `Search a value`;

  /**
   * @description The Label refers to the title of the field.
   * */
  @Input() label: string = "";

  /**
   * @description The Object is based on the . @see {@link DropdownObject}
   * @example { "key": 1, value: "Boston" }
   * */
  @Input()
  set options(newOptions: DropdownOption[]) {
    this.dropdownOptions = newOptions;
    this.displayedDropdownOptions = this.dropdownOptions;
    this.value && this.updateDisplayValue(this.value);
  }

  get options(): DropdownOption[] {
    return this.dropdownOptions;
  }

  /**
   * @description This refers to the placeholder value of the dropdown.
   * */
  @Input() placeholder = `Select a value`;

  /**
   * @description This refers to the control that enables a dropdown to be disabled.
   * */
  @Input() disabled = false;

  /**
   * @description This refers to the state of field being required or not.
   * */
  @Input() required = false;

  /**
   * @description This make the dropdown open up instead of down.
   * */
  @Input() dropup = false;

  /**
   * @description This refers number of tab sequence i.e. tabIndex
   * */
  @Input() tabIndex: number | string = "";

  /**
   * @description This refers error scenario in which styles for border & color of this field will be updated.
   * */
  @Input() showError: boolean = false;

  /**
   * @description Indicates whether we want to fetch the options from the parent component
   * while the user is typing in the search filter text.
   */
  @Input() useExternalSearch = false;

  /**
   * @description Indicates whether we want to show green checkmark against selected item or not
   */
  @Input() checkMark = false;

  /**
   * @description Emits the search filter value after the user finished typing, and
   * only if the search filter text is at least 3 characters long. The user is considered
   * to have finished typing if at least 500ms have passed since the last keystroke.
   * This happens only if `useExternalSearch` is set to `true`.
   */
  @Output() fetchOptions = new EventEmitter<string>();

  /**
   * @description Emits the selected value from the dropdown to the parent component.
   * */
  @Output() selectedValueChange = new EventEmitter<any>();

  /**
   * @description The value refers to the two wady binded current value from the dropdown.
   * */
  set value(newValue: any) {
    this.updateDisplayValue(newValue);
    this.selectedValue = newValue;
    this.selectedValueChange.emit(this.selectedValue);
    this.onChange(newValue);
  }

  get value(): any {
    return this.selectedValue;
  }

  private dropdownOptions: DropdownOption[] = [];

  public displayedDropdownOptions: DropdownOption[] = [];

  onChange: Function = () => {};

  onTouched: Function = () => {};

  public displayValue: string = "";

  public searchFilter = "";

  public selectedValue: any;

  ngOnInit(): void {
    this.displayValue = this.placeholder;
  }

  modelChange({ key }: any): void {
    this.value = key;
  }

  protected updateDisplayValue(selectedKey: any): void {
    this.displayValue = this.placeholder;

    if (selectedKey != null && this.options && this.options.length > 0) {
      this.displayValue = this.placeholder;
    }
  }

  updateDropdownOptions(updatedInputValue: string): void {
    this.searchFilter = updatedInputValue;
  }

  resetSearchFilter(): void {
    this.searchFilter = "";
  }

  resetSelectedValue(): void {
    this.value = null;
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
   * Overrides writeValue method @see {@link ControlValueAccessor}
   * @override
   */
  writeValue(value: string): void {
    this.value = value;
  }

  setDisabledState(isDisabled: boolean): void {
    this.disabled = isDisabled;
  }

  reset(): void {
    this.searchFilter = "";
    this.updateDropdownOptions("");
  }
}
