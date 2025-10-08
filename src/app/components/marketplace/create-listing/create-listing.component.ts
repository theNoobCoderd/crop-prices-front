import {Component, inject, OnDestroy} from "@angular/core";
import {FormBuilder, FormGroup, ReactiveFormsModule, Validators} from "@angular/forms";
import {DROP_DOWN_VALUE} from "../../../constants/drop-down-values";
import {DropDownValue} from "../../../models/drop-down-value.model";
import {MarketplaceListing} from "../../../models/marketplace-listing.model";
import {UserService} from "../../../services/user/user.service";
import {ListingService} from "../../../services/listing/listing.service";
import {Router} from "@angular/router";
import {AsyncPipe} from "@angular/common";
import {FileUploadService} from "../../../services/file-upload/file-upload.service";
import {getDownloadURL} from "@angular/fire/storage";
import {LoginComponent} from "../../login/login.component";
import {DropDownComponent} from "../../lib/drop-down/drop-down.component";
import {DataUrl, NgxImageCompressService, UploadResponse} from "ngx-image-compress";
import {BehaviorSubject, Subject, takeUntil} from "rxjs";
import {MatProgressBarModule} from "@angular/material/progress-bar";
import {REGIONS} from "../../../constants/region-values";
import {MatDialog} from "@angular/material/dialog";
import {MatDialogLoadingComponent} from "../../lib/mat-dialog-loading/mat-dialog-loading.component";

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
export class CreateListingComponent implements OnDestroy {
	userService = inject(UserService);

	createListingForm: FormGroup;
	selectedCrop: DropDownValue | undefined;
	imageUrl: string | null = null;
	uploadProgress: number = 0;
	imgResultAfterCompress$ = new BehaviorSubject<DataUrl>("");

	readonly dialog = inject(MatDialog);
	private _destroy$ = new Subject<void>();

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

		this.createListingForm.get("crop")?.valueChanges
			.pipe(takeUntil(this._destroy$))
			.subscribe((selectedId) => {
				this.selectedCrop = this.DROP_DOWN_VALUE.at(selectedId - 1);
			});
	}

	ngOnDestroy(): void {
		this._destroy$.next();
		this._destroy$.complete();
	}

	onSubmit(): void {
		const dialogRef = this.dialog.open(MatDialogLoadingComponent);

		const listingModel = this._mapFormToListing();
		this._listingService.createListing(listingModel)
			.pipe(takeUntil(this._destroy$))
			.subscribe((response: boolean) => {
				if (response) {
					dialogRef.close();
					this._router.navigate(["/page2"], { skipLocationChange: true });
				}
			});

		this._markAllFieldsAsTouched();
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
		return {
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

	protected readonly DROP_DOWN_VALUE = DROP_DOWN_VALUE;
	protected readonly REGIONS = REGIONS;
}
