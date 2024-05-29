import {Component, OnInit} from '@angular/core';
import {CropsService} from "../../services/crops/crops.service";
import {Vegetable} from "../../models/vegetable.model";
import {AsyncPipe} from "@angular/common";
import {NavigationComponent} from "../nagivation/navigation.component";
import { Observable, of } from "rxjs";
import {BrandNameComponent} from "../brand-name/brand-name.component";
import {ExtractionDate} from "../../models/extraction-date.model";

@Component({
	selector: 'app-item-table',
	standalone: true,
	imports: [
		AsyncPipe,
		NavigationComponent,
		BrandNameComponent
	],
	templateUrl: './item-table.component.html',
	styleUrl: './item-table.component.less'
})
export class ItemTableComponent  implements OnInit {
	vegetables$: Observable<Vegetable[]> | undefined

	constructor(private _cropsService: CropsService) {
	}

	ngOnInit(): void {
		this.vegetables$ = of([{id: 1, name: "bringel"}, {id: 2, name: "apple"}, {id: 3, name: "cucumber"}] as Vegetable[]);
	}

	nextDate(nextDate: ExtractionDate): void {
		this.vegetables$ = this._cropsService.getVegetableByDate(nextDate);
	}

	previousDate(previousDate: ExtractionDate): void {
		this.vegetables$ = this._cropsService.getVegetableByDate(previousDate);
	}
}
