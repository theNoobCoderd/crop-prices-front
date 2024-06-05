import {Component, EventEmitter, Output} from "@angular/core";
import {BehaviorSubject} from "rxjs";
import {ExtractionDate} from "../../models/extraction-date.model";
import {ExtractionDatesService} from "../../services/dates/extraction-dates.service";
import { AsyncPipe, NgIf } from "@angular/common";

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
export class NavigationComponent {
	@Output() changeDateBefore = new EventEmitter<ExtractionDate>();
	@Output() changeDateAfter = new EventEmitter<ExtractionDate>();

	dateDisplayed$ = new BehaviorSubject<ExtractionDate>({} as ExtractionDate);
	dayOfTheWeek$= new BehaviorSubject<string>("");
	monthToDisplay$ = new BehaviorSubject<string>("");
	dateToDisplay$ = new BehaviorSubject<string>("");
	yearToDisplay$ = new BehaviorSubject<number>(0);

	private _availableDates: ExtractionDate[] = [];
	private _dateDisplayedIndex = 0
	private _days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
	private _months = ["January", "February", "March", "April", "Mai", "June", "July", "August", "September", "October", "November", "December"];
	constructor(private _extractionDateService: ExtractionDatesService) {
		this._extractionDateService.getAllAvailableDates().subscribe(result => {
			this.dateDisplayed$.next(result[result.length - 1]);
			this._calculateDayOfWeek();
			this._availableDates = result;
			this._dateDisplayedIndex = result.length - 1;
		})

		// const test = [{date: "2024-04-19"}, {date: "2024-04-23"}, {date: "2024-05-02"}] as ExtractionDate[];
		// this.dateDisplayed$.next(test[test.length - 1]);
		// this._calculateDayOfWeek();
		// this._availableDates = test;
		// this._dateDisplayedIndex = test.length - 1;
	}

	nextDate(): void {
		if (this._availableDates[this._dateDisplayedIndex + 1]) {
			this._dateDisplayedIndex = this._dateDisplayedIndex + 1;
			this.dateDisplayed$.next(this._availableDates[this._dateDisplayedIndex]);
			this._calculateDayOfWeek();

			this.changeDateAfter.next(this.dateDisplayed$.getValue());
		}
	}

	previousDate(): void {
		if (this._availableDates[this._dateDisplayedIndex - 1]) {
			this._dateDisplayedIndex--;
			this.dateDisplayed$.next(this._availableDates[this._dateDisplayedIndex]);
			this._calculateDayOfWeek();

			this.changeDateBefore.next(this.dateDisplayed$.getValue());
		}
	}

	private _calculateDayOfWeek(): void {
		const dayOfWeek = this.dateDisplayed$.getValue().date as unknown as string;
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

}
