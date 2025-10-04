import {Component, inject} from "@angular/core";
import {AuthService} from "../../../services/authentication/auth.service";
import {Router} from "@angular/router";
import {AsyncPipe, UpperCasePipe} from "@angular/common";

@Component({
  selector: "app-login-top",
	imports: [
		AsyncPipe
	],
  templateUrl: "./login-top.component.html",
  styleUrl: "./login-top.component.less"
})
export class LoginTopComponent {
	authService = inject(AuthService);
	router = inject(Router);

	navToLogin() : void {
		this.router.navigate(["/page4"], { skipLocationChange: true });
	}

	navToProfile() : void {
		this.router.navigate(["/page5"], { skipLocationChange: true });
	}
}
