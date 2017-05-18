const a = new Set([2, 1]);
const b = new Set([2, 3]);

const differ = (a, b) => 
     new Set(Array.from(a).filter(item => !b.has(item)));

console.log(differ(a, b));
