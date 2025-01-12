import { Component } from "@angular/core";
import {FormBuilder, FormGroup, ReactiveFormsModule} from "@angular/forms";
import {DROP_DOWN_VALUE} from "../../../constants/drop-down-values";
import {DropDownValue} from "../../../models/drop-down-value.model";
import {MarketplaceListing} from "../../../models/marketplace-listing.model";
import {UserService} from "../../../services/user/user.service";
import {ListingService} from "../../../services/listing/listing.service";
import {Router} from "@angular/router";

@Component({
	selector: "app-create-listing",
	standalone: true,
	imports: [
		ReactiveFormsModule
	],
	templateUrl: "./create-listing.component.html",
	styleUrl: "./create-listing.component.less"
})
export class CreateListingComponent {
	createListingForm: FormGroup;
	selectedCrop: DropDownValue | undefined;
	previewImage: string | ArrayBuffer | null | undefined;
	imageUrl = "";

	constructor(private _formBuilder: FormBuilder, private _userService: UserService,
		private _listingService: ListingService, private _router: Router) {
		this.createListingForm = this._formBuilder.group({
			crop: [''],
			quantity: [''],
			price: [''],
			unit: [''],
			description: [''],
			images: [''],
		});

		this.createListingForm.get("crop")?.valueChanges.subscribe((selectedId) => {
			this.selectedCrop = this.DROP_DOWN_VALUE.at(selectedId - 1);
		})
	}

	onSubmit(): void {
		const listingModel = this._mapFormToListing();
		this._listingService.createListing(listingModel).subscribe((response: boolean) => {
			if (response) {
				this._router.navigate(["/page2"], { skipLocationChange: true });
			}
		});
		console.log(listingModel);
	}

	processImage(imageInput: HTMLInputElement): void {
		const selectedFile = imageInput.files;
		if (selectedFile) {
			const file: File | null = selectedFile.item(0);

			if (file) {
				// this._fileUploadService.uploadFile(file).subscribe((fileUrl) => {
				// 	console.log(fileUrl);
				// });
				this.imageUrl = file.name;
			}
		}
	}


	private _mapFormToListing(): MarketplaceListing {
		const formValue = this.createListingForm.value;
		console.log(formValue)
		return {
			quantity: formValue.quantity,
			price: formValue.price,
			unit: formValue.unit,
			description: formValue.description,
			seller: {
				id: this._userService.currentUser$.getValue()?.id,
				username: this._userService.currentUser$.getValue()?.username,
				phone: this._userService.currentUser$.getValue()?.phone,
				region: this._userService.currentUser$.getValue()?.region,
			},
			produce: {
				id: this.selectedCrop?.id,
				name: this.selectedCrop?.name,
				type: this.selectedCrop?.type,
			}
		} as MarketplaceListing;
	}

	protected readonly DROP_DOWN_VALUE = DROP_DOWN_VALUE;
}
