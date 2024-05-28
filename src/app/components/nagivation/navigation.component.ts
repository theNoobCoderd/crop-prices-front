import {Component, EventEmitter, Output} from "@angular/core";
import {BehaviorSubject} from "rxjs";
import {ExtractionDate} from "../../models/extraction-date.model";
import {ExtractionDatesService} from "../../services/dates/extraction-dates.service";
import {AsyncPipe} from "@angular/common";

@Component({
	selector: "app-navigation",
	standalone: true,
	imports: [
		AsyncPipe
	],
	templateUrl: "./navigation.component.html",
	styleUrl: "./navigation.component.less"
})
export class NavigationComponent {
	@Output() changeDateBefore = new EventEmitter<ExtractionDate>();
	@Output() changeDateAfter = new EventEmitter<ExtractionDate>();

	dateDisplayed$ = new BehaviorSubject<ExtractionDate>({} as ExtractionDate);

	private _availableDates: ExtractionDate[] = [];
	private _dateDisplayedIndex = 0

	constructor(private _extractionDateService: ExtractionDatesService) {
		this._extractionDateService.getAllAvailableDates().subscribe(result => {
			this.dateDisplayed$.next(result[result.length - 1]);
			this._availableDates = result;
			this._dateDisplayedIndex = result.length - 1;
		})
	}

	nextDate(): void {
		if (this._availableDates[this._dateDisplayedIndex + 1]) {
			this._dateDisplayedIndex = this._dateDisplayedIndex + 1;
			this.dateDisplayed$.next(this._availableDates[this._dateDisplayedIndex]);

			this.changeDateAfter.next(this.dateDisplayed$.getValue());
		}
	}

	previousDate(): void {
		if (this._availableDates[this._dateDisplayedIndex - 1]) {
			this._dateDisplayedIndex--;
			this.dateDisplayed$.next(this._availableDates[this._dateDisplayedIndex]);

			this.changeDateBefore.next(this.dateDisplayed$.getValue());
		}
	}

}
