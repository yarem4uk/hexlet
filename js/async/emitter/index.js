import Tree from './tree';

const tree = new Tree('conf', '/');

tree.addChild('example');

console.log(tree.getThis());
// console.log(tree.getThis().getParent());

