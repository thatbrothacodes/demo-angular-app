import { Component, Input } from '@angular/core';
import { Card } from '../models/card';

@Component({
  selector: 'app-hand',
  templateUrl: './hand.component.html',
  styleUrls: ['./hand.component.css']
})
export class HandComponent {

    @Input()
    cards: Array<Card>;

    constructor() { }
}
