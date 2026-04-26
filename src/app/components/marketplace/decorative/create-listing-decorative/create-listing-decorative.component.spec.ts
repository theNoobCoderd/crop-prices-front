import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CreateListingDecorativeComponent } from './create-listing-decorative.component';

describe('CreateListingDecorativeComponent', () => {
  let component: CreateListingDecorativeComponent;
  let fixture: ComponentFixture<CreateListingDecorativeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CreateListingDecorativeComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CreateListingDecorativeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
