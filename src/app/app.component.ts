import {Component, HostListener, inject, OnInit} from '@angular/core';
import { RouterOutlet } from '@angular/router';
import {BrandNameComponent} from "./components/brand-name/brand-name.component";
import {MainNavComponent} from "./components/nagivation/main-nav/main-nav.component";
import {UserService} from "./services/user/user.service";
import {MatDialog} from "@angular/material/dialog";
import {MricPromoComponent} from "./components/lib/mric-promo/mric-promo.component";
import {M} from "@angular/material/dialog.d-B5HZULyo";

@Component({
    selector: 'app-root',
	imports: [RouterOutlet, BrandNameComponent, MainNavComponent],
    templateUrl: './app.component.html',
    styleUrl: './app.component.less'
})
export class AppComponent implements OnInit {
	userService = inject(UserService);
	readonly dialog = inject(MatDialog);

	showElement = false;

	private _currentUser: string  | null = null;
	private _isUserLoggedIn: string | null = null;
	dialogRef: M<MricPromoComponent, any> | undefined;

	ngOnInit(): void {
		this._currentUser = localStorage.getItem("currentUser");
		this._isUserLoggedIn = localStorage.getItem("isUserLoggedIn");
		if (this._currentUser) {
			this.userService.currentUser$.next(JSON.parse(this._currentUser));
		}

		if (this._isUserLoggedIn) {
			this.userService.userLoggedIn$.next(JSON.parse(this._isUserLoggedIn));
		}

		this.dialogRef = this.dialog.open(MricPromoComponent);
	}

	@HostListener('window:scroll', [])
	onWindowScroll() {
		const element = document.querySelector('.brand-name');
		if (element) {
			const rect = element.getBoundingClientRect();
			this.showElement = rect.bottom <= 50;
		}
	}
}
