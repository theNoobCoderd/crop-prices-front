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
import {ReplaceBatonPipe} from "../../pipes/replace-baton.pipe";

@Component({
	selector: 'app-item-table',
	standalone: true,
	imports: [
		AsyncPipe,
		NavigationComponent,
		BrandNameComponent,
		ReplaceBatonPipe
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
			{id: 1, name: "Angives", type: Type.VEGETABLE, unitOfMeasure: Unit.KG, averagePrice: 212, lowPrice: 223, highPrice: 564, totalSold: 500},
			{id: 2, name: "Pomme de terre", type: Type.VEGETABLE, unitOfMeasure: Unit.PACKET, averagePrice: 212, lowPrice: 223, highPrice: 564, totalSold: 500},
			{id: 2, name: "Pomme d'Amour", type: Type.VEGETABLE, unitOfMeasure: Unit.UNITS, averagePrice: 212, lowPrice: 223, highPrice: 564, totalSold: 500},
			{id: 2, name: "Poivron (Rouge)", type: Type.VEGETABLE, unitOfMeasure: Unit.PACKET, averagePrice: 212, lowPrice: 223, highPrice: 564, totalSold: 500},
			{id: 2, name: "Laque Onion", type: Type.VEGETABLE, unitOfMeasure: Unit.PACKET, averagePrice: 1600, lowPrice: 223, highPrice: 564, totalSold: 500},
			{id: 2, name: "Gros Piment", type: Type.VEGETABLE, unitOfMeasure: Unit.UNITS, averagePrice: 212, lowPrice: 223, highPrice: 564, totalSold: 500},
			{id: 2, name: "Brede Tom Pouce", type: Type.VEGETABLE, unitOfMeasure: Unit.UNITS, averagePrice: 212, lowPrice: 223, highPrice: 564, totalSold: 500},
			{id: 2, name: "Brede Baton Blanc", type: Type.VEGETABLE, unitOfMeasure: Unit.PACKET, averagePrice: 212, lowPrice: 223, highPrice: 564, totalSold: 500},
			{id: 2, name: "Brede Baton Vert", type: Type.VEGETABLE, unitOfMeasure: Unit.PACKET, averagePrice: 212, lowPrice: 223, highPrice: 564, totalSold: 500},
			{id: 2, name: "Brede Chouchou", type: Type.VEGETABLE, unitOfMeasure: Unit.KG, averagePrice: 212, lowPrice: 223, highPrice: 564, totalSold: 500},
			{id: 2, name: "Chou (Vert)", type: Type.VEGETABLE, unitOfMeasure: Unit.KG, averagePrice: 212, lowPrice: 223, highPrice: 564, totalSold: 12500},
			{id: 2, name: "Carrots", type: Type.VEGETABLE, unitOfMeasure: Unit.PACKET, averagePrice: 212, lowPrice: 223, highPrice: 564, totalSold: 500},
			{id: 2, name: "Carrots", type: Type.VEGETABLE, unitOfMeasure: Unit.PACKET, averagePrice: 212, lowPrice: 223, highPrice: 564, totalSold: 500},
			{id: 2, name: "Carrots", type: Type.VEGETABLE, unitOfMeasure: Unit.KG, averagePrice: 212, lowPrice: 223, highPrice: 564, totalSold: 500},
			{id: 2, name: "Carrots", type: Type.VEGETABLE, unitOfMeasure: Unit.PACKET, averagePrice: 212, lowPrice: 223, highPrice: 564, totalSold: 500},
			{id: 2, name: "Carrots", type: Type.VEGETABLE, unitOfMeasure: Unit.PACKET, averagePrice: 212, lowPrice: 223, highPrice: 564, totalSold: 500},
			{id: 2, name: "Carrots", type: Type.VEGETABLE, unitOfMeasure: Unit.KG, averagePrice: 212, lowPrice: 223, highPrice: 564, totalSold: 500},
			{id: 2, name: "Carrots", type: Type.VEGETABLE, unitOfMeasure: Unit.PACKET, averagePrice: 212, lowPrice: 223, highPrice: 564, totalSold: 500},
			{id: 2, name: "Carrots", type: Type.VEGETABLE, unitOfMeasure: Unit.PACKET, averagePrice: 212, lowPrice: 223, highPrice: 564, totalSold: 500},
			{id: 2, name: "Carrots", type: Type.VEGETABLE, unitOfMeasure: Unit.PACKET, averagePrice: 212, lowPrice: 223, highPrice: 564, totalSold: 500},
			{id: 2, name: "Carrots", type: Type.VEGETABLE, unitOfMeasure: Unit.PACKET, averagePrice: 212, lowPrice: 223, highPrice: 564, totalSold: 500},
			{id: 2, name: "Carrots", type: Type.VEGETABLE, unitOfMeasure: Unit.PACKET, averagePrice: 212, lowPrice: 223, highPrice: 564, totalSold: 500},
			{id: 2, name: "Carrots", type: Type.VEGETABLE, unitOfMeasure: Unit.PACKET, averagePrice: 212, lowPrice: 223, highPrice: 564, totalSold: 500},
			{id: 2, name: "Carrots", type: Type.VEGETABLE, unitOfMeasure: Unit.PACKET, averagePrice: 212, lowPrice: 223, highPrice: 564, totalSold: 500},
			{id: 2, name: "Carrots", type: Type.VEGETABLE, unitOfMeasure: Unit.PACKET, averagePrice: 212, lowPrice: 223, highPrice: 564, totalSold: 500},
			{id: 2, name: "Carrots", type: Type.VEGETABLE, unitOfMeasure: Unit.PACKET, averagePrice: 212, lowPrice: 223, highPrice: 564, totalSold: 500},
			{id: 2, name: "Carrots", type: Type.VEGETABLE, unitOfMeasure: Unit.PACKET, averagePrice: 212, lowPrice: 223, highPrice: 564, totalSold: 500},
			{id: 2, name: "Carrots", type: Type.VEGETABLE, unitOfMeasure: Unit.PACKET, averagePrice: 212, lowPrice: 223, highPrice: 564, totalSold: 500},
			{id: 2, name: "Carrots", type: Type.VEGETABLE, unitOfMeasure: Unit.PACKET, averagePrice: 212, lowPrice: 223, highPrice: 564, totalSold: 500},
			{id: 2, name: "Carrots", type: Type.VEGETABLE, unitOfMeasure: Unit.PACKET, averagePrice: 212, lowPrice: 223, highPrice: 564, totalSold: 500},
			{id: 2, name: "Carrots", type: Type.VEGETABLE, unitOfMeasure: Unit.PACKET, averagePrice: 212, lowPrice: 223, highPrice: 564, totalSold: 500},
			{id: 3, name: "Banana", type: Type.VEGETABLE, unitOfMeasure: Unit.UNITS} ] as Vegetable[]);
	}

	nextDate(nextDate: ExtractionDate): void {
		this.vegetables$ = this._cropsService.getVegetableByDate(nextDate);
	}

	previousDate(previousDate: ExtractionDate): void {
		this.vegetables$ = this._cropsService.getVegetableByDate(previousDate);
	}
}
