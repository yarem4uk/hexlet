// const map = (f, tree) => {
//   const [, children] = tree;
//   const [newName] = f(tree);
//     if (!children) {
//       return [newName];
//     }
//   return [newName, children.map(item => map(f, item))];
// };

// console.log(map(([ v ]) => [ v.toLowerCase() ], tree));
//

const map = (f, obj) => {
  const { type, children } = obj;
  if (type === 'file') {
    const newObj = f(obj);
    return newObj;
  }
  return { ...newObj, children: children.map(item => map(f, item)) };
};

map(v => ({ ...v, name: v.name.toLowerCase() }), obj);
