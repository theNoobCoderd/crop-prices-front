import {Component, inject, OnDestroy, OnInit} from "@angular/core";
import {Router} from "@angular/router";
import {ListingService} from "../../../services/listing/listing.service";
import {UserService} from "../../../services/user/user.service";
import {EMPTY, Subject, switchMap, takeUntil} from "rxjs";
import {MatDialog} from "@angular/material/dialog";
import {MatDialogComponent} from "../../lib/mat-dialog/mat-dialog.component";
import {MatDialogLoadingComponent} from "../../lib/mat-dialog-loading/mat-dialog-loading.component";

@Component({
    selector: "app-add-crop",
    imports: [],
    templateUrl: "./add-crop.component.html",
    styleUrl: "./add-crop.component.less"
})
export class AddCropComponent implements OnDestroy {

	private _listingService = inject(ListingService);
	private _userService = inject(UserService);
	private _destroy$: Subject<void> = new Subject<void>();

	readonly dialog = inject(MatDialog);

	constructor(private _router: Router) {}

	ngOnDestroy(): void {
		this._destroy$.next();
		this._destroy$.complete();
	}

	navToCreateListing(): void {
		const dialogRef = this.dialog.open(MatDialogLoadingComponent);

		this._userService.currentUser$.pipe(
			takeUntil(this._destroy$),
			switchMap(user => {
				if (user) {
					return this._listingService.getActiveListingsByUserId(user.id);
				} else {
					dialogRef.close();
					this.dialog.open(MatDialogComponent, {data: {message: "You must be logged in to add a listing.", header: "Login"}});
					return EMPTY;
				}
			})
		).subscribe({
			next: result => {
				dialogRef.close();
				const userRoles = this._userService.currentUser$.getValue()?.roles;
				if (result.length <= 2 || (userRoles?.includes("ROLE_ADMIN") || userRoles?.includes("ROLE_PREMIUM1"))) {
					this._router.navigate(["/page3"], { skipLocationChange: true });
				} else {
					this.dialog.open(MatDialogComponent, {data: {
						message: "You can only have up to 2 active listings on the free plan." + "<p></p>" +
							"<p>Get Premium Access today and enjoy full access: Call / Message: 59335318</p>"
					}});
				}
			},
			error: error => {
				console.error('Error loading listings:', error);
			}
		});
	}

}
