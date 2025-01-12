import { Injectable } from "@angular/core";
import {BehaviorSubject} from "rxjs";

export interface Toast {
	message: string,
	delay: number,
	type: "success" | "info" | "warning" | "error",
}

@Injectable({
	providedIn: "root"
})
export class ToastService {

	private _currentId = 0;

	toasts$ = new BehaviorSubject<Toast[]>([]);

	show(message: string, delay = 5000, type: Toast["type"]): void {
		const newString = message + this._currentId++;

		const newToastItem = {
			message: newString,
			delay,
			type } as Toast;

		const currentToasts = this.toasts$.getValue();
		this.toasts$.next([...currentToasts, newToastItem]);

	}

	remove(toast: Toast): void {
		const toasts = this.toasts$.getValue();
		this.toasts$.next(toasts.filter(t =>  t !== toast));
	}

}
