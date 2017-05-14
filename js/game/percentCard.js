import { cons, car, cdr, toString } from 'hexlet-pairs';
import { definer } from './generic';
import { attach } from './type';

const defmethod = definer('PercentCard');

export const make = (name, percent) => 
    attach('PercentCard', cons(name, percent));

defmethod('getName', self => car(self));

defmethod('damage', (self, health) =>
    Math.round(health * (cdr(self) / 100)));
