import {Component, inject} from "@angular/core";
import {FormBuilder, FormGroup, ReactiveFormsModule} from "@angular/forms";
import {DROP_DOWN_VALUE} from "../../../constants/drop-down-values";
import {DropDownValue} from "../../../models/drop-down-value.model";
import {MarketplaceListing} from "../../../models/marketplace-listing.model";
import {UserService} from "../../../services/user/user.service";
import {ListingService} from "../../../services/listing/listing.service";
import {Router} from "@angular/router";
import {AsyncPipe, DecimalPipe, NgIf} from "@angular/common";
import {FileUploadService} from "../../../services/file-upload/file-upload.service";
import {getDownloadURL} from "@angular/fire/storage";
import {LoginComponent} from "../../login/login.component";

@Component({
    selector: "app-create-listing",
	imports: [
		ReactiveFormsModule,
		AsyncPipe,
		DecimalPipe,
		LoginComponent,
	],
    templateUrl: "./create-listing.component.html",
    styleUrl: "./create-listing.component.less"
})
export class CreateListingComponent {
	userService = inject(UserService);

	createListingForm: FormGroup;
	selectedCrop: DropDownValue | undefined;
	imageUrl: string | null = null;
	uploadProgress: number = 0;

	constructor(private _formBuilder: FormBuilder, private _listingService: ListingService,
							private _router: Router, private _fileUploadService: FileUploadService) {
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
		});
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
				let uploadTask = this._fileUploadService.uploadFile(file);
				uploadTask.on("state_changed",
					(snapshot: { bytesTransferred: number; totalBytes: number; }) => {
						this.uploadProgress = (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
					},
					(error: any) => {
					console.error(error)
				},
					() => {
						// Get download URL after successful upload
						getDownloadURL(uploadTask.snapshot.ref).then((downloadURL) => {
							this.imageUrl = downloadURL;
							console.log('File available at', downloadURL);
						});
					});
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
			imageUrl: this.imageUrl,
			seller: {
				id: this.userService.currentUser$.getValue()?.id,
				username: this.userService.currentUser$.getValue()?.username,
				phone: this.userService.currentUser$.getValue()?.phone,
				region: this.userService.currentUser$.getValue()?.region,
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
