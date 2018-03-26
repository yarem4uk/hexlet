import { reduce } from 'hexlet-immutable-fs-trees';
import { obj, tree } from './data';

// const calculate = tree => 
//   reduce((acc, node) => (node.type === 'file' ? acc + node.meta.size : acc), tree, 0); 


// const du = (tree) => {
//  return  tree.children.filter(n => n.type === 'directory').map(n => [n.name, calculate(n)]);
// };

// console.log(du(obj));

const du = (tree) => {
  const iter = (i, acc) => {
    if (i.type === 'directory' && i.children.length === 0) {
      return acc;
    }
    if (i.type === 'file') {
      return [...acc, [i.name, i.meta.size]];
    }
    return i.children.reduce((fAcc, n) => iter(n, fAcc), [...acc, [i.name, 1]]);
  };
  return iter(tree, []);
};

// const du = (tree) => {
//   return tree.children.reduce((acc, n) => {
//     console.log(n);
//     if (n.type === 'file') {
//       return [...acc, [n.name, n.meta.size]];
//     }
//   }, []);
// };

console.log(du(tree));
