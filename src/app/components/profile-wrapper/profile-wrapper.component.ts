import {Component, inject, OnInit} from "@angular/core";
import {UserService} from "../../services/user/user.service";
import {AsyncPipe} from "@angular/common";
import {UserProfileComponent} from "../user-profile/user-profile.component";

@Component({
    selector: "app-profile-wrapper",
    imports: [
        AsyncPipe,
        UserProfileComponent
    ],
    templateUrl: "./profile-wrapper.component.html",
    styleUrl: "./profile-wrapper.component.less"
})
export class ProfileWrapperComponent implements OnInit {
	userService = inject(UserService);

	ngOnInit(): void {
		console.log("Component ngOnInit", this.userService.currentUser$.getValue());
	}
}
