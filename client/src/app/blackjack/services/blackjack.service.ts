import { Injectable } from '@angular/core';
import { Card } from '../models/card';

@Injectable()
export class BlackjackService {
  private decks: number;
  private currentShoe: Array<Card>;
  playerCards: Array<Card>;
  dealerCards: Array<Card>;

  newHand() {
    this.clearCards();
    this.distributeNewCards();
  }
  newGame() {
    this.decks = Math.ceil(Math.random() * 8) + 6;
    this.shuffleCards();
    this.clearCards();
    this.distributeNewCards();
  }
  hitPlayer() {
    this.playerCards.push(this.currentShoe.pop());
  }
  hitDealer() {
    this.dealerCards.push(this.currentShoe.pop());
  }

  isPlayerBlackjack(cards) {
    return cards.length === 2 &&
      this.getCardsTotal(cards) === 21;
  }

  isPlayerBusted(cards) {
    return this.isBusted(cards);
  }

  canPlayerHit(cards) {
    return cards.length < 5 && !this.isPlayerBusted(cards);
  }

  playDealer() {
    const dealerTotal = this.getCardsTotal(this.dealerCards);
    const playerTotal = this.getCardsTotal(this.playerCards);

    if (dealerTotal < playerTotal) {
      do {
        this.hitDealer();
      } while (!this.isPlayerBusted(this.dealerCards) &&
        !this.isPlayerBlackjack(this.dealerCards) &&
        this.getCardsTotal(this.dealerCards) < this.getCardsTotal(this.playerCards));
    }
  }

  isPlayerWinner() {
    if (this.getCardsTotal(this.playerCards) > 21) {
      return false;
    } else if (this.getCardsTotal(this.playerCards) === 21) {
      return true;
    } else if (this.isPlayerBlackjack(this.playerCards)) {
      return true;
    } else if (this.getCardsTotal(this.playerCards) <= 21 && this.playerCards.length === 5) {
      return true;
    }

    return false;
  }

  isDealerWinner() {
    if (this.getCardsTotal(this.dealerCards) > 21) {
      return false;
    } else if (this.getCardsTotal(this.dealerCards) === 21) {
      return true;
    } else if (this.isPlayerBlackjack(this.dealerCards)) {
      return true;
    } else if (this.getCardsTotal(this.dealerCards) <= 21 && this.dealerCards.length === 5) {
      return true;
    } else if (this.getCardsTotal(this.dealerCards) >= this.getCardsTotal(this.playerCards)) {
      return true;
    }

    return false;
  }

  private isBusted(cards) {
     return this.getCardsTotal(cards) > 21;
  }

  private clearCards() {
    this.playerCards = [];
    this.dealerCards = [];
  }

  getCardsTotal(cards) {
    let total = 0, bestTotal = 0;
    const cardValues = cards.map(p => p.value);
    const faceCards = cardValues.filter(p => p >= 9);
    const nonFaceCards = cardValues.filter(p => p > 0 && p < 9);
    const aces = cardValues.filter(p => p === 0);

    nonFaceCards.forEach(i => {
      total += i + 1;
    });

    faceCards.forEach(i => total += 10);

    if (aces.length === 1) {
      bestTotal = total + 11;

      if (bestTotal > 21) {
        bestTotal -= 10;
      }

      return bestTotal;
    } else if (aces.length > 1) {
      bestTotal = total;
      bestTotal += (aces.length - 1) * 1;

      if ((bestTotal += 11) > 21) {
        bestTotal += 1;
      } else {
        bestTotal += 11;
      }

      return bestTotal;
    }

    return total;
  }

  private distributeNewCards() {
    for (let x = 0; x < 4; x++) {
      if (x % 2 === 0) {
        this.playerCards.push(this.currentShoe.pop());
      } else {
        this.dealerCards.push(this.currentShoe.pop());
      }
    }
  }

  private shuffleCards() {
    this.currentShoe = [];
    this.playerCards = [];
    this.dealerCards = [];
    const numberOfCards = this.decks * 52;

    do {
      const currentCard = Math.floor(Math.random() * numberOfCards);
      const cardSuit = Math.floor(currentCard / (13 * this.decks));
      const cardValue = Math.floor(Math.floor(currentCard % 52) % 13);
      const isCardFound = this.currentShoe.find(c => c.deckValue === currentCard);

      if (!isCardFound) {
        this.currentShoe.push(new Card(cardSuit, cardValue, currentCard));
      }

    } while (this.currentShoe.length < numberOfCards);
  }
}
