import { cons, car, cdr } from './my-pairs';

export const makePoint = (x, y) => cons(x, y);

export const getX = (point) => car(point);
export const getY = (point) => cdr(point);
