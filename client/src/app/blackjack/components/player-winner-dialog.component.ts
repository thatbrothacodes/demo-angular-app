import { Component, Output } from '@angular/core';
import { MatDialog } from '@angular/material';

@Component({
  selector: 'app-player-winner-dialog',
  templateUrl: './player-winner-dialog.component.html',
  styleUrls: ['./player-winner-dialog.component.css']
})
export class PlayerWinnerDialogComponent {

  constructor(private dialog: MatDialog) { }

  @Output()
  openDialog() {
    this.dialog.open(PlayerWinnerDialogComponent);
  }
}
