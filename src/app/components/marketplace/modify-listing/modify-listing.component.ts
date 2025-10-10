import {Component, inject} from "@angular/core";
import {FormBuilder, FormGroup, ReactiveFormsModule, Validators} from "@angular/forms";
import {DROP_DOWN_VALUE} from "../../../constants/drop-down-values";
import {MarketplaceListing} from "../../../models/marketplace-listing.model";
import {UserService} from "../../../services/user/user.service";
import {ListingService} from "../../../services/listing/listing.service";
import {AsyncPipe} from "@angular/common";
import {DropDownComponent} from "../../lib/drop-down/drop-down.component";
import {MatProgressBarModule} from "@angular/material/progress-bar";
import {REGIONS} from "../../../constants/region-values";
import {MAT_DIALOG_DATA, MatDialogActions, MatDialogRef} from "@angular/material/dialog";

@Component({
    selector: "app-modify-listing",
	imports: [
		ReactiveFormsModule,
		AsyncPipe,
		DropDownComponent,
		MatProgressBarModule,
		MatDialogActions
	],
    templateUrl: "./modify-listing.component.html",
    styleUrl: "./modify-listing.component.less"
})
export class ModifyListingComponent {
	userService = inject(UserService);

	data = inject(MAT_DIALOG_DATA);
	readonly dialogRef = inject(MatDialogRef<ModifyListingComponent>);

	createListingForm: FormGroup;
	imageUrl: string | null = null;

	constructor(private _formBuilder: FormBuilder,
							private _listingService: ListingService) {

		this.createListingForm = this._formBuilder.group({
			description: [this.data?.item.description, Validators.required],
			quantity: [this.data?.item.quantity, Validators.required],
			price: [this.data?.item.price, Validators.required],
			unit: [this.data?.item.unit, Validators.required],
			farmername: [this.userService.currentUser$.getValue()?.username, Validators.required],
			phone: [this.data?.item.seller.phone, Validators.required],
			region: [this.data?.item.seller.region, Validators.required]
		});
	}

	onSubmit(): void {
		const listingModel = this._mapFormToListing();
		this._listingService.modifyListing(listingModel).subscribe((response: boolean) => {
			if (response) {
				this.dialogRef.close("refreshed");
			}
		});

		this._markAllFieldsAsTouched();

		console.log(listingModel);
	}

	private _mapFormToListing(): MarketplaceListing {
		const formValue = this.createListingForm.value;
		return {
			id: this.data?.item.id,
			quantity: formValue.quantity,
			price: formValue.price,
			unit: formValue.unit,
			description: formValue.description,
			imageUrl: this.imageUrl,
			seller: {
				id: this.userService.currentUser$.getValue()?.id,
				username: this.userService.currentUser$.getValue()?.username,
				phone: formValue.phone,
				region: formValue.region,
			},
			produce: {
				name: formValue.crop,
			}
		} as MarketplaceListing;
	}

	private _markAllFieldsAsTouched() {
		Object.keys(this.createListingForm.controls).forEach(key => {
			const control = this.createListingForm.get(key);
			control?.markAsTouched();
		});
	}

	close() {
		this.dialogRef.close();
	}

	protected readonly DROP_DOWN_VALUE = DROP_DOWN_VALUE;
	protected readonly REGIONS = REGIONS;
}
