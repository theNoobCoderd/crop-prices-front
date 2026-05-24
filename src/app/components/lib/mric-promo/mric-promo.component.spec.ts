import { ComponentFixture, TestBed } from "@angular/core/testing";

import { MricPromoComponent } from "./mric-promo.component";

describe("MricPromoComponent", () => {
  let component: MricPromoComponent;
  let fixture: ComponentFixture<MricPromoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [MricPromoComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MricPromoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it("should create", () => {
    expect(component).toBeTruthy();
  });
});
