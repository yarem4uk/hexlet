const arr = ['and', 'for', 'three', 'three', 'for', 'world', 'hello', 'cat', 'dog', 'dog', 'cat', 'cat'];

// const count = arr.reduce((acc, item) => 
//     acc.has(item),
//     // acc.has(item) ? acc[item]++ : acc.set(item, 1),
// new Map());

// console.log(count.entries());
const map = new Map();
map.set('key', 'value');
console.log(map.has('key'));
