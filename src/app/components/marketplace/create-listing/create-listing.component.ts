import {Component, inject, OnDestroy} from "@angular/core";
import {FormBuilder, FormGroup, ReactiveFormsModule, Validators} from "@angular/forms";
import {DROP_DOWN_VALUE_V2, DROP_DOWN_VALUE_V2_FRUIT} from "../../../constants/drop-down-values";
import {DropDownValue} from "../../../models/drop-down-value.model";
import {MarketplaceListing} from "../../../models/marketplace-listing.model";
import {UserService} from "../../../services/user/user.service";
import {ListingService} from "../../../services/listing/listing.service";
import {Router} from "@angular/router";
import {AsyncPipe, NgClass, NgForOf} from "@angular/common";
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
import {MatSnackBar} from "@angular/material/snack-bar";
import {Type} from "../../../models/type.enum";

@Component({
    selector: "app-create-listing",
	imports: [
		ReactiveFormsModule,
		AsyncPipe,
		LoginComponent,
		DropDownComponent,
		MatProgressBarModule,
		NgClass,
		NgForOf
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
	cropTypeSelected$ = new BehaviorSubject<string>("1");

	readonly dialog = inject(MatDialog);
	private _destroy$ = new Subject<void>();

	constructor(private _formBuilder: FormBuilder, private _listingService: ListingService,
							private _router: Router, private _fileUploadService: FileUploadService,
							private _imageCompress: NgxImageCompressService,
							private _snackBar: MatSnackBar) {
		this.createListingForm = this._formBuilder.group({
			crop: ['', Validators.required],
			cropname: [''],
			description: ['', Validators.required],
			quantity: ['', Validators.required],
			price: ['', Validators.required],
			unit: ['', Validators.required],
			images: ['', Validators.required],
			farmername: [this.userService.currentUser$.getValue()?.username, Validators.required],
			phone: [this.userService.currentUser$.getValue()?.phone, [Validators.required, Validators.pattern(/^\d{8}$/)]],
			region: [this.userService.currentUser$.getValue()?.region, Validators.required]
		});

		this.createListingForm.get("crop")?.valueChanges
			.pipe(takeUntil(this._destroy$))
			.subscribe((selectedId) => {
				this.selectedCrop = this.DROP_DOWN_VALUE$.getValue().at(selectedId - 1);
			});
	}

	ngOnDestroy(): void {
		this._destroy$.next();
		this._destroy$.complete();
	}

	onSubmit(): void {
		if (this.createListingForm.valid) {
			const dialogRef = this.dialog.open(MatDialogLoadingComponent, {data: {message: "Creating Listing. Please Wait..."}});

			const listingModel = this._mapFormToListing();
			this._listingService.createListing(listingModel)
				.pipe(takeUntil(this._destroy$))
				.subscribe((response: boolean) => {
					if (response) {
						dialogRef.close();
						this._router.navigate(["/page2"], { skipLocationChange: true });
					}
				});
		} else {
			this._markAllFieldsAsTouched();
			this._snackBar.open("Please Fill in required fields", 'x', {duration: 2000, verticalPosition: "top"});
		}
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

	selectCropType(value: string) {
		this.cropTypeSelected$.next(value);

		let cropName = this.createListingForm.get("cropname");
		let crop = this.createListingForm.get("crop");

		if (value === '1') {
			this.DROP_DOWN_VALUE$.next(this.DROP_DOWN_VEGETABLES);
			cropName?.clearValidators();
			cropName?.updateValueAndValidity();

			crop?.setValidators([Validators.required]);
			crop?.updateValueAndValidity();
		} else if (value === '2') {
			this.DROP_DOWN_VALUE$.next(this.DROP_DOWN_FRUITS);
			cropName?.clearValidators();
			cropName?.updateValueAndValidity();

			crop?.setValidators([Validators.required]);
			crop?.updateValueAndValidity();
		} else if (value === '3') {
			crop?.clearValidators();
			crop?.updateValueAndValidity();

			cropName?.setValidators([Validators.required]);
			cropName?.updateValueAndValidity();
		}
	}


	private _mapFormToListing(): MarketplaceListing {
		const formValue = this.createListingForm.value;
		let cropType;
		if (this.cropTypeSelected$.getValue() === "1") {
			cropType = Type.VEGETABLE
		} else if (this.cropTypeSelected$.getValue() === "2") {
			cropType = Type.FRUIT
		} else {
			cropType = Type.OTHER
		}

		return {
			quantity: formValue.quantity,
			price: formValue.price,
			unit: formValue.unit,
			description: formValue.description,
			imageUrl: this.imageUrl,
			type: cropType,
			seller: {
				id: this.userService.currentUser$.getValue()?.id,
				username: this.userService.currentUser$.getValue()?.username,
				phone: formValue.phone,
				region: formValue.region,
			},
			produce: {
				name: formValue.crop,
			},
			otherCropName: formValue.cropname
		} as MarketplaceListing;
	}

	private _markAllFieldsAsTouched() {
		Object.keys(this.createListingForm.controls).forEach(key => {
			const control = this.createListingForm.get(key);
			control?.markAsTouched();
		});
	}

	protected readonly DROP_DOWN_VEGETABLES = DROP_DOWN_VALUE_V2;
	protected readonly DROP_DOWN_FRUITS = DROP_DOWN_VALUE_V2_FRUIT;
	protected DROP_DOWN_VALUE$ = new BehaviorSubject<DropDownValue[]>(this.DROP_DOWN_VEGETABLES);
	protected readonly REGIONS = REGIONS;
	protected readonly CROP_SELECTION = [{ label: 'Vegetables', value: '1' }, { label: 'Fruits', value: '2' }, { label: 'Other', value: '3' }];
}
