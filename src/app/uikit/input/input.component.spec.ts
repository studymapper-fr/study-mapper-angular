import { async, ComponentFixture, TestBed } from "@angular/core/testing";
import { FormsModule } from "@angular/forms";
import { By } from "@angular/platform-browser";
import { InputComponent } from "./input.component";

describe("FilterInputComponent", () => {
  let component: InputComponent;
  let fixture: ComponentFixture<InputComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [InputComponent],
      imports: [FormsModule],
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(InputComponent);
    component = fixture.componentInstance;
  });

  it("should create", () => {
    expect(component).toBeTruthy();
  });

  it("should initialize input variable label", () => {
    component.label = "testing";

    fixture.detectChanges();

    const element = fixture.debugElement.query(By.css(".field-label")).nativeElement;
    expect(element.textContent.trim()).toEqual(component.label);
  });

  it("should initialize input variable placeholder", () => {
    component.placeholder = "test";

    fixture.detectChanges();

    const element = fixture.debugElement.query(By.css(".inner-field")).nativeElement;
    expect(element.getAttribute("placeholder")).toEqual(component.placeholder);
  });

  it("should initialize suffix variables", () => {
    component.suffix = "testSuffix";

    fixture.detectChanges();

    const element = fixture.debugElement.query(By.css(".input-group-addon")).nativeElement;
    expect(element.textContent.trim()).toEqual(component.suffix);
  });

  it("should initialize prefix variables", () => {
    component.prefix = "testPrefix";

    fixture.detectChanges();

    const element = fixture.debugElement.query(By.css(".input-group-addon")).nativeElement;
    expect(element.textContent.trim()).toEqual(component.prefix);
  });
});
