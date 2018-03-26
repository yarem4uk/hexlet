import * as _ from 'lodash';

const arr = [
  ['*', '*', '*', '*'],
  ['*', ' ', ' ', '*'],
  ['*', ' ', ' ', '*'],
  ['*', '*', '*', '*'],
];

const amm = [[1], [2], [3]];

const enlarge = (col) => {
  const tr =  col.map(item => _.flatten(item.map(elem => [elem, elem])));
  return _.flatten(tr.map(item => [item, item]));
};

console.log(enlarge(arr));
