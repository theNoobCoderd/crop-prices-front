import { ComponentFixture, TestBed } from "@angular/core/testing";

import { MarketplaceSplashComponent } from "./marketplace-splash.component";

describe("MarketplaceSplashComponent", () => {
  let component: MarketplaceSplashComponent;
  let fixture: ComponentFixture<MarketplaceSplashComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [MarketplaceSplashComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MarketplaceSplashComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it("should create", () => {
    expect(component).toBeTruthy();
  });
});
