import { Injectable } from "@angular/core";
import {AngularFireStorage} from "@angular/fire/compat/storage";
import {finalize, Observable, switchMap} from "rxjs";

@Injectable({
	providedIn: "root"
})
export class FileUploadService {

	constructor( private _storage: AngularFireStorage) {}

	uploadFile(file: File): Observable<string> {
		const filePath = `uploads/${Date.now()}_${file.name}`;
		const fileRef = this._storage.ref(filePath);
		const task = this._storage.upload(filePath, file);

		return task.snapshotChanges()
			.pipe(
				finalize(() => console.log("upload complete")),
				switchMap(() => fileRef.getDownloadURL()));
	}
}
