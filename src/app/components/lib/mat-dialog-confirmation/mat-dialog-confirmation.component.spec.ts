import { ComponentFixture, TestBed } from "@angular/core/testing";

import { MatDialogConfirmationComponent } from "./mat-dialog-confirmation.component";

describe("MatDialogConfirmationComponent", () => {
  let component: MatDialogConfirmationComponent;
  let fixture: ComponentFixture<MatDialogConfirmationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [MatDialogConfirmationComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MatDialogConfirmationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it("should create", () => {
    expect(component).toBeTruthy();
  });
});
