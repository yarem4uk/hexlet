const generator = function* (start, fn, col) {
  if (col === 0) {
    return;
  }
  yield start;
  yield* generator(fn(start), fn, col - 1);
};

const it = generator(1, x => x - 1, 4);

console.log(it.next());
console.log(it.next());
console.log(it.next());
console.log(it.next());
console.log(it.next());
console.log(it.next());
console.log(it.next());
console.log(it.next());
console.log(it.next());
console.log(it.next());
console.log(it.next());
console.log(it.next());
console.log(it.next());
console.log(it.next());
console.log(it.next());
console.log(it.next());
console.log(it.next());
console.log(it.next());
