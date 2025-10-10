import { ComponentFixture, TestBed } from "@angular/core/testing";

import { ModifyListingComponent } from "./modify-listing.component";

describe("ModifyListingComponent", () => {
	let component: ModifyListingComponent;
	let fixture: ComponentFixture<ModifyListingComponent>;

	beforeEach(async () => {
		await TestBed.configureTestingModule({
			imports: [ModifyListingComponent]
		})
			.compileComponents();

		fixture = TestBed.createComponent(ModifyListingComponent);
		component = fixture.componentInstance;
		fixture.detectChanges();
	});

	it("should create", () => {
		expect(component).toBeTruthy();
	});
});
