import { Injectable } from "@angular/core";
import {getStorage, ref, uploadBytesResumable} from "@angular/fire/storage";

@Injectable({
	providedIn: "root"
})
export class FileUploadService {

	constructor() {}

	uploadFile(file: File): any {
		const storage = getStorage();
		const filePath = `uploads/${Date.now()}_${file.name}`;
		const storageRef = ref(storage, 'uploads/' + file.name);

		return uploadBytesResumable(storageRef, file);
	}
}
