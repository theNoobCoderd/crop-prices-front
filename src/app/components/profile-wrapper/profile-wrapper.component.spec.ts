import { ComponentFixture, TestBed } from "@angular/core/testing";

import { ProfileWrapperComponent } from "./profile-wrapper.component";

describe("ProfileWrapperComponent", () => {
	let component: ProfileWrapperComponent;
	let fixture: ComponentFixture<ProfileWrapperComponent>;

	beforeEach(async () => {
		await TestBed.configureTestingModule({
			imports: [ProfileWrapperComponent]
		})
			.compileComponents();

		fixture = TestBed.createComponent(ProfileWrapperComponent);
		component = fixture.componentInstance;
		fixture.detectChanges();
	});

	it("should create", () => {
		expect(component).toBeTruthy();
	});
});
