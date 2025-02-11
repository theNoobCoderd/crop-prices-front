import {Component, OnInit} from '@angular/core';
import {CropsService} from "../../services/crops/crops.service";
import {Vegetable} from "../../models/vegetable.model";
import {AsyncPipe, NgSwitch, NgSwitchCase} from "@angular/common";
import {NavigationComponent} from "../nagivation/navigation.component";
import {Observable, of} from "rxjs";
import {ExtractionDate} from "../../models/extraction-date.model";
import {Unit} from "../../models/unit.enum";
import {ReplaceBatonPipe} from "../../pipes/replace-baton.pipe";
import {NgxSkeletonLoaderModule} from "ngx-skeleton-loader";
import {NgbCarouselModule} from "@ng-bootstrap/ng-bootstrap";
import {GRAPH_ONE} from "../../../assets/mocks/mock-data";

@Component({
	selector: 'app-item-table',
	standalone: true,
	imports: [
		AsyncPipe,
		NavigationComponent,
		ReplaceBatonPipe,
		NgxSkeletonLoaderModule,
		NgSwitch,
		NgSwitchCase,
		NgbCarouselModule
	],
	templateUrl: './item-table.component.html',
	styleUrl: './item-table.component.less'
})
export class ItemTableComponent implements OnInit {
	vegetables$: Observable<Vegetable[]> | undefined

	constructor(private _cropsService: CropsService) {
	}

	ngOnInit(): void {
        this.currentDate();
    }

	nextDate(nextDate: ExtractionDate): void {
		this.vegetables$ = this._cropsService.getVegetableByDate(nextDate);
	}

	previousDate(previousDate: ExtractionDate): void {
		this.vegetables$ = this._cropsService.getVegetableByDate(previousDate);
	}

	currentDate(previousDate?: ExtractionDate): void {
		// this.vegetables$ = this._cropsService.getVegetableByDate(previousDate);
		this.vegetables$ = of(GRAPH_ONE);
	}

	protected readonly Unit = Unit;
}
