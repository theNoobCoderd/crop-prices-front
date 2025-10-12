import {Component, EventEmitter, inject, Input, OnDestroy, Output} from "@angular/core";
import {MarketplaceListing} from "../../../models/marketplace-listing.model";
import {DatePipe} from "@angular/common";
import {MatDialog} from "@angular/material/dialog";
import {ModifyListingComponent} from "../modify-listing/modify-listing.component";
import {ListingService} from "../../../services/listing/listing.service";
import { M } from "@angular/material/dialog.d-B5HZULyo";
import {MatDialogConfirmationComponent} from "../../lib/mat-dialog-confirmation/mat-dialog-confirmation.component";
import {Subject, takeUntil} from "rxjs";
import {MatDialogImageComponent} from "../../lib/mat-dialog-image/mat-dialog-image.component";

@Component({
	selector: "app-marketplace-item",
	imports: [
		DatePipe,
	],
	templateUrl: "./marketplace-item.component.html",
	styleUrl: "./marketplace-item.component.less"
})
export class MarketplaceItemComponent implements OnDestroy {

	@Input() item: MarketplaceListing | undefined;
	@Input() isModifiable: boolean = false;
	@Output() modified = new EventEmitter<void>();

	readonly dialog = inject(MatDialog);
	listingService = inject(ListingService);
	dialogRef: M<ModifyListingComponent, any> | undefined;
	dialogRefDeleteConfirm: M<MatDialogConfirmationComponent, any> | undefined;
	private _destroy$ = new Subject<void>();

	edit() {
		this.dialogRef = this.dialog.open(ModifyListingComponent, {
			minWidth: '90%',
			maxWidth: '1200px',
			maxHeight: '90vh',
			data: {item: this.item},
		});

		this.dialogRef.afterClosed().subscribe(result => {
			if(result === "refreshed") {
				this.modified.emit();
			}
		})
	}

	delete() {
		if (this.item) {
			this.dialogRefDeleteConfirm = this.dialog.open(MatDialogConfirmationComponent, {});

			this.dialogRefDeleteConfirm.afterClosed().subscribe(result => {
				if (result === true && this.item) {
					this.item.isDeleted = true;
					this.listingService.modifyListing(this.item)
						.pipe(takeUntil(this._destroy$))
						.subscribe((response: boolean) => {
							if (response) {
								this.modified.emit();
							}
						});
				}
			})
		}
	}

	fullscreenImage() {
		this.dialog.open(MatDialogImageComponent, {data: {message: this.item?.imageUrl}});
	}

	ngOnDestroy(): void {
		this._destroy$.next();
		this._destroy$.complete();
	}

}
