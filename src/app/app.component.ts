import {Component, HostListener, inject, OnInit} from '@angular/core';
import { RouterOutlet } from '@angular/router';
import {BrandNameComponent} from "./components/brand-name/brand-name.component";
import {MainNavComponent} from "./components/nagivation/main-nav/main-nav.component";
import {UserService} from "./services/user/user.service";
import {TopBarComponent} from "./components/top-bar/top-bar.component";

@Component({
    selector: 'app-root',
	imports: [RouterOutlet, BrandNameComponent, MainNavComponent, TopBarComponent],
    templateUrl: './app.component.html',
    styleUrl: './app.component.less'
})
export class AppComponent implements OnInit {
	userService = inject(UserService);

	showElement = false;

	private _currentUser: string  | null = null;
	private _isUserLoggedIn: string | null = null;

	ngOnInit(): void {
		this._currentUser = localStorage.getItem("currentUser");
		this._isUserLoggedIn = localStorage.getItem("isUserLoggedIn");
		if (this._currentUser) {
			this.userService.currentUser$.next(JSON.parse(this._currentUser));
		}

		if (this._isUserLoggedIn) {
			this.userService.userLoggedIn$.next(JSON.parse(this._isUserLoggedIn));
		}
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
