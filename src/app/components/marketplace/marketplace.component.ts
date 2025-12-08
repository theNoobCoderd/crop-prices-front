import {Component, OnDestroy} from "@angular/core";
import {MarketplaceItemComponent} from "./marketplace-item/marketplace-item.component";
import {MARKETPLACE_LISTING} from "../../../assets/mocks/mock-data";
import {MarketplaceListing} from "../../models/marketplace-listing.model";
import {AddCropComponent} from "./add-crop/add-crop.component";
import {ListingService} from "../../services/listing/listing.service";
import {async, BehaviorSubject, Subject, takeUntil} from "rxjs";
import {AsyncPipe} from "@angular/common";
import {NgxSkeletonLoaderModule} from "ngx-skeleton-loader";

@Component({
    selector: "app-marketplace",
	imports: [
		MarketplaceItemComponent,
		AddCropComponent,
		AsyncPipe,
		NgxSkeletonLoaderModule,
	],
    templateUrl: "./marketplace.component.html",
    styleUrl: "./marketplace.component.less"
})
export class MarketplaceComponent implements OnDestroy {

	marketPlaceItems$ = new BehaviorSubject<MarketplaceListing[]>([]);
	listingsLoaded$ = new BehaviorSubject<boolean>(false);

	private _destroy$ = new Subject<void>();

	constructor(private _marketPlaceListing: ListingService) {
		this.listingsLoaded$.next(false);
		this._marketPlaceListing.getAllListing()
			.pipe(takeUntil(this._destroy$))
			.subscribe(results => {
				const first = this.tempMethod(results);
				this.marketPlaceItems$.next(first);
				this.listingsLoaded$.next(true);
			});
	}

	ngOnDestroy(): void {
		this._destroy$.next();
		this._destroy$.complete();
	}

	private tempMethod(listing: MarketplaceListing[]): MarketplaceListing[] {
		let id = "f625352a-e23f-4bc7-b1db-c3a3ed21c8a8";
		const index = listing.findIndex(item => item.id === id);
		if (index > -1) {
			const [item] = listing.splice(index, 1); // remove the item
			listing.unshift(item); // put it at the start
		}

		const item = listing.find(x => x.id === id);
		if (!item) return listing;

		return [item, ...listing.filter(x => x.id !== id)];
	}

	mockMarketPlaceItems: MarketplaceListing[] = MARKETPLACE_LISTING
}
