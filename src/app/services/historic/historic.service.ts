import { Injectable } from "@angular/core";
import {environment} from "../../../environments/environment";
import { HttpClient } from "@angular/common/http";
import {Observable} from "rxjs";
import {Vegetable} from "../../models/vegetable.model";
import {HistoryGraphModel} from "../../models/history-graph.model";

@Injectable({
	providedIn: "root"
})
export class HistoricService {

	private _apiUrl = environment.apiUrl + "/api/v1/history";

	constructor(private _http: HttpClient) { }

	getHistoricByName(name: string, range: number): Observable<HistoryGraphModel> {
		const url = `${this._apiUrl}/crop/${name}/${range}`;
		return this._http.get<HistoryGraphModel>(url);
	}
}
