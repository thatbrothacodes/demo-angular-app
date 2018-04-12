import { Component, Output } from '@angular/core';
import { MatDialog, MatDialogRef } from '@angular/material';

@Component({
  selector: 'app-dealer-winner-dialog',
  templateUrl: './dealer-winner-dialog.component.html',
  styleUrls: ['./dealer-winner-dialog.component.css']
})
export class DealerWinnerDialogComponent {

  private dialogRef: MatDialogRef<DealerWinnerDialogComponent>;
  constructor(private dialog: MatDialog) { }

  @Output()
  closeDialog() {
    this.dialogRef.close();
  }

  @Output()
  openDialog() {
    this.dialogRef = this.dialog.open(DealerWinnerDialogComponent);
  }

}
