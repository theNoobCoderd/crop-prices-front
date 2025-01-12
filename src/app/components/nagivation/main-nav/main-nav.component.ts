import {Component, inject, OnInit} from "@angular/core";
import {Router} from "@angular/router";
import {AuthService} from "../../../services/authentication/auth.service";
import {AsyncPipe} from "@angular/common";
import {ToastService} from "../../../services/ng-toast/toast.service";

@Component({
	selector: "app-main-nav",
	standalone: true,
	imports: [
		AsyncPipe
	],
	templateUrl: "./main-nav.component.html",
	styleUrl: "./main-nav.component.less"
})
export class MainNavComponent implements OnInit {
	router = inject(Router);
	authService = inject(AuthService);
	toastService = inject(ToastService);

	ngOnInit(): void {
		this.router.navigate(["/page1"], { skipLocationChange: true });
	}


	navToListing() : void {
		this.router.navigate(["/page1"], { skipLocationChange: true });
	}

	navToMarketplace() : void {
		this.toastService.show("message", 500000, "info")
		this.router.navigate(["/page2"], { skipLocationChange: true });
	}

	navToHistoric(): void {
		this.router.navigate(["/page7"], { skipLocationChange: true });
	}

	navToLogin() : void {
		this.router.navigate(["/page4"], { skipLocationChange: true });
	}

	navToProfile() : void {
		this.router.navigate(["/page5"], { skipLocationChange: true });
	}
}
