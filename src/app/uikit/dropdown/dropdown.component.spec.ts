import { CommonModule } from "@angular/common";
import { async, ComponentFixture, fakeAsync, TestBed, tick } from "@angular/core/testing";
import { FormsModule } from "@angular/forms";
import { By } from "@angular/platform-browser";
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { BsDropdownConfig, BsDropdownModule } from "ngx-bootstrap/dropdown";
import { ModalModule } from "ngx-bootstrap/modal";
import { DropdownSearchModule } from "./dropdown-search/dropdown-search.module";
import { DropdownComponent } from "./dropdown.component";

describe("DropdownComponent", () => {
  let component: DropdownComponent;
  let fixture: ComponentFixture<DropdownComponent>;
  const options = [
    {
      key: "1",
      value: "Test",
    },
    {
      key: "2",
      value: "Testing",
    },
  ];

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [
        CommonModule,
        BrowserAnimationsModule,
        FormsModule,
        DropdownSearchModule,
        BsDropdownModule.forRoot(),
        ModalModule.forRoot(),
      ],
      declarations: [DropdownComponent],
      providers: [BsDropdownConfig],
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DropdownComponent);
    component = fixture.componentInstance;
  });

  it("should create", () => {
    expect(component).toBeTruthy();
  });

  it("should initialize label", () => {
    component.label = "Test";

    fixture.detectChanges();

    const element = fixture.debugElement.query(By.css(".field-label")).nativeElement;
    expect(element.textContent.trim()).toEqual(component.label);
  });

  it("should initialize options", fakeAsync(() => {
    component.label = "Testing";
    component.placeholder = "Select a value";
    component.options = options;
    fixture.detectChanges();

    const button = fixture.debugElement.query(By.css("#dropdown-button")).nativeElement;
    button.click();

    tick();
    fixture.detectChanges();

    const element = fixture.debugElement.queryAll(By.css("ul"));
    expect(element).not.toBeNull();
  }));

  it("should show options in the dropdown list", fakeAsync(() => {
    component.label = "Testing";
    component.placeholder = "Select a value";
    component.options = options;
    fixture.detectChanges();

    const button = fixture.debugElement.query(By.css("#dropdown-button")).nativeElement;
    button.click();

    tick();
    fixture.detectChanges();

    const element = fixture.debugElement.queryAll(By.css("ul > div > li"));
    expect(element.length).toBe(component.options.length);
  }));

  it("should clear text from search box", () => {
    component.searchFilter = "Test";
    component.searchFilterPlaceholder = "Search a Value";
    component.isSearchable = true;
    component.options = options;
    component.resetFilter = true;
    expect(component.searchFilter).toEqual("");
  });

  it("should reset search filter", () => {
    component.searchFilter = "Test";
    component.resetSearchFilter();
    expect(component.searchFilter).toEqual("");
  });

  it("should not reset filter if the search filter is already empty", () => {
    spyOn(component, "updateDropdownOptions");

    component.searchFilter = "";
    component.resetFilter = true;

    // eslint-disable-next-line @typescript-eslint/unbound-method
    expect(component.updateDropdownOptions).toHaveBeenCalledTimes(0);
  });

  it("should reset selected value", fakeAsync(() => {
    component.options = options;

    fixture.detectChanges();

    const button = fixture.debugElement.query(By.css("#dropdown-button")).nativeElement;
    button.click();

    tick();
    fixture.detectChanges();

    const item = fixture.debugElement.query(By.css(".menu-item")).nativeElement;
    item.click();

    fixture.detectChanges();

    const clearIcon = fixture.debugElement.query(By.css(".clear-icon")).nativeElement;
    clearIcon.click();

    fixture.detectChanges();

    expect(component.value).toEqual(null);
  }));

  it("should set value and call onChange", () => {
    spyOn(component, "onChange");

    const newValue = [1, 2, 3];
    component.value = [1, 2, 3];

    expect(component.value).toEqual(newValue);
    expect(component.onChange).toHaveBeenCalledWith(newValue);
  });

  it("should register onChange function", () => {
    const fn = function(): number {
      return 1;
    };
    component.registerOnChange(fn);
    expect(component.onChange).toEqual(fn);
  });

  it("should register onTouched function", () => {
    const fn = function(): number {
      return 1;
    };
    component.registerOnTouched(fn);
    expect(component.onTouched).toEqual(fn);
  });

  it("should write value", () => {
    const value = [1, 2];
    component.writeValue(value);
    expect(component.value).toEqual(value);
  });

  [
    [true, false],
    [false, true],
  ].forEach(([oldValue, newValue]) => {
    it(`should set disabled state from ${oldValue} to ${newValue}`, () => {
      component.disabled = oldValue;
      component.setDisabledState(newValue);

      expect(component.disabled).toEqual(newValue);
    });
  });

  describe("External Search", () => {
    beforeEach(() => {
      component.isSearchable = true;
      component.useExternalSearch = true;
    });

    it("should emit search filter value after user finished typing", fakeAsync(() => {
      spyOn(component.fetchOptions, "emit");

      fixture.detectChanges();

      component.updateDropdownOptions("filter 1");
      component.updateDropdownOptions("filter 2");

      tick(500);

      // eslint-disable-next-line @typescript-eslint/unbound-method
      expect(component.fetchOptions.emit).toHaveBeenCalledTimes(1);
      // eslint-disable-next-line @typescript-eslint/unbound-method
      expect(component.fetchOptions.emit).toHaveBeenCalledWith("filter 2");
    }));

    it("should not emit search filter value if isSearchable is false", fakeAsync(() => {
      spyOn(component.fetchOptions, "emit");

      component.isSearchable = false;
      fixture.detectChanges();

      component.updateDropdownOptions("filter 1");

      tick(500);

      // eslint-disable-next-line @typescript-eslint/unbound-method
      expect(component.fetchOptions.emit).toHaveBeenCalledTimes(0);
    }));

    it("should reset options if search filter text is less than 3 characters long", () => {
      component.options = options;
      component.updateDropdownOptions("ne");

      expect(component.options).toEqual([]);
    });

    it("should update selected value if the options change while a value is selected", fakeAsync(() => {
      component.options = options;

      fixture.detectChanges();

      const button = fixture.debugElement.query(By.css("#dropdown-button")).nativeElement;
      button.click();

      tick();
      fixture.detectChanges();

      const item = fixture.debugElement.query(By.css(".menu-item")).nativeElement;
      item.click();

      fixture.detectChanges();

      expect(component.displayValue).toEqual(options[0].value);

      component.options = [];

      fixture.detectChanges();

      expect(component.displayValue).toEqual(component.placeholder);
    }));

    it("should reset searchFilter", () => {
      component.searchFilter = "filter";
      component.reset();

      expect(component.searchFilter).toEqual("");
    });
  });
});
