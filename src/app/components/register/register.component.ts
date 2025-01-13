import {Component, inject} from "@angular/core";
import {FormBuilder, ReactiveFormsModule, Validators} from "@angular/forms";
import {Router} from "@angular/router";
import {AuthService} from "../../services/authentication/auth.service";
import {REGIONS} from "../../constants/region-values";
import {User} from "../../models/user.model";
import {UserService} from "../../services/user/user.service";

@Component({
    selector: "app-register",
    imports: [ReactiveFormsModule],
    templateUrl: "./register.component.html",
    styleUrl: "./register.component.less"
})
export class RegisterComponent {
	formBuilder = inject(FormBuilder);
	router = inject(Router);
	authService = inject(AuthService);
	userService = inject(UserService);

	form = this.formBuilder.group({
		username: ["", Validators.required],
		email: ["", Validators.required],
		password: ["", Validators.required],
		phone: ["", Validators.required],
		region: ["", Validators.required],
	});

	errorMessage: string | null = null;

	onSubmit(): void {
		const rawForm = this.form.getRawValue();
		this.authService.register(rawForm.email!, rawForm.username!, rawForm.password!).subscribe({
			next: () => {
				this.router.navigate(["/page1"], { skipLocationChange: true });
			},
			error: (err) => {
				this.errorMessage = err.code;
			}
		})
	}

	onSubmitPhone(): void {
		const currentUserUid = this.authService.firebaseAuth.currentUser?.uid;
		const rawForm = this.form.getRawValue();

		console.log("user credentials: ", currentUserUid);
		console.log("form values: ", rawForm);

		const user = {
			authId: currentUserUid,
			email: rawForm.email!,
			password: rawForm.password!,
			phone: rawForm.phone!,
			region: rawForm.region!,
			username: rawForm.username!
		} as User;

		this.userService.createUser(user).subscribe((response) => {
			if (response) {
				this.router.navigate(["/page1"], { skipLocationChange: true });
			} else {
				console.log("error, could not create user");
			}
		});
	}

	protected readonly REGIONS = REGIONS;
}
