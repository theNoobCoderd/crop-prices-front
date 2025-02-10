import { Component } from "@angular/core";
import {TickerComponent} from "./ticker/ticker.component";
import {LoginTopComponent} from "./login-top/login-top.component";

@Component({
  selector: "app-top-bar",
	imports: [
		TickerComponent,
		LoginTopComponent
	],
  templateUrl: "./top-bar.component.html",
  styleUrl: "./top-bar.component.less"
})
export class TopBarComponent {

}
