import {Component} from "@angular/core";
import {MarketplaceItemComponent} from "./marketplace-item/marketplace-item.component";
import {MARKETPLACE_LISTING} from "../../../assets/mocks/mock-data";
import {MarketplaceListing} from "../../models/marketplace-listing.model";
import {AddCropComponent} from "./add-crop/add-crop.component";
import {ListingService} from "../../services/listing/listing.service";
import {BehaviorSubject} from "rxjs";

@Component({
    selector: "app-marketplace",
	imports: [
		MarketplaceItemComponent,
		AddCropComponent,
	],
    templateUrl: "./marketplace.component.html",
    styleUrl: "./marketplace.component.less"
})
export class MarketplaceComponent {

	marketPlaceItems$ = new BehaviorSubject<MarketplaceListing[]>([]);

	constructor(private _marketPlaceListing: ListingService) {
		// this._marketPlaceListing.getAllListing().subscribe(results => {
		// 	console.log(results);
		// 	this.marketPlaceItems$.next(results);
		// });
	}

	mockMarketPlaceItems: MarketplaceListing[] = MARKETPLACE_LISTING
}
