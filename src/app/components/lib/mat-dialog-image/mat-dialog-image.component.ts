import {Component, Inject} from '@angular/core';
import {
	MAT_DIALOG_DATA,
	MatDialogActions,
	MatDialogClose,
	MatDialogContent,
} from "@angular/material/dialog";

@Component({
  selector: 'app-mat-dialog-image',
	imports: [
		MatDialogActions,
		MatDialogClose,
		MatDialogContent
	],
  templateUrl: './mat-dialog-image.component.html',
  styleUrl: './mat-dialog-image.component.less'
})
export class MatDialogImageComponent {
	constructor(@Inject(MAT_DIALOG_DATA) public data: { message: string }) {
	}
}
