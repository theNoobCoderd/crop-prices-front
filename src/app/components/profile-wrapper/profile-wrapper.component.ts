import {Component, inject} from "@angular/core";
import {UserService} from "../../services/user/user.service";
import {AsyncPipe} from "@angular/common";
import {UserProfileComponent} from "../user-profile/user-profile.component";
import {RegisterComponent} from "../register/register.component";

@Component({
    selector: "app-profile-wrapper",
    imports: [
        AsyncPipe,
        UserProfileComponent,
        RegisterComponent
    ],
    templateUrl: "./profile-wrapper.component.html",
    styleUrl: "./profile-wrapper.component.less"
})
export class ProfileWrapperComponent {
	userService = inject(UserService);
}
