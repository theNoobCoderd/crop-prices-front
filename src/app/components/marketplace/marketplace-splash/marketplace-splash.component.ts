import {Component, inject, OnDestroy, OnInit} from "@angular/core";
import {PagesService} from "../../../services/pages.service";
import {NavigationPage} from "../../../models/navigation-page.enum";
import {Router} from "@angular/router";
import {Type} from "../../../models/type.enum";
import {ListingService} from "../../../services/listing/listing.service";
import {async, BehaviorSubject, Subject, takeUntil} from "rxjs";
import {MarketplaceListing} from "../../../models/marketplace-listing.model";
import {AsyncPipe} from "@angular/common";
import {NgxSkeletonLoaderModule} from "ngx-skeleton-loader";

@Component({
  selector: "app-marketplace-splash",
	imports: [
		AsyncPipe,
		NgxSkeletonLoaderModule
	],
  templateUrl: "./marketplace-splash.component.html",
  styleUrl: "./marketplace-splash.component.less"
})
export class MarketplaceSplashComponent implements OnInit, OnDestroy {
	pagesService = inject(PagesService);
	listingService = inject(ListingService);
	router = inject(Router);

	cropsListing$ = new BehaviorSubject<MarketplaceListing[]>([]);
	decorativeListing$ = new BehaviorSubject<MarketplaceListing[]>([]);
	seedlingListing$ = new BehaviorSubject<MarketplaceListing[]>([]);

	cropListingsLoaded$ = new BehaviorSubject<boolean>(false);
	decorativeListingsLoaded$ = new BehaviorSubject<boolean>(false);
	seedlingListingsLoaded$ = new BehaviorSubject<boolean>(false);

	private _destroy$ = new Subject<void>();

	ngOnInit(): void {
		this.cropListingsLoaded$.next(false);
		this.decorativeListingsLoaded$.next(false);
		this.seedlingListingsLoaded$.next(false);

		this.listingService.getAllListingByType(Type.VEGETABLE, 2)
			.pipe(takeUntil(this._destroy$))
			.subscribe(result => {
				this.cropsListing$.next(result);
				this.cropListingsLoaded$.next(true);
			});

		this.listingService.getAllListingByType(Type.DECORATIVE, 2)
			.pipe(takeUntil(this._destroy$))
			.subscribe(result => {
				this.decorativeListing$.next(result);
				this.decorativeListingsLoaded$.next(true);
			});

		this.listingService.getAllListingByType(Type.SEEDLING, 2)
			.pipe(takeUntil(this._destroy$))
			.subscribe(result => {
				this.seedlingListing$.next(result);
				this.seedlingListingsLoaded$.next(true);
			});
	}

	ngOnDestroy(): void {
		this._destroy$.next();
		this._destroy$.complete();
	}

	navMarketplaceVegetable(): void {
		this.pagesService.changePageTo(NavigationPage.MARKETPLACE);
		this.router.navigate(["/page2"], { state: {data: Type.VEGETABLE}, skipLocationChange: true });
	}

	navMarketplaceDecorative(): void {
		this.pagesService.changePageTo(NavigationPage.MARKETPLACE);
		this.router.navigate(["/page2"], { state: {data: Type.DECORATIVE}, skipLocationChange: true });
	}

	navMarketplaceSeedlings(): void {
		this.pagesService.changePageTo(NavigationPage.MARKETPLACE);
		this.router.navigate(["/page2"], { state: {data: Type.SEEDLING}, skipLocationChange: true });
	}

	protected readonly async = async;
}
