import { Injectable } from "@angular/core";
import {getStorage, ref, uploadBytesResumable} from "@angular/fire/storage";
import {DataUrl} from "ngx-image-compress";

@Injectable({
	providedIn: "root"
})
export class FileUploadService {

	constructor() {}

	uploadFile(file: DataUrl): any {
		const blob = this.base64ToBlob(file);

		const storage = getStorage();
		const filePath = `uploads/${Date.now()}_${"test.jpg"}`;
		const storageRef = ref(storage, filePath);

		return uploadBytesResumable(storageRef, blob);
	}

	private base64ToBlob(base64Data: string): Blob {
		const [meta, content] = base64Data.split(',');
		const contentType = meta.split(':')[1].split(';')[0];
		const byteCharacters = atob(content);
		const byteArrays: Uint8Array[] = [];
		for (let offset = 0; offset < byteCharacters.length; offset += 512) {
			const slice = byteCharacters.slice(offset, offset + 512);
			const byteNumbers = new Array(slice.length);
			for (let i = 0; i < slice.length; i++) {
				byteNumbers[i] = slice.charCodeAt(i);
			}
			byteArrays.push(new Uint8Array(byteNumbers));
		}
		return new Blob(byteArrays, { type: contentType });
	}
}
