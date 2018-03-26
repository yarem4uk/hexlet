import { tree, obj } from './data';

// export const reduce = (f, tree, acc) => {
//   const [name, children] = tree;
//   const newAcc = f(acc, tree);
//   if (!children) {
//     return newAcc;
//   }
//   return children.reduce((iAcc, i) => reduce(f, i, iAcc), newAcc);
// };

// const acc = reduce((acc, i) => acc + 1, tree, 0);

const reduce = (f, obj, acc) => {
  const { type, children } = obj;
  const newAcc = f(acc, obj);
  if (type === 'file') {
    return newAcc;
  } 
  return children.reduce((iAcc, i) => reduce(f, i, iAcc), newAcc);
};
