import {Component, inject} from "@angular/core";
import {FormBuilder, FormGroup, ReactiveFormsModule, Validators} from "@angular/forms";
import {MAT_DIALOG_DATA, MatDialogActions, MatDialogRef} from "@angular/material/dialog";
import {TripService} from "../../../services/trip/trip.service";
import {UserService} from "../../../services/user/user.service";
import {MatSnackBar} from "@angular/material/snack-bar";
import {DropDownComponent} from "../../lib/drop-down/drop-down.component";
import {DROP_DOWN_VALUE_V2, DROP_DOWN_VALUE_V2_FRUIT} from "../../../constants/drop-down-values";
import {DropDownValue} from "../../../models/drop-down-value.model";
import {BehaviorSubject} from "rxjs";
import {Type} from "../../../models/type.enum";
import {Unit} from "../../../models/unit.enum";
import {MarketTrip} from "../../../models/market-trip.model";
import {JoinTripRequest} from "../../../models/trip-contribution.model";

@Component({
	selector: "app-join-trip",
	imports: [
		ReactiveFormsModule,
		MatDialogActions,
		DropDownComponent
	],
	templateUrl: "./join-trip.component.html",
	styleUrl: "./join-trip.component.less"
})
export class JoinTripComponent {
	userService = inject(UserService);
	data: {trip: MarketTrip} = inject(MAT_DIALOG_DATA);
	readonly dialogRef = inject(MatDialogRef<JoinTripComponent>);

	joinTripForm: FormGroup;
	cropTypeSelected$ = new BehaviorSubject<string>("1");
	DROP_DOWN_VALUE$ = new BehaviorSubject<DropDownValue[]>(DROP_DOWN_VALUE_V2);

	constructor(private _formBuilder: FormBuilder, private _tripService: TripService,
							private _snackBar: MatSnackBar) {
		const user = this.userService.currentUser$.getValue();

		this.joinTripForm = this._formBuilder.group({
			crop: ['', Validators.required],
			cropname: [''],
			quantity: ['', Validators.required],
			unit: ['', Validators.required],
			askingPrice: ['', Validators.required],
			district: [this.data.trip.meetingPoint.district],
			locality: [user?.region ?? '', Validators.required],
			notes: ['']
		});
	}

	selectCropType(value: string): void {
		this.cropTypeSelected$.next(value);

		const crop = this.joinTripForm.get("crop");
		const cropName = this.joinTripForm.get("cropname");

		if (value === '3') {
			crop?.clearValidators();
			crop?.updateValueAndValidity();

			cropName?.setValidators([Validators.required]);
			cropName?.updateValueAndValidity();
		} else {
			this.DROP_DOWN_VALUE$.next(value === '1' ? DROP_DOWN_VALUE_V2 : DROP_DOWN_VALUE_V2_FRUIT);

			cropName?.clearValidators();
			cropName?.updateValueAndValidity();

			crop?.setValidators([Validators.required]);
			crop?.updateValueAndValidity();
		}
	}

	onSubmit(): void {
		if (this.joinTripForm.valid) {
			const request = this._mapFormToRequest();
			this._tripService.joinTrip(this.data.trip.id, request).subscribe({
				next: (contribution) => {
					this.dialogRef.close(contribution);
				},
				error: () => {
					this._snackBar.open("Could not join trip. Please try again.", 'x', {duration: 3000, verticalPosition: "top"});
				}
			});
		} else {
			this._markAllFieldsAsTouched();
		}
	}

	close(): void {
		this.dialogRef.close();
	}

	private _mapFormToRequest(): JoinTripRequest {
		const formValue = this.joinTripForm.value;
		const cropType = this.cropTypeSelected$.getValue();
		return {
			produceName: cropType === '3' ? formValue.cropname : formValue.crop,
			produceType: cropType === '1' ? Type.VEGETABLE : (cropType === '2' ? Type.FRUIT : Type.OTHER),
			unit: formValue.unit,
			quantity: Number(formValue.quantity),
			askingPrice: Number(formValue.askingPrice),
			pickupPoint: {
				district: formValue.district,
				locality: formValue.locality,
				latitude: null,
				longitude: null
			},
			notes: formValue.notes
		};
	}

	private _markAllFieldsAsTouched() {
		Object.keys(this.joinTripForm.controls).forEach(key => {
			this.joinTripForm.get(key)?.markAsTouched();
		});
	}

	protected readonly UNITS = [
		{id: 1, name: 'Kg', value: Unit.KG},
		{id: 2, name: 'Packet', value: Unit.PACKET},
		{id: 3, name: 'Units', value: Unit.UNITS},
		{id: 4, name: 'Box', value: Unit.BOX}
	];
	protected readonly CROP_SELECTION = [{label: 'Vegetables', value: '1'}, {label: 'Fruits', value: '2'}, {label: 'Other', value: '3'}];
}
