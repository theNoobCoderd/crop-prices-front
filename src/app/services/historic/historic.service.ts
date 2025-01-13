import { Injectable } from "@angular/core";
import {environment} from "../../../environments/environment";
import { HttpClient } from "@angular/common/http";
import {Observable} from "rxjs";
import {Vegetable} from "../../models/vegetable.model";

@Injectable({
	providedIn: "root"
})
export class HistoricService {

	private _apiUrl = environment.apiUrl + "/api/v1/history";

	constructor(private _http: HttpClient) { }

	getHistoricByName(name: string): Observable<Vegetable[]> {
		const url = `${this._apiUrl}/test?name=${name}`;
		return this._http.get<Vegetable[]>(url);
	}
}
