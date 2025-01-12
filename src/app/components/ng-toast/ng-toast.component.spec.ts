import { ComponentFixture, TestBed } from "@angular/core/testing";

import { NgToastComponent } from "./ng-toast.component";

describe("NgToastComponent", () => {
	let component: NgToastComponent;
	let fixture: ComponentFixture<NgToastComponent>;

	beforeEach(async () => {
		await TestBed.configureTestingModule({
			imports: [NgToastComponent]
		})
			.compileComponents();

		fixture = TestBed.createComponent(NgToastComponent);
		component = fixture.componentInstance;
		fixture.detectChanges();
	});

	it("should create", () => {
		expect(component).toBeTruthy();
	});
});
