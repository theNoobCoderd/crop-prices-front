import { Routes } from '@angular/router';
import {ItemTableComponent} from "./components/item-table/item-table.component";
import {MarketplaceComponent} from "./components/marketplace/marketplace.component";
import {CreateListingComponent} from "./components/marketplace/create-listing/create-listing.component";
import {LoginComponent} from "./components/login/login.component";
import {RegisterComponent} from "./components/register/register.component";

export const routes: Routes = [
	{ path: 'page1', component: ItemTableComponent },
	{ path: 'page2', component: MarketplaceComponent },
	{ path: 'page3', component: CreateListingComponent },
	{ path: 'page4', component: LoginComponent },
	{ path: 'page5', component: RegisterComponent },
];
