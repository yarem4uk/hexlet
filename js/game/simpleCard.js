import { cons, car, cdr } from 'hexlet-pairs';
import { attach, contents } from './type';

export const make = (name, simple) => 
    attach('SimpleCard', cons(name, simple));

export const getName = (self) => car(contents(self));

export const damage = (self) => cdr(contents(self));
