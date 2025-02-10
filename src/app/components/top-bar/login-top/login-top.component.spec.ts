import { ComponentFixture, TestBed } from "@angular/core/testing";

import { LoginTopComponent } from "./login-top.component";

describe("LoginTopComponent", () => {
  let component: LoginTopComponent;
  let fixture: ComponentFixture<LoginTopComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [LoginTopComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(LoginTopComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it("should create", () => {
    expect(component).toBeTruthy();
  });
});
