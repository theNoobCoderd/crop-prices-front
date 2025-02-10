import {Component, Input, OnInit} from "@angular/core";
import {MarketplaceListing} from "../../../models/marketplace-listing.model";
import {DatePipe} from "@angular/common";

@Component({
    selector: "app-marketplace-item",
	imports: [
		DatePipe
	],
    templateUrl: "./marketplace-item.component.html",
    styleUrl: "./marketplace-item.component.less"
})
export class MarketplaceItemComponent implements OnInit {

	@Input() item: MarketplaceListing | undefined;

	ngOnInit(): void {
		console.log("test !!");
	}
}
