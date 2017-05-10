import { l, isEmpty, cons, reduce, has, reverse, toString } from 'hexlet-pairs-data';

const union = (list1, list2) => reverse(reduce((item, acc) => {
    return has(acc, item) ? acc : cons(item, acc);
}, reduce((item, acc) => {
    return has(acc, item) ? acc : cons(item, acc);
}, l(), list1), list2));

// const map = (list) => reduce((item, acc) => {
    // return has(acc, item) ? acc : cons(item, acc);
// }, l(), list);

// console.log(toString(reverse(map(l(1,1,1,2, 3, 4, 4, 5)))));

console.log(toString(union(l(2, 3, 2, 1, 7), l(1, 5, 3, 5, 8, 9))));
