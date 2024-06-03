import {Component, OnInit} from '@angular/core';
import {CropsService} from "../../services/crops/crops.service";
import {Vegetable} from "../../models/vegetable.model";
import {AsyncPipe} from "@angular/common";
import {NavigationComponent} from "../nagivation/navigation.component";
import {Observable, of} from "rxjs";
import {BrandNameComponent} from "../brand-name/brand-name.component";
import {ExtractionDate} from "../../models/extraction-date.model";
import {Type} from "../../models/type.enum";
import {Unit} from "../../models/unit.enum";

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
		// this.vegetables$ = this._cropsService.getVegetableByMostRecentDate();
		this.vegetables$ = of([
			{id: 1, name: "Angives", type: Type.VEGETABLE, unitOfMeasure: Unit.KG, averagePrice: 212, lowPrice: 223, highPrice: 564},
			{id: 2, name: "Carrots", type: Type.VEGETABLE, unitOfMeasure: Unit.PACKET, averagePrice: 212, lowPrice: 223, highPrice: 564},
			{id: 2, name: "Carrots", type: Type.VEGETABLE, unitOfMeasure: Unit.PACKET, averagePrice: 212, lowPrice: 223, highPrice: 564},
			{id: 2, name: "Carrots", type: Type.VEGETABLE, unitOfMeasure: Unit.PACKET, averagePrice: 212, lowPrice: 223, highPrice: 564},
			{id: 2, name: "Carrots", type: Type.VEGETABLE, unitOfMeasure: Unit.PACKET, averagePrice: 212, lowPrice: 223, highPrice: 564},
			{id: 2, name: "Carrots", type: Type.VEGETABLE, unitOfMeasure: Unit.PACKET, averagePrice: 212, lowPrice: 223, highPrice: 564},
			{id: 2, name: "Carrots", type: Type.VEGETABLE, unitOfMeasure: Unit.PACKET, averagePrice: 212, lowPrice: 223, highPrice: 564},
			{id: 2, name: "Carrots", type: Type.VEGETABLE, unitOfMeasure: Unit.PACKET, averagePrice: 212, lowPrice: 223, highPrice: 564},
			{id: 2, name: "Carrots", type: Type.VEGETABLE, unitOfMeasure: Unit.PACKET, averagePrice: 212, lowPrice: 223, highPrice: 564},
			{id: 2, name: "Carrots", type: Type.VEGETABLE, unitOfMeasure: Unit.PACKET, averagePrice: 212, lowPrice: 223, highPrice: 564},
			{id: 2, name: "Carrots", type: Type.VEGETABLE, unitOfMeasure: Unit.PACKET, averagePrice: 212, lowPrice: 223, highPrice: 564},
			{id: 2, name: "Carrots", type: Type.VEGETABLE, unitOfMeasure: Unit.PACKET, averagePrice: 212, lowPrice: 223, highPrice: 564},
			{id: 2, name: "Carrots", type: Type.VEGETABLE, unitOfMeasure: Unit.PACKET, averagePrice: 212, lowPrice: 223, highPrice: 564},
			{id: 2, name: "Carrots", type: Type.VEGETABLE, unitOfMeasure: Unit.PACKET, averagePrice: 212, lowPrice: 223, highPrice: 564},
			{id: 2, name: "Carrots", type: Type.VEGETABLE, unitOfMeasure: Unit.PACKET, averagePrice: 212, lowPrice: 223, highPrice: 564},
			{id: 2, name: "Carrots", type: Type.VEGETABLE, unitOfMeasure: Unit.PACKET, averagePrice: 212, lowPrice: 223, highPrice: 564},
			{id: 2, name: "Carrots", type: Type.VEGETABLE, unitOfMeasure: Unit.PACKET, averagePrice: 212, lowPrice: 223, highPrice: 564},
			{id: 2, name: "Carrots", type: Type.VEGETABLE, unitOfMeasure: Unit.PACKET, averagePrice: 212, lowPrice: 223, highPrice: 564},
			{id: 2, name: "Carrots", type: Type.VEGETABLE, unitOfMeasure: Unit.PACKET, averagePrice: 212, lowPrice: 223, highPrice: 564},
			{id: 2, name: "Carrots", type: Type.VEGETABLE, unitOfMeasure: Unit.PACKET, averagePrice: 212, lowPrice: 223, highPrice: 564},
			{id: 2, name: "Carrots", type: Type.VEGETABLE, unitOfMeasure: Unit.PACKET, averagePrice: 212, lowPrice: 223, highPrice: 564},
			{id: 2, name: "Carrots", type: Type.VEGETABLE, unitOfMeasure: Unit.PACKET, averagePrice: 212, lowPrice: 223, highPrice: 564},
			{id: 2, name: "Carrots", type: Type.VEGETABLE, unitOfMeasure: Unit.PACKET, averagePrice: 212, lowPrice: 223, highPrice: 564},
			{id: 2, name: "Carrots", type: Type.VEGETABLE, unitOfMeasure: Unit.PACKET, averagePrice: 212, lowPrice: 223, highPrice: 564},
			{id: 2, name: "Carrots", type: Type.VEGETABLE, unitOfMeasure: Unit.PACKET, averagePrice: 212, lowPrice: 223, highPrice: 564},
			{id: 2, name: "Carrots", type: Type.VEGETABLE, unitOfMeasure: Unit.PACKET, averagePrice: 212, lowPrice: 223, highPrice: 564},
			{id: 2, name: "Carrots", type: Type.VEGETABLE, unitOfMeasure: Unit.PACKET, averagePrice: 212, lowPrice: 223, highPrice: 564},
			{id: 2, name: "Carrots", type: Type.VEGETABLE, unitOfMeasure: Unit.PACKET, averagePrice: 212, lowPrice: 223, highPrice: 564},
			{id: 2, name: "Carrots", type: Type.VEGETABLE, unitOfMeasure: Unit.PACKET, averagePrice: 212, lowPrice: 223, highPrice: 564},
			{id: 2, name: "Carrots", type: Type.VEGETABLE, unitOfMeasure: Unit.PACKET, averagePrice: 212, lowPrice: 223, highPrice: 564},
			{id: 2, name: "Carrots", type: Type.VEGETABLE, unitOfMeasure: Unit.PACKET, averagePrice: 212, lowPrice: 223, highPrice: 564},
			{id: 3, name: "Banana", type: Type.VEGETABLE, unitOfMeasure: Unit.UNITS} ] as Vegetable[]);
	}

	nextDate(nextDate: ExtractionDate): void {
		this.vegetables$ = this._cropsService.getVegetableByDate(nextDate);
	}

	previousDate(previousDate: ExtractionDate): void {
		this.vegetables$ = this._cropsService.getVegetableByDate(previousDate);
	}
}