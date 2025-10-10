import { Component } from '@angular/core';
import {MatProgressBar} from "@angular/material/progress-bar";
import {MatDialogActions, MatDialogContent} from "@angular/material/dialog";

@Component({
  selector: 'app-mat-dialog-loading',
	imports: [
		MatProgressBar,
		MatDialogContent,
	],
  templateUrl: './mat-dialog-loading.component.html',
  styleUrl: './mat-dialog-loading.component.less'
})
export class MatDialogLoadingComponent {

}
