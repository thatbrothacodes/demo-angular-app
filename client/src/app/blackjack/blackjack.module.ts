import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';
import { MatButtonModule, MatDialogModule } from '@angular/material';

import { DealerWinnerDialogComponent } from './components/dealer-winner-dialog.component';
import { PlayerWinnerDialogComponent } from './components/player-winner-dialog.component';
import { BlackjackComponent } from './blackjack.component';
import { CardComponent } from './components/card.component';
import { HandComponent } from './components/hand.component';
import { routes } from './blackjack-routing.module';

@NgModule({
  imports: [
    CommonModule,
    MatButtonModule,
    MatDialogModule,
    RouterModule.forChild(routes)
  ],
  declarations: [
    BlackjackComponent,
    CardComponent,
    DealerWinnerDialogComponent,
    HandComponent,
    PlayerWinnerDialogComponent
  ],
  entryComponents: [
    DealerWinnerDialogComponent,
    PlayerWinnerDialogComponent
  ]
})
export class BlackjackModule { }
