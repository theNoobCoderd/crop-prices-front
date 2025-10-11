import {Component, inject, OnDestroy, OnInit} from "@angular/core";
import {Router} from "@angular/router";
import {ListingService} from "../../../services/listing/listing.service";
import {UserService} from "../../../services/user/user.service";
import {User} from "../../../models/user.model";
import {filter, Subject, switchMap, takeUntil} from "rxjs";
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
			filter((user): user is User => !!user),
			switchMap((user: User) => this._listingService.getListingsByUserId(user.id))
		).subscribe({
			next: result => {
				dialogRef.close();
				const userRoles = this._userService.currentUser$.getValue()?.roles;
				if (result.length <= 2 || (userRoles?.includes("ROLE_ADMIN") || userRoles?.includes("ROLE_PREMIUM1"))) {
					this._router.navigate(["/page3"], { skipLocationChange: true });
				} else {
					this.dialog.open(MatDialogComponent, {data: {message: "You can only have up to 2 active listings on the free plan."}});
				}
			},
			error: error => {
				console.error('Error loading listings:', error);
			}
		});
	}

}
