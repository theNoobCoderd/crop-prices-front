import {Component} from '@angular/core';
import {CropsService} from "../../services/crops/crops.service";
import {Vegetable} from "../../models/vegetable.model";
import {AsyncPipe, NgSwitch, NgSwitchCase} from "@angular/common";
import {NavigationComponent} from "../nagivation/navigation.component";
import {Observable} from "rxjs";
import {ExtractionDate} from "../../models/extraction-date.model";
import {Unit} from "../../models/unit.enum";
import {ReplaceBatonPipe} from "../../pipes/replace-baton.pipe";
import {NgxSkeletonLoaderModule} from "ngx-skeleton-loader";

@Component({
	selector: 'app-item-table',
	standalone: true,
	imports: [
		AsyncPipe,
		NavigationComponent,
		ReplaceBatonPipe,
		NgxSkeletonLoaderModule,
		NgSwitch,
		NgSwitchCase
	],
	templateUrl: './item-table.component.html',
	styleUrl: './item-table.component.less'
})
export class ItemTableComponent {
	vegetables$: Observable<Vegetable[]> | undefined

	constructor(private _cropsService: CropsService) {
	}

	nextDate(nextDate: ExtractionDate): void {
		this.vegetables$ = this._cropsService.getVegetableByDate(nextDate);
	}

	previousDate(previousDate: ExtractionDate): void {
		this.vegetables$ = this._cropsService.getVegetableByDate(previousDate);
	}

	currentDate(previousDate: ExtractionDate): void {
		this.vegetables$ = this._cropsService.getVegetableByDate(previousDate);
	}

	protected readonly Unit = Unit;
}
