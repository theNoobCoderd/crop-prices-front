import { ComponentFixture, TestBed } from "@angular/core/testing";

import { JoinSocialComponent } from "./join-social.component";

describe("JoinSocialComponent", () => {
	let component: JoinSocialComponent;
	let fixture: ComponentFixture<JoinSocialComponent>;

	beforeEach(async () => {
		await TestBed.configureTestingModule({
			imports: [JoinSocialComponent]
		})
			.compileComponents();

		fixture = TestBed.createComponent(JoinSocialComponent);
		component = fixture.componentInstance;
		fixture.detectChanges();
	});

	it("should create", () => {
		expect(component).toBeTruthy();
	});
});
