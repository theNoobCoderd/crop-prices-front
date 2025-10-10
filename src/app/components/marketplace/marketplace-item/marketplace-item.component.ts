import {Component, EventEmitter, inject, Input, Output} from "@angular/core";
import {MarketplaceListing} from "../../../models/marketplace-listing.model";
import {DatePipe} from "@angular/common";
import {MatDialog} from "@angular/material/dialog";
import {ModifyListingComponent} from "../modify-listing/modify-listing.component";
import {ListingService} from "../../../services/listing/listing.service";
import { M } from "@angular/material/dialog.d-B5HZULyo";

@Component({
	selector: "app-marketplace-item",
	imports: [
		DatePipe
	],
	templateUrl: "./marketplace-item.component.html",
	styleUrl: "./marketplace-item.component.less"
})
export class MarketplaceItemComponent {

	@Input() item: MarketplaceListing | undefined;
	@Input() isModifiable: boolean = false;
	@Output() modified = new EventEmitter<void>();

	readonly dialog = inject(MatDialog);
	listingService = inject(ListingService);
	dialogRef: M<ModifyListingComponent, any> | undefined;

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
			this.item.isDeleted = true;
			this.listingService.modifyListing(this.item).subscribe((response: boolean) => {
				if (response) {
					this.modified.emit();
				}
			});
		}
	}

}
