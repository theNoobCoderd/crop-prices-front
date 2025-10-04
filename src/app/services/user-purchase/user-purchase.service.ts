import {inject, Injectable} from "@angular/core";
import {Router} from "@angular/router";
import {HttpClient} from "@angular/common/http";
import {environment} from "../../../environments/environment";
import {Observable} from "rxjs";
import {UserPurchaseModel} from "../../models/user-purchase.model";

@Injectable({
  providedIn: "root"
})
export class UserPurchaseService {
	router = inject(Router);
	_http = inject(HttpClient);

	private readonly apiUrl = environment.apiUrl + "/api/v1/prem/purchases";

  constructor() { }

	getUserPurchasesByAuthId(authId: string): Observable<UserPurchaseModel[]> {
		const url = `${this.apiUrl}/${authId}/user/purchase`;
		return this._http.get<UserPurchaseModel[]>(url);
	}
}
