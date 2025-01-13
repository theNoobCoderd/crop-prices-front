import {Component, inject} from "@angular/core";
import {Router} from "@angular/router";
import {AuthService} from "../../services/authentication/auth.service";
import {UserService} from "../../services/user/user.service";
import {switchMap} from "rxjs";

@Component({
    selector: "app-login",
    imports: [],
    templateUrl: "./login.component.html",
    styleUrl: "./login.component.less"
})
export class LoginComponent {
	router = inject(Router);
	authService = inject(AuthService);
	userService = inject(UserService);

	errorMessage: string | null = null;

	signInWithGoogle(): void {
		this.authService.loginWithGoogle()
			.pipe(
				switchMap(response =>
					this.userService.getUserById(response.user.uid)
				)
			)
			.subscribe((response) => {
				console.log("==> ", response);
				if (response) {
					console.log("user already exists");
					this.router.navigate(["/page1"], { skipLocationChange: true });
				} else {
					console.log("user does not exists");
					this.router.navigate(["/page5"], { skipLocationChange: true });
				}
			});
	}
}
