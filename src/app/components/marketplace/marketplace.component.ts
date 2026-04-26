import {Component, inject, OnDestroy} from "@angular/core";
import {MarketplaceItemComponent} from "./marketplace-item/marketplace-item.component";
import {MARKETPLACE_LISTING} from "../../../assets/mocks/mock-data";
import {MarketplaceListing} from "../../models/marketplace-listing.model";
import {AddCropComponent} from "./add-crop/add-crop.component";
import {ListingService} from "../../services/listing/listing.service";
import {BehaviorSubject, Subject, takeUntil} from "rxjs";
import {AsyncPipe} from "@angular/common";
import {NgxSkeletonLoaderModule} from "ngx-skeleton-loader";
import {Router} from "@angular/router";
import {
	MatketplaceItemDecorativeComponent
} from "./decorative/matketplace-item-decorative/matketplace-item-decorative.component";
import {
	MarketplaceItemSeedlingComponent
} from "./seedling/marketplace-item-seedling/marketplace-item-seedling.component";
import {Type} from "../../models/type.enum";

@Component({
    selector: "app-marketplace",
	imports: [
		MarketplaceItemComponent,
		AddCropComponent,
		AsyncPipe,
		NgxSkeletonLoaderModule,
		MatketplaceItemDecorativeComponent,
		MarketplaceItemSeedlingComponent,
	],
    templateUrl: "./marketplace.component.html",
    styleUrl: "./marketplace.component.less"
})
export class MarketplaceComponent implements OnDestroy {

	marketPlaceItems$ = new BehaviorSubject<MarketplaceListing[]>([]);
	listingsLoaded$ = new BehaviorSubject<boolean>(false);
	marketplaceType$ = new BehaviorSubject<Type>(Type.VEGETABLE);

	private _destroy$ = new Subject<void>();

	constructor(private _marketPlaceListing: ListingService, private _router: Router) {
		const navigation = this._router.getCurrentNavigation();

		if (navigation?.extras?.state) {
			this.marketplaceType$.next(navigation?.extras?.state['data']);
		}

		this.listingsLoaded$.next(false);
		// this._marketPlaceListing.getAllListingByType(this.marketplaceType$.getValue())
		// 	.pipe(takeUntil(this._destroy$))
		// 	.subscribe(results => {
		// 		this.marketPlaceItems$.next(results);
		// 		this.listingsLoaded$.next(true);
		// 	});

		this.marketPlaceItems$.next(this.mockMarketPlaceItems);
		this.listingsLoaded$.next(true);
	}

	ngOnDestroy(): void {
		this._destroy$.next();
		this._destroy$.complete();
	}

	mockMarketPlaceItems: MarketplaceListing[] = MARKETPLACE_LISTING
	protected readonly Type = Type;
}
