// const sum = x => y => x + y;
// console.log(sum(1));

const True = first => second => first;
const False = first => second => second;
const If = f => first => second => f(first)(second);

console.log(If(True)('one')('two'));
