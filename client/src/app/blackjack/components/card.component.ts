import { Component, Input } from '@angular/core';
import { Card } from '../models/card';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.css']
})
export class CardComponent {

    @Input()
    card: Card;

    @Input()
    get cardImage() {
        return this.getImageUrl(this.card.suit, this.card.value);
    }

    constructor() { }

    private getImageUrl(suit: number, value: number) {
        const letter = this.getSuit(suit);
        let number = '2';

        if (value === 0) {
            number = 'A';
        } else if (value <= 9) {
            value++;
            number = value.toString();
        } else if (value === 10) {
            number = 'J';
        } else if (value === 11) {
            number = 'Q';
        } else if (value === 12) {
            number = 'K';
        }

        return `assets/images/blackjack/${number}${letter}.png`;
    }

    private getSuit(suit: Number) {
        switch (suit) {
            case 0:
                return 'C';
            case 1:
                return 'D';
            case 2:
                return 'H';
            case 3:
                return 'S';
        }
    }
}
