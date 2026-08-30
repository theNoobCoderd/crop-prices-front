import {Component, EventEmitter, Input, Output} from "@angular/core";
import {DatePipe} from "@angular/common";
import {Router} from "@angular/router";
import {MarketTrip} from "../../../models/market-trip.model";
import {TripStatus} from "../../../models/trip-status.enum";
import {CommissionType} from "../../../models/commission-type.enum";

@Component({
	selector: "app-trip-card",
	imports: [
		DatePipe
	],
	templateUrl: "./trip-card.component.html",
	styleUrl: "./trip-card.component.less"
})
export class TripCardComponent {
	@Input() trip: MarketTrip | undefined;
	@Input() currentUserId: string | null = null;
	@Output() join = new EventEmitter<MarketTrip>();

	constructor(private _router: Router) { }

	viewTrip(): void {
		this._router.navigate(["/trips", this.trip?.id], {skipLocationChange: true});
	}

	onJoin(event: Event): void {
		event.stopPropagation();
		if (this.trip) {
			this.join.emit(this.trip);
		}
	}

	get isOwnTrip(): boolean {
		return !!this.currentUserId && this.trip?.collector?.id === this.currentUserId;
	}

	get canJoin(): boolean {
		return this.trip?.status === TripStatus.OPEN && !this.isOwnTrip;
	}

	protected readonly CommissionType = CommissionType;
}
