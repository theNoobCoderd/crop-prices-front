import {Component, inject, OnDestroy, OnInit} from "@angular/core";
import {AuthService} from "../../services/authentication/auth.service";
import {Router} from "@angular/router";
import {UserService} from "../../services/user/user.service";
import {User} from "../../models/user.model";
import {MockPremiumUser} from "../../../assets/mocks/mock-premium-user";
import {MatTableModule} from '@angular/material/table';
import {PagesService} from "../../services/pages.service";
import {NavigationPage} from "../../models/navigation-page.enum";
import {UserPurchaseService} from "../../services/user-purchase/user-purchase.service";
import {UserPurchaseModel} from "../../models/user-purchase.model";
import {BehaviorSubject, Subject, takeUntil} from "rxjs";
import {AsyncPipe} from "@angular/common";
import {MatProgressSpinner} from "@angular/material/progress-spinner";

@Component({
    selector: "app-user-profile",
	imports: [
		MatTableModule,
		AsyncPipe,
		MatProgressSpinner,
		MarketplaceItemComponent
	],
    templateUrl: "./user-profile.component.html",
    styleUrl: "./user-profile.component.less"
})
export class UserProfileComponent implements OnInit, OnDestroy {
	authService = inject(AuthService);
	userService = inject(UserService);
	pagesService = inject(PagesService);
	userPurchaseService = inject(UserPurchaseService);
	listingService = inject(ListingService);
	router = inject(Router);

	displayedColumns: string[] = ['crop', 'rangeStartDate', 'rangeEndDate'];
	purchasesLoading$ = new BehaviorSubject<boolean>(true);

	currentUser: User | null = null;
	datasource: UserPurchaseModel[] = [];

	private _destroy$ = new Subject<void>();
	userListings: MarketplaceListing[] = [];

	ngOnInit(): void {
		this.currentUser = this.userService.currentUser$.getValue();
		if (this.currentUser?.roles.includes("ROLE_PREMIUM1") || this.currentUser?.roles.includes("ROLE_ADMIN")) {
			this.userService.currentUser$.pipe(takeUntil(this._destroy$)).subscribe(user => {
				if (user) {
					this.userPurchaseService.getUserPurchasesByAuthId(user.authId).subscribe((result) => {
						this.datasource = result;
						this.purchasesLoading$.next(false);
					});
				}
			});
		}

		if (this.currentUser) {
			// this.listingService.getListingsByUserId(this.currentUser.id).subscribe(listings => {
			// 	this.userListings = listings;
			// });
			this.userListings = USER_LISTING;
		}
	}

	ngOnDestroy(): void {
		this._destroy$.next();
		this._destroy$.complete();
	}

	logout(): void {
		this.authService.logout();
		this.router.navigate(["/page4"], { skipLocationChange: true });
	}

	clickedRow(row: any) {
		this.pagesService.changePageTo(NavigationPage.STATS);
		this.router.navigate(["/page7"], { state: {data: row}, skipLocationChange: true });
	}

	premiumUserApiCall: any = MockPremiumUser
}
