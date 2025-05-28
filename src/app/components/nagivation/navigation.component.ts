import {Component, EventEmitter, OnDestroy, Output} from "@angular/core";
import {BehaviorSubject, Subject, takeUntil} from "rxjs";
import {ExtractionDate} from "../../models/extraction-date.model";
import {ExtractionDatesService} from "../../services/dates/extraction-dates.service";
import { AsyncPipe, NgIf } from "@angular/common";
import {MatSnackBar} from "@angular/material/snack-bar";

@Component({
	selector: "app-navigation",
	standalone: true,
	imports: [
		AsyncPipe,
		NgIf
	],
	templateUrl: "./navigation.component.html",
	styleUrl: "./navigation.component.less"
})
export class NavigationComponent implements OnDestroy {
	@Output() changeDateBefore = new EventEmitter<ExtractionDate>();
	@Output() changeDateAfter = new EventEmitter<ExtractionDate>();
	@Output() currentDate = new EventEmitter<ExtractionDate>();

	dateDisplayed$ = new BehaviorSubject<ExtractionDate>({} as ExtractionDate);
	dayOfTheWeek$= new BehaviorSubject<string>("");
	monthToDisplay$ = new BehaviorSubject<string>("");
	dateToDisplay$ = new BehaviorSubject<string>("");
	yearToDisplay$ = new BehaviorSubject<number>(0);
	noNextItem$ = new BehaviorSubject<boolean>(true);
	noPreviousItem$ = new BehaviorSubject<boolean>(false);
	dates$ = new BehaviorSubject<number>(0);

	private _destroy$ = new Subject<void>();
	private _availableDates: ExtractionDate[] = [];
	private _dateDisplayedIndex = 0
	private _days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
	private _months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
	private readonly limit = 10;

	constructor(private _extractionDateService: ExtractionDatesService, private _snackBar: MatSnackBar) {
		this._extractionDateService.getAllAvailableDates().pipe(takeUntil(this._destroy$)).subscribe(result => {
			this.dateDisplayed$.next(result[result.length - 1]);
			this._calculateDayOfWeek();
			this._availableDates = result;
			this._dateDisplayedIndex = result.length - 1;

			this.currentDate.next(this.dateDisplayed$.getValue());
		})
	}

	ngOnDestroy(): void {
		this._destroy$.next();
		this._destroy$.complete();
	}

	nextDate(): void {
		if (this._availableDates[this._dateDisplayedIndex + 1]) {
			this._dateDisplayedIndex = this._dateDisplayedIndex + 1;
			this.dateDisplayed$.next(this._availableDates[this._dateDisplayedIndex]);
			this._calculateDayOfWeek();

			this.dates$.next(this.dates$.getValue() - 1);
			this.changeDateAfter.next(this.dateDisplayed$.getValue());

			this._updateArrowDisplay();
		}
	}

	previousDate(): void {
		if (this._availableDates[this._dateDisplayedIndex - 1] && this.dates$.getValue() <= this.limit) {
			this._dateDisplayedIndex--;
			this.dateDisplayed$.next(this._availableDates[this._dateDisplayedIndex]);
			this._calculateDayOfWeek();

			this.dates$.next(this.dates$.getValue() + 1);
			this.changeDateBefore.next(this.dateDisplayed$.getValue());

			this._updateArrowDisplay();
		}
	}

	private _calculateDayOfWeek(): void {
		const dayOfWeek = this.dateDisplayed$.getValue() as unknown as string;
		if (dayOfWeek) {
			const dateParts = dayOfWeek.split("-");
			if (dateParts.length === 3) {
				const year = parseInt(dateParts[0], 10);
				const month = parseInt(dateParts[1], 10) - 1; // Months are 0-indexed in JavaScript
				const date = parseInt(dateParts[2], 10);

				const inputDate = new Date(year, month, date);
				if (!isNaN(inputDate.getTime())) { // Check if the date is valid
					const dayIndex = inputDate.getDay();
					this.dayOfTheWeek$.next(this._days[dayIndex]);

					const dateIndex = inputDate.getDate();
					if (dateIndex >= 10) {
						this.dateToDisplay$.next(inputDate.getDate().toString());
					} else {
						this.dateToDisplay$.next("0" + inputDate.getDate());
					}

					this.yearToDisplay$.next(inputDate.getFullYear())

					const monthIndex = inputDate.getMonth();
					this.monthToDisplay$.next(this._months[monthIndex]);
				}
			}
		}
	}

	private _updateArrowDisplay(): void {
		if (this._dateDisplayedIndex === this._availableDates.length - 1) {
			this.noNextItem$.next(true);
		} else {
			this.noNextItem$.next(false);
		}

		if (this._dateDisplayedIndex === 0 || this.dates$.getValue() >= this.limit) {
			this.noPreviousItem$.next(true);
			this._snackBar.open("Limit Reached - Contact Us for more info: 59335318", 'x', {duration: 9000, panelClass: "snackbar-warning"});
		} else {
			this.noPreviousItem$.next(false);
		}
	}

}
