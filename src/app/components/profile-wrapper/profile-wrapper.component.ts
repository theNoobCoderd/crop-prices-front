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
export class ProfileWrapperComponent {
	userService = inject(UserService);
}
