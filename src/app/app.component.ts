import {Component, HostListener, inject, OnInit} from '@angular/core';
import { RouterOutlet } from '@angular/router';
import {ItemTableComponent} from "./components/item-table/item-table.component";
import {NgClass} from "@angular/common";
import {BrandNameComponent} from "./components/brand-name/brand-name.component";
import {MainNavComponent} from "./components/nagivation/main-nav/main-nav.component";
import {AuthService} from "./services/authentication/auth.service";

@Component({
	selector: 'app-root',
	standalone: true,
	imports: [RouterOutlet, ItemTableComponent, NgClass, BrandNameComponent, MainNavComponent],
	templateUrl: './app.component.html',
	styleUrl: './app.component.less',
})
export class AppComponent implements OnInit {
	authService = inject(AuthService);

	showElement = false;

	ngOnInit(): void {
		this.authService.user$.subscribe(user => {
			if (user) {
				this.authService.currentUserSignal.set({
					email: user.email!,
					username: user.displayName!,
					phone: user.phoneNumber!
				})
			} else {
				this.authService.currentUserSignal.set(null);
			}

			console.log("user signal", this.authService.currentUserSignal());
		})
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
