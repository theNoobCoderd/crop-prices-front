import { Component } from "@angular/core";
import {Toast, ToastService} from "../../services/ng-toast/toast.service";
import {NgbToast} from "@ng-bootstrap/ng-bootstrap";
import {NgForOf} from "@angular/common";

@Component({
    selector: "app-toast",
    imports: [
        NgbToast,
        NgForOf
    ],
    templateUrl: "./ng-toast.component.html",
    styleUrl: "./ng-toast.component.less"
})
export class NgToastComponent {

	toasts: Toast[] = [];

	constructor(private _toastService: ToastService) {
		_toastService.toasts$.subscribe(toasts => {
			this.toasts = toasts;

			if (this.toasts.length > 2 ) {
				this._toastService.remove(this.toasts[0]);
			}
		});
	}

	removeToast(toast: Toast): void {
		this._toastService.remove(toast);
	}
}
