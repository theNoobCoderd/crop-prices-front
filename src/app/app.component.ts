import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import {ItemTableComponent} from "./components/item-table/item-table.component";

@Component({
	selector: 'app-root',
	standalone: true,
	imports: [RouterOutlet, ItemTableComponent],
	templateUrl: './app.component.html',
	styleUrl: './app.component.less',
})
export class AppComponent {
}
