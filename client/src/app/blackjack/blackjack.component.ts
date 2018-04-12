import { Input, Component, OnInit, Output } from '@angular/core';
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
export class BlackjackComponent implements OnInit {
  dealerShoe = new Array();
  isStand = false;

  constructor(private service: BlackjackService,
    private playerDialog: PlayerWinnerDialogComponent,
    private dealerDialog: DealerWinnerDialogComponent) { }

  ngOnInit() {
    this.service.newGame();
    this.dealerShoe = this.service.currentShoe;
  }

  @Input()
  get isPlayerBusted(): boolean {
    return this.service.isPlayerBusted(this.playerCards);
  }

  @Input()
  get isDealerBusted(): boolean {
    return this.service.isPlayerBusted(this.dealerCards);
  }

  @Input()
  get isPlayerBlackjack(): boolean {
    return this.service.isPlayerBlackjack(this.playerCards);
  }

  @Input()
  get isDealerBlackjack(): boolean {
    return this.service.isPlayerBlackjack(this.dealerCards);
  }

  @Input()
  get canPlayerHit(): boolean {
    return this.service.canPlayerHit(this.playerCards);
  }

  @Input()
  get getPlayerCardsTotal(): number {
    return this.service.getCardsTotal(this.playerCards);
  }

  @Input()
  get getDealerCardsTotal(): number {
    return this.service.getCardsTotal(this.dealerCards);
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
  }

  @Output()
  standClick() {
    this.isStand = true;
    // this.openDealerDialog();
    this.openPlayerDialog();
  }

  @Output()
  newHandClick() {
    this.isStand = false;
    this.service.newHand();
  }

  private openDealerDialog() {
    this.dealerDialog.openDialog();
  }

  private openPlayerDialog() {
    this.playerDialog.openDialog();
  }
}
