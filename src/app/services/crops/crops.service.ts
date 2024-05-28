import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {Vegetable} from "../../models/vegetable.model";
import {ExtractionDate} from "../../models/extraction-date.model";

@Injectable({
	providedIn: 'root'
})
export class CropsService {

	private apiUrl = "http://localhost:8080/api/v1/crops";

	constructor(private _http: HttpClient) { }

	getVegetableByDate(date: ExtractionDate): Observable<Vegetable[]> {
		const url = `${this.apiUrl}/date?date=${date}`;
		return this._http.get<Vegetable[]>(url);
	}

	getVegetableByMostRecentDate(): Observable<Vegetable[]> {
		return this._http.get<Vegetable[]>(this.apiUrl);
	}
}
