import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";
import {Observable} from "rxjs";
import {Vegetable} from "../../models/vegetable.model";
import {ExtractionDate} from "../../models/extraction-date.model";
import {environment} from "../../../environments/environment";

@Injectable({
	providedIn: 'root'
})
export class CropsService {
	private apiUrl = environment.apiUrl + "/api/v1/crops";

	constructor(private _http: HttpClient) { }

	getVegetableByDate(date: ExtractionDate): Observable<Vegetable[]> {
		const url = `${this.apiUrl}/all/date?date=${date}`;
		return this._http.get<Vegetable[]>(url);
	}

	getVegetableByMostRecentDate(): Observable<Vegetable[]> {
		return this._http.get<Vegetable[]>(this.apiUrl);
	}
}
