import {Component, inject, OnDestroy} from "@angular/core";
import {FormBuilder, FormGroup, ReactiveFormsModule, Validators} from "@angular/forms";
import {Router} from "@angular/router";
import {AsyncPipe} from "@angular/common";
import {Subject, takeUntil} from "rxjs";
import {MatSnackBar} from "@angular/material/snack-bar";
import {MatDialog} from "@angular/material/dialog";
import {DropDownComponent} from "../../lib/drop-down/drop-down.component";
import {LoginComponent} from "../../login/login.component";
import {MatDialogLoadingComponent} from "../../lib/mat-dialog-loading/mat-dialog-loading.component";
import {TripService} from "../../../services/trip/trip.service";
import {UserService} from "../../../services/user/user.service";
import {DISTRICTS} from "../../../constants/district-values";
import {CommissionType} from "../../../models/commission-type.enum";
import {CreateTripRequest} from "../../../models/market-trip.model";

@Component({
	selector: "app-create-trip",
	imports: [
		ReactiveFormsModule,
		AsyncPipe,
		LoginComponent,
		DropDownComponent
	],
	templateUrl: "./create-trip.component.html",
	styleUrl: "./create-trip.component.less"
})
export class CreateTripComponent implements OnDestroy {
	userService = inject(UserService);

	createTripForm: FormGroup;

	readonly dialog = inject(MatDialog);
	private _destroy$ = new Subject<void>();

	constructor(private _formBuilder: FormBuilder, private _tripService: TripService,
							private _router: Router, private _snackBar: MatSnackBar) {
		this.createTripForm = this._formBuilder.group({
			district: ['', Validators.required],
			locality: ['', Validators.required],
			latitude: [''],
			longitude: [''],
			travelDate: ['', Validators.required],
			cutoffTime: ['', Validators.required],
			capacityWeightKg: [''],
			commissionType: [CommissionType.PERCENTAGE, Validators.required],
			commissionValue: ['', Validators.required],
			notes: ['']
		});
	}

	ngOnDestroy(): void {
		this._destroy$.next();
		this._destroy$.complete();
	}

	onSubmit(): void {
		if (this.createTripForm.valid) {
			const dialogRef = this.dialog.open(MatDialogLoadingComponent, {data: {message: "Creating Trip. Please Wait..."}});

			const request = this._mapFormToRequest();
			this._tripService.createTrip(request)
				.pipe(takeUntil(this._destroy$))
				.subscribe({
					next: (trip) => {
						dialogRef.close();
						this._router.navigate(["/trips", trip.id], {skipLocationChange: true});
					},
					error: () => {
						dialogRef.close();
						this._snackBar.open("Could not create trip. Please try again.", 'x', {duration: 3000, verticalPosition: "top"});
					}
				});
		} else {
			this._markAllFieldsAsTouched();
			this._snackBar.open("Please fill in required fields", 'x', {duration: 2000, verticalPosition: "top"});
		}
	}

	private _mapFormToRequest(): CreateTripRequest {
		const formValue = this.createTripForm.value;
		return {
			meetingPoint: {
				district: formValue.district,
				locality: formValue.locality,
				latitude: formValue.latitude ? Number(formValue.latitude) : null,
				longitude: formValue.longitude ? Number(formValue.longitude) : null,
			},
			travelDate: new Date(formValue.travelDate).toISOString(),
			cutoffTime: new Date(formValue.cutoffTime).toISOString(),
			capacityWeightKg: formValue.capacityWeightKg ? Number(formValue.capacityWeightKg) : null,
			commissionType: formValue.commissionType,
			commissionValue: Number(formValue.commissionValue),
			notes: formValue.notes
		};
	}

	private _markAllFieldsAsTouched() {
		Object.keys(this.createTripForm.controls).forEach(key => {
			const control = this.createTripForm.get(key);
			control?.markAsTouched();
		});
	}

	protected readonly DISTRICTS = DISTRICTS;
	protected readonly COMMISSION_TYPES = [
		{id: 1, name: "Percentage of Sale", value: CommissionType.PERCENTAGE},
		{id: 2, name: "Flat Fee", value: CommissionType.FLAT}
	];
}
