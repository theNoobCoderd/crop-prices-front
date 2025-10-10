import { ComponentFixture, TestBed } from "@angular/core/testing";

import { MatDialogLoadingComponent } from "./mat-dialog-loading.component";

describe("MatDialogLoadingComponent", () => {
  let component: MatDialogLoadingComponent;
  let fixture: ComponentFixture<MatDialogLoadingComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [MatDialogLoadingComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MatDialogLoadingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it("should create", () => {
    expect(component).toBeTruthy();
  });
});
