import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MatDialogImageComponent } from './mat-dialog-image.component';

describe('MatDialogImageComponent', () => {
  let component: MatDialogImageComponent;
  let fixture: ComponentFixture<MatDialogImageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [MatDialogImageComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MatDialogImageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
