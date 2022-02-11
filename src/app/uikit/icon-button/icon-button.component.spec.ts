import { async, ComponentFixture, TestBed } from "@angular/core/testing";
import { By } from "@angular/platform-browser";
import { IconButtonComponent } from "./icon-button.component";

describe("IconButtonComponent", () => {
  let component: IconButtonComponent;
  let fixture: ComponentFixture<IconButtonComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [IconButtonComponent],
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(IconButtonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it("should create", () => {
    expect(component).toBeTruthy();
  });

  it("should return a class string when outline is false", () => {
    component.type = "success";
    component.outline = false;

    fixture.detectChanges();

    const items = fixture.debugElement.queryAll(By.css(".icon-button-success"));
    expect(items.length).toBeGreaterThan(0);
  });

  it("should return a class string when outline is true", () => {
    component.type = "success";
    component.outline = true;

    fixture.detectChanges();

    const items = fixture.debugElement.queryAll(By.css(".icon-button-outline-success"));
    expect(items.length).toBeGreaterThan(0);
  });

  it("should render the text when provided with text property", () => {
    component.type = "success";
    component.outline = false;
    component.text = "add contract";

    fixture.detectChanges();

    const item = fixture.debugElement.query(By.css("span")).nativeElement;
    expect(item.textContent.trim()).toEqual(component.text);
  });

  it("should render the icon when provided as a property", () => {
    component.type = "success";
    component.icon = "plus";
    component.outline = false;
    component.text = "add contract";

    fixture.detectChanges();

    const item = fixture.debugElement.queryAll(By.css(".fa-plus"));
    expect(item.length).toBeGreaterThan(0);
  });
});
