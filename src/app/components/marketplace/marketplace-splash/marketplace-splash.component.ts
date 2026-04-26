import {Component, inject, OnDestroy, OnInit} from "@angular/core";
import {PagesService} from "../../../services/pages.service";
import {NavigationPage} from "../../../models/navigation-page.enum";
import {Router} from "@angular/router";
import {Type} from "../../../models/type.enum";
import {ListingService} from "../../../services/listing/listing.service";
import {BehaviorSubject, Subject, takeUntil} from "rxjs";
import {MarketplaceListing} from "../../../models/marketplace-listing.model";
import {AsyncPipe} from "@angular/common";

@Component({
  selector: "app-marketplace-splash",
	imports: [
		AsyncPipe
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

	private _destroy$ = new Subject<void>();

	ngOnInit(): void {
		this.listingService.getAllListingByType(Type.VEGETABLE, 2)
			.pipe(takeUntil(this._destroy$))
			.subscribe(result => {
				this.cropsListing$.next(result);
			});

		this.listingService.getAllListingByType(Type.DECORATIVE, 2)
			.pipe(takeUntil(this._destroy$))
			.subscribe(result => {
				this.decorativeListing$.next(result);
			});

		this.listingService.getAllListingByType(Type.SEEDLING, 2)
			.pipe(takeUntil(this._destroy$))
			.subscribe(result => {
				this.seedlingListing$.next(result);
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
}
