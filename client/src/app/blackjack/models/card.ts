export class Card {
    suit: number;
    value: number;
    deckValue: number;

    constructor(suit: number, value: number, deckValue: number) {
        this.suit = suit;
        this.value = value;
        this.deckValue = deckValue;
    }
}
