import { Component } from "@angular/core";
import {Router} from "@angular/router";

@Component({
    selector: "app-add-crop",
    imports: [],
    templateUrl: "./add-crop.component.html",
    styleUrl: "./add-crop.component.less"
})
export class AddCropComponent {

	constructor(private _router: Router) {}

	navToCreateListing(): void {
		this._router.navigate(["/page3"], { skipLocationChange: true });
	}

}
