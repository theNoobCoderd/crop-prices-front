import {Component, inject, OnInit} from "@angular/core";
import {AuthService} from "../../services/authentication/auth.service";
import {Router} from "@angular/router";
import {UserService} from "../../services/user/user.service";
import {User} from "../../models/user.model";

@Component({
    selector: "app-user-profile",
	imports: [
	],
    templateUrl: "./user-profile.component.html",
    styleUrl: "./user-profile.component.less"
})
export class UserProfileComponent implements OnInit {
	authService = inject(AuthService);
	userService = inject(UserService);
	router = inject(Router);

	currentUser: User | null = null;

	ngOnInit(): void {
		this.currentUser = this.userService.currentUser$.getValue();
	}

	logout(): void {
		this.authService.logout();
		this.router.navigate(["/page4"], { skipLocationChange: true });
	}
}
