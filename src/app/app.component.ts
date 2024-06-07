import {Component, HostListener} from '@angular/core';
import { RouterOutlet } from '@angular/router';
import {ItemTableComponent} from "./components/item-table/item-table.component";
import {NgClass} from "@angular/common";

@Component({
	selector: 'app-root',
	standalone: true,
	imports: [RouterOutlet, ItemTableComponent, NgClass],
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
