import { makePoint, getX, getY } from './my-points';

const point = makePoint(1, 4);

console.log(getY(point));

const symmetricalPoint = (point) => {
    makePoint(-getX(point), -getY(point));
};

console.log(getY(symmetricalPoint));
