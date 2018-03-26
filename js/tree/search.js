import path from 'path';

import { reduce } from './reduce';

import { obj } from './data';


// const dirs = reduce((acc, n) => {
//   if (n.type === 'directory' && n.children.length === 0) {
//     return [...acc, n.name];
//   }
//   return acc;
// }, obj, []);

// console.log(dirs);
// console.log(obj);

export const findFilesByName = (root, str) => {
  // const { name, children } = root;
  const iter = (n, acc, node) => {
    // console.log(root);
    if (n.type === 'directory' && n.children.length === 0) {
      return acc;
    }
    node = [...node, n.name];
    if (n.type === 'file') {
      if (n.name.includes(str)) {
        return acc = [...acc, path.join(...node)];
      } 
      return acc;
    }
    return n.children.reduce((sAcc, i) => iter(i, sAcc, node), acc);
  };
  return iter(root, [], []);
};

// console.log(findFilesByName(obj, 'co'));
// findFilesByName(obj, 'co');
