import { Routes } from '@angular/router';
import {ItemTableComponent} from "./components/item-table/item-table.component";
import {MarketplaceComponent} from "./components/marketplace/marketplace.component";
import {CreateListingComponent} from "./components/marketplace/create-listing/create-listing.component";
import {LoginComponent} from "./components/login/login.component";
import {UserProfileComponent} from "./components/user-profile/user-profile.component";
import {ProfileWrapperComponent} from "./components/profile-wrapper/profile-wrapper.component";
import {HistoricComponent} from "./components/historic/historic.component";
import {MarketplaceSplashComponent} from "./components/marketplace/marketplace-splash/marketplace-splash.component";
import {
	CreateListingSeedlingComponent
} from "./components/marketplace/seedling/create-listing-seedling/create-listing-seedling.component";
import {
	CreateListingDecorativeComponent
} from "./components/marketplace/decorative/create-listing-decorative/create-listing-decorative.component";

export const routes: Routes = [
	{ path: 'page1', component: ItemTableComponent },
	{ path: 'page2', component: MarketplaceComponent },
	{ path: 'page2/:data', component: MarketplaceComponent },
	{ path: 'page3', component: CreateListingComponent },
	{ path: 'page4', component: LoginComponent },
	{ path: 'page5', component: ProfileWrapperComponent },
	{ path: 'page6', component: UserProfileComponent },
	{ path: 'page7', component: HistoricComponent },
	{ path: 'page7/:data', component: HistoricComponent },
	{ path: 'page8', component: MarketplaceSplashComponent },
	{ path: 'page9', component: CreateListingSeedlingComponent },
	{ path: 'page10', component: CreateListingDecorativeComponent },
];
