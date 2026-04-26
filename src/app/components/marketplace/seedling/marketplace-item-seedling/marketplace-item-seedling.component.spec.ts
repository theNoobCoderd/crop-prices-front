import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MarketplaceItemSeedlingComponent } from './marketplace-item-seedling.component';

describe('MarketplaceItemSeedlingComponent', () => {
  let component: MarketplaceItemSeedlingComponent;
  let fixture: ComponentFixture<MarketplaceItemSeedlingComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [MarketplaceItemSeedlingComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MarketplaceItemSeedlingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
