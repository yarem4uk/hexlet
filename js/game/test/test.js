import assert from 'assert';
import { cons, car, toString } from 'hexlet-pairs';
import { l, length, get } from 'hexlet-pairs-data';
import * as simpleCard from '../simpleCard.js';
import * as percentCard from '../percentCard.js';
import make from '../game';

let cardIndex = 2;

const cards = l(
    simpleCard.make('Костяная кочерга гробницы', 7),
    percentCard.make('Памятный металл палача', 70)
);

const game = make(cards, (c) => {
    cardIndex = cardIndex === 0 ? 1 : 0;    
    return get(cardIndex, c);
});

const log = game('John', 'Ada');

// assert.equal(length(log), 5);
console.log(length(log));
