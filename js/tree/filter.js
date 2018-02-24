import { tree, obj } from './data';

// const filter = (f, tree) => {
//   if (!f(tree)) {
//     return null;
//   }
//   const [name, children] = tree;
//   console.log(name);
//   if (!children) {
//     return tree;
//   }
//   return [name, children.map(c => filter(f,c)).filter(v => v)];
// };

// filter( ( [ v ] ) => v === 'A', tree);

const filter = (f, obj) => {
  const { type, children } = obj;
  if (!f(obj)) {
    // console.log('directory');
    return null;
  }
  if (type !== 'directory') {
    return obj;
  }
  return { ...obj, children: children.map(o => filter(f, o)).filter(v => v) };
};

filter(n => n.type === 'directory', obj);
