import { Component } from "@angular/core";
import {MatDialogActions, MatDialogClose, MatDialogContent, MatDialogTitle} from "@angular/material/dialog";

@Component({
  selector: "app-mat-dialog-confirmation",
	imports: [
		MatDialogActions,
		MatDialogClose,
		MatDialogContent,
		MatDialogTitle
	],
  templateUrl: "./mat-dialog-confirmation.component.html",
  styleUrl: "./mat-dialog-confirmation.component.less"
})
export class MatDialogConfirmationComponent {

}
