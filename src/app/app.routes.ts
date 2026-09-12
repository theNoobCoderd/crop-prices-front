import { Routes } from '@angular/router';

export const routes: Routes = [
	{
		path: 'page1',
		loadComponent: () => import('./components/item-table/item-table.component').then(m => m.ItemTableComponent)
	},
	{
		path: 'page2',
		loadComponent: () => import('./components/marketplace/marketplace.component').then(m => m.MarketplaceComponent)
	},
	{
		path: 'page3',
		loadComponent: () => import('./components/marketplace/create-listing/create-listing.component').then(m => m.CreateListingComponent)
	},
	{
		path: 'page4',
		loadComponent: () => import('./components/login/login.component').then(m => m.LoginComponent)
	},
	{
		path: 'page5',
		loadComponent: () => import('./components/profile-wrapper/profile-wrapper.component').then(m => m.ProfileWrapperComponent)
	},
	{
		path: 'page6',
		loadComponent: () => import('./components/user-profile/user-profile.component').then(m => m.UserProfileComponent)
	},
	{
		path: 'page7',
		loadComponent: () => import('./components/historic/historic.component').then(m => m.HistoricComponent)
	},
	{
		path: 'page7/:data',
		loadComponent: () => import('./components/historic/historic.component').then(m => m.HistoricComponent)
	}
];
