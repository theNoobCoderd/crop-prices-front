import {Component, inject} from "@angular/core";
import {PagesService} from "../../../services/pages.service";
import {NavigationPage} from "../../../models/navigation-page.enum";
import {Router} from "@angular/router";
import {Type} from "../../../models/type.enum";

@Component({
  selector: "app-marketplace-splash",
	imports: [
	],
  templateUrl: "./marketplace-splash.component.html",
  styleUrl: "./marketplace-splash.component.less"
})
export class MarketplaceSplashComponent {

	pagesService = inject(PagesService);
	router = inject(Router);


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
