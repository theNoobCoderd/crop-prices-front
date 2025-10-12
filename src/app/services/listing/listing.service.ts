import { Injectable } from "@angular/core";
import {environment} from "../../../environments/environment";
import { HttpClient } from "@angular/common/http";
import {Observable} from "rxjs";
import {MarketplaceListing} from "../../models/marketplace-listing.model";

@Injectable({
	providedIn: "root"
})
export class ListingService {
	private apiUrl = environment.apiUrl + "/api/v1/listing";

	constructor(private _http: HttpClient) { }

	getAllListing(): Observable<MarketplaceListing[]> {
		const url = `${this.apiUrl}/free`;
		return this._http.get<MarketplaceListing[]>(url);
	}

	createListing(listing: MarketplaceListing): Observable<boolean> {
		const url = `${this.apiUrl}/create`;
		return this._http.post<boolean>(url, listing);
	}

	modifyListing(listing: MarketplaceListing): Observable<boolean> {
		const url = `${this.apiUrl}/modify`;
		return this._http.post<boolean>(url, listing);
	}

	getListingsByUserId(userId: string): Observable<MarketplaceListing[]> {
		const url = `${this.apiUrl}/user/${userId}`;
		return this._http.get<MarketplaceListing[]>(url);
	}
}
