import {ChangeDetectionStrategy, Component, Inject} from '@angular/core';
import {
	MAT_DIALOG_DATA,
	MatDialogActions,
	MatDialogClose,
	MatDialogContent,
	MatDialogTitle
} from "@angular/material/dialog";
import {MatButtonModule} from "@angular/material/button";

@Component({
  selector: 'app-mat-dialog',
  imports: [MatDialogTitle, MatDialogContent, MatDialogActions, MatDialogClose, MatButtonModule],
  templateUrl: './mat-dialog.component.html',
  styleUrl: './mat-dialog.component.less',
	changeDetection: ChangeDetectionStrategy.OnPush,
})
export class MatDialogComponent {
	constructor(@Inject(MAT_DIALOG_DATA) public data: { message: string, header: string }) {
	}
}
