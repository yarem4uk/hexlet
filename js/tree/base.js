import { tree, obj } from './data';
//
// base algorytm
//
//const dfs = (tree) => {
//  const [name, children] = tree;
//  console.log(name);
//  if (!children) {
//    return;
//  }
//  return children.map(dfs);
//};
//
//
// const dfs = tree => {
//   const [name, children] = tree;
//   const newName = name.toLowerCase();
//   if (!children) {
//     return [newName];
//   }
//   return [newName, children.map(dfs)];
// }

// console.log(JSON.stringify(dfs(tree)));

const dfs = (obj) => {
  const { name, type, children } = obj;
  if (type === 'file') {
    const newObj = { ...obj, name: name.toLowerCase() };
    return newObj;
  }
  console.log('hellow');
  return { ...obj, children: children.map(dfs) };
};
