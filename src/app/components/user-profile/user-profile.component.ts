import {Component, inject, OnInit} from "@angular/core";
import {AuthService} from "../../services/authentication/auth.service";
import {Router} from "@angular/router";
import {UserService} from "../../services/user/user.service";
import {User} from "../../models/user.model";
import {ListingService} from "../../services/listing/listing.service";
import {MarketplaceListing} from "../../models/marketplace-listing.model";
import {MarketplaceItemComponent} from "../marketplace/marketplace-item/marketplace-item.component";
import {USER_LISTING} from "../../../assets/mocks/mock-data";

@Component({
    selector: "app-user-profile",
	imports: [
		MarketplaceItemComponent
	],
    templateUrl: "./user-profile.component.html",
    styleUrl: "./user-profile.component.less"
})
export class UserProfileComponent implements OnInit {
	authService = inject(AuthService);
	userService = inject(UserService);
	listingService = inject(ListingService);
	router = inject(Router);

	currentUser: User | null = null;
	userListings: MarketplaceListing[] = [];

	ngOnInit(): void {
		console.log("user service: ", this.userService.currentUser$.getValue());
		this.currentUser = this.userService.currentUser$.getValue();

		if (this.currentUser) {
			// this.listingService.getListingsByUserId(this.currentUser.id).subscribe(listings => {
			// 	this.userListings = listings;
			// });
			this.userListings = USER_LISTING;
		}
	}

	logout(): void {
		this.authService.logout();
		this.router.navigate(["/page4"], { skipLocationChange: true });
	}
}
