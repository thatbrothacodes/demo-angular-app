import { Injectable } from '@angular/core';
import { Card } from '../models/card';

@Injectable()
export class BlackjackService {
  private decks: number;
  currentShoe: Array<Card>;
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

  private isBusted(cards) {
     return this.getCardsTotal(cards) > 21;
  }

  private clearCards() {
    this.playerCards = [];
    this.dealerCards = [];
  }

  getCardsTotal(cards) {
    const cardValues = cards.map(p => p.value);
    // const cardValues = [11, 0];

    return cardValues.reduce((a, c, i) => {
      if (c === 0) {
        const bestSum = a + 11;

        if (bestSum <= 21) {
          return a + 11;
        } else {
          return a + 1;
        }
      } else if (c > 8) {
        return a + 10;
      }
      return a + c + 1;
    }, null);
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
