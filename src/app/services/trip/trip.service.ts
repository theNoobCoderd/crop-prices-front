import { Injectable } from "@angular/core";
import {environment} from "../../../environments/environment";
import {HttpClient, HttpParams} from "@angular/common/http";
import {Observable} from "rxjs";
import {MarketTrip, CreateTripRequest} from "../../models/market-trip.model";
import {TripContribution, JoinTripRequest, SettleContributionRequest} from "../../models/trip-contribution.model";
import {District} from "../../models/district.enum";

@Injectable({
	providedIn: "root"
})
export class TripService {
	private apiUrl = environment.apiUrl + "/api/v1/trips";

	constructor(private _http: HttpClient) { }

	createTrip(request: CreateTripRequest): Observable<MarketTrip> {
		return this._http.post<MarketTrip>(this.apiUrl, request);
	}

	getOpenTrips(district: District | string): Observable<MarketTrip[]> {
		const params = new HttpParams().set("district", district);
		return this._http.get<MarketTrip[]>(this.apiUrl, {params});
	}

	getMyTrips(): Observable<MarketTrip[]> {
		const url = `${this.apiUrl}/mine`;
		return this._http.get<MarketTrip[]>(url);
	}

	getTrip(tripId: string): Observable<MarketTrip> {
		const url = `${this.apiUrl}/${tripId}`;
		return this._http.get<MarketTrip>(url);
	}

	closeTrip(tripId: string): Observable<MarketTrip> {
		const url = `${this.apiUrl}/${tripId}/close`;
		return this._http.post<MarketTrip>(url, {});
	}

	cancelTrip(tripId: string): Observable<MarketTrip> {
		const url = `${this.apiUrl}/${tripId}/cancel`;
		return this._http.post<MarketTrip>(url, {});
	}

	completeTrip(tripId: string): Observable<MarketTrip> {
		const url = `${this.apiUrl}/${tripId}/complete`;
		return this._http.post<MarketTrip>(url, {});
	}

	getContributions(tripId: string): Observable<TripContribution[]> {
		const url = `${this.apiUrl}/${tripId}/contributions`;
		return this._http.get<TripContribution[]>(url);
	}

	joinTrip(tripId: string, request: JoinTripRequest): Observable<TripContribution> {
		const url = `${this.apiUrl}/${tripId}/contributions`;
		return this._http.post<TripContribution>(url, request);
	}

	approveContribution(tripId: string, contributionId: string): Observable<TripContribution> {
		const url = `${this.apiUrl}/${tripId}/contributions/${contributionId}/approve`;
		return this._http.post<TripContribution>(url, {});
	}

	rejectContribution(tripId: string, contributionId: string): Observable<TripContribution> {
		const url = `${this.apiUrl}/${tripId}/contributions/${contributionId}/reject`;
		return this._http.post<TripContribution>(url, {});
	}

	markCollected(tripId: string, contributionId: string): Observable<TripContribution> {
		const url = `${this.apiUrl}/${tripId}/contributions/${contributionId}/collect`;
		return this._http.post<TripContribution>(url, {});
	}

	settleContribution(tripId: string, contributionId: string, request: SettleContributionRequest): Observable<TripContribution> {
		const url = `${this.apiUrl}/${tripId}/contributions/${contributionId}/settle`;
		return this._http.post<TripContribution>(url, request);
	}

	markPaid(tripId: string, contributionId: string): Observable<TripContribution> {
		const url = `${this.apiUrl}/${tripId}/contributions/${contributionId}/pay`;
		return this._http.post<TripContribution>(url, {});
	}
}
