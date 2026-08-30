import { Injectable } from "@angular/core";
import {environment} from "../../../environments/environment";
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {Rating, CreateRatingRequest} from "../../models/rating.model";

@Injectable({
	providedIn: "root"
})
export class RatingService {
	private apiUrl = environment.apiUrl + "/api/v1/ratings";

	constructor(private _http: HttpClient) { }

	getRatingsForUser(userId: string): Observable<Rating[]> {
		const url = `${this.apiUrl}/user/${userId}`;
		return this._http.get<Rating[]>(url);
	}

	rateParticipant(request: CreateRatingRequest): Observable<Rating> {
		return this._http.post<Rating>(this.apiUrl, request);
	}
}
