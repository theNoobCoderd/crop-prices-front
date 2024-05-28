import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {ExtractionDate} from "../../models/extraction-date.model";

@Injectable({
	providedIn: 'root'
})
export class ExtractionDatesService {

	private apiUrl = "http://localhost:8080/api/v1/date";

	constructor(private _http: HttpClient) { }

	getAllAvailableDates(): Observable<ExtractionDate[]> {
		const url = `${this.apiUrl}/available`;
		return this._http.get<ExtractionDate[]>(url);
	}
}
