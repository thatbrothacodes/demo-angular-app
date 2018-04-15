import { Component, Output } from '@angular/core';
import { MatDialog } from '@angular/material';

@Component({
  selector: 'app-dealer-winner-dialog',
  templateUrl: './dealer-winner-dialog.component.html',
  styleUrls: ['./dealer-winner-dialog.component.css']
})
export class DealerWinnerDialogComponent {

  constructor(private dialog: MatDialog) { }

  @Output()
  openDialog() {
    this.dialog.open(DealerWinnerDialogComponent);
  }
}
