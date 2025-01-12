import {Component, OnInit} from "@angular/core";
import {HistoricService} from "../../services/historic/historic.service";
import {Observable} from "rxjs";
import {Vegetable} from "../../models/vegetable.model";
import {AsyncPipe} from "@angular/common";

@Component({
	selector: "app-historic",
	standalone: true,
	imports: [
		AsyncPipe
	],
	templateUrl: "./historic.component.html",
	styleUrl: "./historic.component.less"
})
export class HistoricComponent implements OnInit {

	constructor(private _historicService: HistoricService) { }

	crops$: Observable<Vegetable[]> | undefined;

	ngOnInit(): void {
		this.crops$ = this._historicService.getHistoricByName("Angive");
	}

}
