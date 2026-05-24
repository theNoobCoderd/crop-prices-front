import {Component, Inject} from '@angular/core';
import {MAT_DIALOG_DATA, MatDialogActions, MatDialogContent, MatDialogRef} from "@angular/material/dialog";

@Component({
  selector: 'app-mric-promo',
	imports: [
		MatDialogActions
	],
  templateUrl: './mric-promo.component.html',
  styleUrl: './mric-promo.component.less'
})
export class MricPromoComponent {
	constructor(private dialogRef: MatDialogRef<MricPromoComponent>) {
	}

	openMRICVote() {
		window.open('https://www.nationalinnovationchallenge.com/vote/general', '_blank');
		this.closeDialog();
	}

	openYoutube() {
		window.open('https://youtu.be/sZ8_O9FFp-c?si=C_ip4JEeLVHZE3eq', '_blank');
	}

	closeDialog(): void {
		this.dialogRef.close();
	}
}
