import {ChangeDetectionStrategy, Component } from '@angular/core';
import {MatDialogActions, MatDialogClose, MatDialogContent, MatDialogTitle} from "@angular/material/dialog";
import {MatButtonModule} from "@angular/material/button";

@Component({
  selector: 'app-mat-dialog',
  imports: [MatDialogTitle, MatDialogContent, MatDialogActions, MatDialogClose, MatButtonModule],
  templateUrl: './mat-dialog.component.html',
  styleUrl: './mat-dialog.component.less',
	changeDetection: ChangeDetectionStrategy.OnPush,
})
export class MatDialogComponent {

}
