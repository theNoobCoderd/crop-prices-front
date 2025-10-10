import {Component, inject, OnDestroy, OnInit} from "@angular/core";
import {AuthService} from "../../services/authentication/auth.service";
import {Router} from "@angular/router";
import {UserService} from "../../services/user/user.service";
import {User} from "../../models/user.model";
import {MatTableModule} from '@angular/material/table';
import {PagesService} from "../../services/pages.service";
import {NavigationPage} from "../../models/navigation-page.enum";
import {UserPurchaseService} from "../../services/user-purchase/user-purchase.service";
import {UserPurchaseModel} from "../../models/user-purchase.model";
import {BehaviorSubject, filter, Subject, switchMap, takeUntil} from "rxjs";
import {AsyncPipe} from "@angular/common";
import {MarketplaceListing} from "../../models/marketplace-listing.model";
import {ListingService} from "../../services/listing/listing.service";
import { MarketplaceItemComponent } from "../marketplace/marketplace-item/marketplace-item.component";
import {NgxSkeletonLoaderModule} from "ngx-skeleton-loader";

@Component({
    selector: "app-user-profile",
	imports: [
		MatTableModule,
		AsyncPipe,
		MarketplaceItemComponent,
		NgxSkeletonLoaderModule
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
	userListingLoaded$ = new BehaviorSubject<boolean>(false);

	ngOnInit(): void {
		this.currentUser = this.userService.currentUser$.getValue();
		if (this.currentUser?.roles.includes("ROLE_PREMIUM1") || this.currentUser?.roles.includes("ROLE_ADMIN")) {
			this.userService.currentUser$.pipe(
				takeUntil(this._destroy$),
				filter((user): user is User => !!user),
				switchMap((user: User) => this.userPurchaseService.getUserPurchasesByAuthId(user.authId))
			).subscribe({
				next: result => {
					this.datasource = result;
					this.purchasesLoading$.next(false);
				},
				error: error => {
					console.error('Error loading purchases:', error);
					this.purchasesLoading$.next(false);
				}
			});
		}

		this.fetchListingsByUserId();
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

	fetchListingsByUserId() {
		this.userListingLoaded$.next(false);

		if (this.currentUser) {
			this.listingService.getListingsByUserId(this.currentUser.id)
				.pipe(takeUntil(this._destroy$))
				.subscribe(listings => {
					this.userListings = listings;
					this.userListingLoaded$.next(true);
				});
			// this.userListings = USER_LISTING;
		}
	}
}
