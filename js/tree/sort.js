import { simple } from './data';

// const arr = [1, 3, 8, 4, 9, 4, 7, 9];

// console.log(arr.sort((a, b) => {
//   if (a === b) {
//     return 0;
//   }
//   return a > b ? 1 : -1;
// }));
const tr = ['a', ['r', 't'], ['b', ['c', ['d']]]];
// const tr = ['a', 'b'];
// const tr = ['a', ['b']];

const flatten = (arr) => {
  return arr.reduce((acc, i) => {
    if (Array.isArray(i)) {
      return [...acc, ...flatten(i)];
    }
    acc = [...acc, i];
    return acc;
  }, []);
};


console.log(flatten(tr));
//
