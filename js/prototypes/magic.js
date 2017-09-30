const f = (...arg) => {
  const sum = arg.reduce((acc, num) => acc + num, 0);
  const iter = (...newarg) => f(sum, ...newarg);
  iter.valueOf = () => sum;
  return iter;
};


console.log(f(1, 2, 3) == 6);
// console.log(f(1, 2, 3)(1));
// console.log(1, 2, 3);
// console.log(f()()());
// console.log(f(1)(1, 3)() + 5);
// console.log(f(1, 2) == 3);
