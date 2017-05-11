import { cons, car, cdr } from 'hexlet-pairs';
import { attach, contents } from './type';

export const make = (name, simple) => 
    attach('PercentCard', cons(name, simple));

export const getName = (self) => car(contents(self));

export const damage = (self, health) => 
    Math.round(health * cdr(contents(self)) / 100);
