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

	private _availableDates: ExtractionDate[] = [];
	private _dateDisplayedIndex = 0
	private _days = ["Dimans", "Lindi", "Mardi", "Merkredi", "Zedi", "Vandredi", "Samdi"];

	constructor(private _extractionDateService: ExtractionDatesService) {
		this._extractionDateService.getAllAvailableDates().subscribe(result => {
			this.dateDisplayed$.next(result[result.length - 1]);
			this._calculateDayOfWeek();
			this._availableDates = result;
			this._dateDisplayedIndex = result.length - 1;
		})
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
				}
			}
		}
	}

}
