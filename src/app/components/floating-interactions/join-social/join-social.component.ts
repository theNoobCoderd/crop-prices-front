import {Component, HostListener} from "@angular/core";
import {NgClass} from "@angular/common";

@Component({
	selector: "app-join-social",
	standalone: true,
	imports: [NgClass],
	templateUrl: "./join-social.component.html",
	styleUrl: "./join-social.component.less"
})
export class JoinSocialComponent {
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
