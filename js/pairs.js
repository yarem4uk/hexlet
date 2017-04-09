const cons = (x, y) => (m) => m(x, y);

const car = (pair) => (pair((x, y) => x));
const cdr = (pair) => (pair((x, y) => y));

const pair = cons(1, 3);
// const f = (x, y) => y;

console.log(cdr(pair));
// console.log(car(pair(f)));
