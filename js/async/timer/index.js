import { map, filter, asyncFilter } from './map';


const arr = [1, 2, 3, 4, 5, 6];
const tr = [10, 53, true, false, '', NaN, 22];

// console.log(filter(arr, (item) => {
//   return item  < 4;
// }));

// console.log(asyncFilter(tr, v => v));
asyncFilter(tr, v => v, console.log);
