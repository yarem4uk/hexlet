import { l, isEmpty, reverse, toString, isList, head, tail, cons, reduce } from 'hexlet-pairs-data';


// const flatten = (list) => reduce((item, acc) => {
//     if (isList(item)) {
//         acc = reduce((item, acc) => {
//             return cons(item, acc);
//         }, acc, reverse(flatten(item)));
//         return acc;
//     } else {
//         return cons(item, acc);
//     }
// }, l(), reverse(list));

// console.log(toString(flatten(l(1, 2, l(3, 4), l(5, l(6, 7))))));
