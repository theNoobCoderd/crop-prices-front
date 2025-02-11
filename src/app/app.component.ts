import {Component, HostListener} from '@angular/core';
import {ItemTableComponent} from "./components/item-table/item-table.component";
import {NgClass} from "@angular/common";
import {BrandNameComponent} from "./components/brand-name/brand-name.component";

@Component({
	selector: 'app-root',
	standalone: true,
	imports: [ItemTableComponent, NgClass, BrandNameComponent],
	templateUrl: './app.component.html',
	styleUrl: './app.component.less',
})
export class AppComponent {

	showElement = false;

	@HostListener('window:scroll', [])
	onWindowScroll() {
		const element = document.querySelector('.brand-name');
		if (element) {
			const rect = element.getBoundingClientRect();
			this.showElement = rect.bottom <= 50;
		}
	}
}
