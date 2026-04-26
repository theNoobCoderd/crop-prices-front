import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CreateListingSeedlingComponent } from './create-listing-seedling.component';

describe('CreateListingSeedlingComponent', () => {
  let component: CreateListingSeedlingComponent;
  let fixture: ComponentFixture<CreateListingSeedlingComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CreateListingSeedlingComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CreateListingSeedlingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
