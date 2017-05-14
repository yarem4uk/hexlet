import { cons, car, cdr, toString } from 'hexlet-pairs';
import { definer } from './generic';
import { attach } from './type';

const defmethod = definer('SimpleCard');

export const make = (name, simple) => 
    attach('SimpleCard', cons(name, simple));

defmethod('getName', self => car(self));

defmethod('damage', self => cdr(self));
