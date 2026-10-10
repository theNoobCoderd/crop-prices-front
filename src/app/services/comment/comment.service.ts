import { Injectable } from "@angular/core";
import {environment} from "../../../environments/environment";
import { HttpClient } from "@angular/common/http";
import {Observable} from "rxjs";
import {CommentDTO, CreateCommentRequest} from "../../models/comment.model";

@Injectable({
	providedIn: "root"
})
export class CommentService {

	constructor(private _http: HttpClient) { }

	getComments(listingId: string): Observable<CommentDTO[]> {
		const url = `${environment.apiUrl}/api/v1/listing/${listingId}/comments`;
		return this._http.get<CommentDTO[]>(url);
	}

	createComment(listingId: string, request: CreateCommentRequest): Observable<CommentDTO> {
		const url = `${environment.apiUrl}/api/v1/listing/${listingId}/comments`;
		return this._http.post<CommentDTO>(url, request);
	}
}
