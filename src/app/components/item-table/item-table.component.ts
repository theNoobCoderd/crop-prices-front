import {Component, OnInit} from '@angular/core';
import {CropsService} from "../../services/crops/crops.service";
import {Vegetable} from "../../models/vegetable.model";
import {AsyncPipe, NgSwitch, NgSwitchCase} from "@angular/common";
import {Observable} from "rxjs";
import {ExtractionDate} from "../../models/extraction-date.model";
import {Unit} from "../../models/unit.enum";
import {ReplaceBatonPipe} from "../../pipes/replace-baton.pipe";
import {NgxSkeletonLoaderModule} from "ngx-skeleton-loader";
import {ListingNavComponent} from "../nagivation/listing-nav/listing-nav.component";
import {JoinSocialComponent} from "../floating-interactions/join-social/join-social.component";

@Component({
    selector: 'app-item-table',
    imports: [
        AsyncPipe,
        ListingNavComponent,
        ReplaceBatonPipe,
        NgxSkeletonLoaderModule,
        NgSwitch,
        NgSwitchCase,
        JoinSocialComponent
    ],
    templateUrl: './item-table.component.html',
    styleUrl: './item-table.component.less'
})
export class ItemTableComponent  implements OnInit {
	vegetables$: Observable<Vegetable[]> | undefined;

	constructor(private _cropsService: CropsService) {
	}

	ngOnInit(): void {
		console.log("table initialized");
	}

	nextDate(nextDate: ExtractionDate): void {
		this.vegetables$ = this._cropsService.getVegetableByDate(nextDate);
	}

	previousDate(previousDate: ExtractionDate): void {
		// this.vegetables$ = this._cropsService.getVegetableByDate(previousDate);
	}

	currentDate(previousDate: ExtractionDate): void {
		// this.vegetables$ = this._cropsService.getVegetableByDate(previousDate);
	}

	protected readonly Unit = Unit;
}
