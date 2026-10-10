import { Injectable } from "@angular/core";
import {environment} from "../../../environments/environment";
import { HttpClient } from "@angular/common/http";
import {Observable} from "rxjs";

@Injectable({
	providedIn: "root"
})
export class LikeService {

	constructor(private _http: HttpClient) { }

	likeListing(listingId: string): Observable<void> {
		const url = `${environment.apiUrl}/api/v1/listing/${listingId}/likes`;
		return this._http.post<void>(url, {});
	}

	unlikeListing(listingId: string): Observable<void> {
		const url = `${environment.apiUrl}/api/v1/listing/${listingId}/likes`;
		return this._http.delete<void>(url);
	}
}
