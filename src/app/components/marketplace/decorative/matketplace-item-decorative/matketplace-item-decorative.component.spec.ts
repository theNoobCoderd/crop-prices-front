import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MatketplaceItemDecorativeComponent } from './matketplace-item-decorative.component';

describe('MatketplaceItemDecorativeComponent', () => {
  let component: MatketplaceItemDecorativeComponent;
  let fixture: ComponentFixture<MatketplaceItemDecorativeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [MatketplaceItemDecorativeComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MatketplaceItemDecorativeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
