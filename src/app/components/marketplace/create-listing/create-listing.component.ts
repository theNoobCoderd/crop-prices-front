import {Component, inject} from "@angular/core";
import {FormBuilder, FormGroup, ReactiveFormsModule, Validators} from "@angular/forms";
import {DROP_DOWN_VALUE} from "../../../constants/drop-down-values";
import {DropDownValue} from "../../../models/drop-down-value.model";
import {MarketplaceListing} from "../../../models/marketplace-listing.model";
import {UserService} from "../../../services/user/user.service";
import {ListingService} from "../../../services/listing/listing.service";
import {Router} from "@angular/router";
import {AsyncPipe, DecimalPipe} from "@angular/common";
import {FileUploadService} from "../../../services/file-upload/file-upload.service";
import {getDownloadURL} from "@angular/fire/storage";
import {LoginComponent} from "../../login/login.component";
import {DropDownComponent} from "../../lib/drop-down/drop-down.component";
import {DataUrl, NgxImageCompressService, UploadResponse} from "ngx-image-compress";
import {BehaviorSubject} from "rxjs";
import {MatProgressBarModule} from "@angular/material/progress-bar";

@Component({
    selector: "app-create-listing",
	imports: [
		ReactiveFormsModule,
		AsyncPipe,
		LoginComponent,
		DropDownComponent,
		MatProgressBarModule
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
	imgResultAfterCompress$ = new BehaviorSubject<DataUrl>("");

	constructor(private _formBuilder: FormBuilder, private _listingService: ListingService,
							private _router: Router, private _fileUploadService: FileUploadService,
							private _imageCompress: NgxImageCompressService) {
		this.createListingForm = this._formBuilder.group({
			crop: ['', Validators.required],
			description: ['', Validators.required],
			quantity: ['', Validators.required],
			price: ['', Validators.required],
			unit: ['', Validators.required],
			images: ['', Validators.required],
			farmername: [this.userService.currentUser$.getValue()?.username, Validators.required],
			phone: [this.userService.currentUser$.getValue()?.phone, Validators.required],
			region: [this.userService.currentUser$.getValue()?.region, Validators.required]
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

		this._markAllFieldsAsTouched();

		console.log(listingModel);
	}

	processImage(): void {
		this._imageCompress.uploadFile()
			.then((file: UploadResponse) => {
					if (file) {
						this._imageCompress.compressFile(file.image, file.orientation)
							.then((result: DataUrl) => {
								this.imgResultAfterCompress$.next(result);
								let uploadTask = this._fileUploadService.uploadFile(result);

								uploadTask.on("state_changed", (snapshot: {bytesTransferred: number, totalBytes: number}) => {
									this.uploadProgress = ((snapshot.bytesTransferred * 0.75)  / snapshot.totalBytes) * 100;
									},
									(error: any) => console.error(error),
									() => {
										// Get download URL after successful upload
										getDownloadURL(uploadTask.snapshot.ref).then((downloadURL) => {
											this.uploadProgress = 100;
											this.imageUrl = downloadURL;
											this.createListingForm.patchValue({
												images: this.imageUrl,
											})
										});
									}
								);
							})

					}
			})
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

	protected readonly DROP_DOWN_VALUE = DROP_DOWN_VALUE;
}
