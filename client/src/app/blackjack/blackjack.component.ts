import { Input, Component, OnInit, Output, AfterViewInit } from '@angular/core';
import { MatDialog, MatDialogRef } from '@angular/material';
import { DealerWinnerDialogComponent } from './components/dealer-winner-dialog.component';
import { PlayerWinnerDialogComponent } from './components/player-winner-dialog.component';
import { BlackjackService } from './services/blackjack.service';
import { Card } from './models/card';

@Component({
  providers: [
    BlackjackService,
    DealerWinnerDialogComponent,
    PlayerWinnerDialogComponent
  ],
  selector: 'app-blackjack',
  templateUrl: './blackjack.component.html',
  styleUrls: ['./blackjack.component.css']
})
export class BlackjackComponent implements OnInit, AfterViewInit {
  private _isStand = false;
  private _isGameOver = false;

  constructor(private service: BlackjackService,
    private playerDialog: PlayerWinnerDialogComponent,
    private dealerDialog: DealerWinnerDialogComponent) { }

  ngOnInit() {
    this.service.newGame();
  }

  ngAfterViewInit() {
    if (this.service.isPlayerBlackjack(this.playerCards)) {
      this.openPlayerDialog();
    } else if (this.service.isPlayerBlackjack(this.dealerCards)) {
      this.openDealerDialog();
    }
  }

  @Input()
  get isStand() {
    return this._isStand;
  }

  @Input()
  get isGameOver() {
    return this._isGameOver;
  }

  @Input()
  get playerCards(): Array<Card> {
    return this.service.playerCards;
  }

  @Input()
  get dealerCards(): Array<Card> {
    return this.service.dealerCards;
  }

  @Output()
  hitPlayerClick() {
    this.service.hitPlayer();

    if (this.service.isPlayerWinner()) {
      this.openPlayerDialog();
    } else if (this.service.isPlayerBusted(this.playerCards)) {
      this.openDealerDialog();
    }
  }

  @Output()
  standClick() {
    this._isStand = true;
    this.service.playDealer();

    if (this.service.isDealerWinner()) {
      this.openDealerDialog();
    } else {
      this.openPlayerDialog();
    }

  }

  @Output()
  newHandClick() {
    this._isStand = false;
    this._isGameOver = false;
    this.service.newHand();

    if (this.service.isPlayerBlackjack(this.dealerCards)) {
      this.openDealerDialog();
    } else if (this.service.isPlayerBlackjack(this.playerCards)) {
      this.openPlayerDialog();
    }
  }

  private openDealerDialog() {
    this._isGameOver = true;
    this.dealerDialog.openDialog();
  }

  private openPlayerDialog() {
    this._isGameOver = true;
    this.playerDialog.openDialog();
  }
}
