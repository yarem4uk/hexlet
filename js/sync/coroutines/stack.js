// function* genSober() {
//   while (true) {
//     try {
//       yield 42;
//     } catch (e) {
//       console.log("I don't drink at work!");
//     }
//   }
// }

// const g = genSober();
// console.log(g.next());
// console.log(g.next());
// console.log(g.next());
// // { value: 42, done: false }
// g.throw('Have some wine...');
// console.log(g.next());

function* genDrunk() {
  while (true) {
    yield 42;
  }
}

const g = genDrunk();
console.log(g.next());
try {
  g.throw('Have some wine...');
}
catch (e) {
  console.log('hello');
}
console.log(g.next());
