import {Component, inject} from "@angular/core";
import {Router} from "@angular/router";
import {AuthService} from "../../services/authentication/auth.service";
import {UserService} from "../../services/user/user.service";
import {BehaviorSubject, switchMap} from "rxjs";
import {AsyncPipe} from "@angular/common";
import {LoadingSpinnerComponent} from "../loading-spinner/loading-spinner.component";

@Component({
    selector: "app-login",
	imports: [
		AsyncPipe,
		LoadingSpinnerComponent
	],
    templateUrl: "./login.component.html",
    styleUrl: "./login.component.less"
})
export class LoginComponent {
	router = inject(Router);
	authService = inject(AuthService);
	userService = inject(UserService);

	errorMessage$ = new BehaviorSubject<string>("");
	loading$ = new BehaviorSubject<boolean>(false);

	signInWithGoogle(): void {
		this.loading$.next(true);

		this.authService.loginWithGoogle()
			.pipe(
				switchMap(response =>
					this.userService.getUserById(response.user.uid)
				)
			)
			.subscribe({
				next: (response) => {
					this.loading$.next(false);

					if (response) {
						this.router.navigate(["/page1"], { skipLocationChange: true });
					} else {
						this.router.navigate(["/page5"], { skipLocationChange: true });
					}
				},

				error: (error) => {
					this.errorMessage$.next(error.message);
				}
			});
	}
}
