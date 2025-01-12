import {Component, HostListener, inject, OnInit} from '@angular/core';
import { RouterOutlet } from '@angular/router';
import {BrandNameComponent} from "./components/brand-name/brand-name.component";
import {MainNavComponent} from "./components/nagivation/main-nav/main-nav.component";
import {AuthService} from "./services/authentication/auth.service";
import {UserService} from "./services/user/user.service";
import {NgToastComponent} from "./components/ng-toast/ng-toast.component";

@Component({
	selector: 'app-root',
	standalone: true,
	imports: [RouterOutlet, BrandNameComponent, MainNavComponent, NgToastComponent],
	templateUrl: './app.component.html',
	styleUrl: './app.component.less',
})
export class AppComponent implements OnInit {
	authService = inject(AuthService);
	userService = inject(UserService);

	showElement = false;

	private _currentUser: string  | null = null;

	ngOnInit(): void {
		this.authService.firebaseUser$.subscribe(firebaseUser => {
			console.log("user signal", firebaseUser);
		});

		this._currentUser = localStorage.getItem("currentUser");
		if (this._currentUser) {
			this.userService.currentUser$.next(JSON.parse(this._currentUser));
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
