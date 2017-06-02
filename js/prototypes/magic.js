// const f = (...arg) => {
//   const sum = arg.reduce((acc, num) => acc + num, 0);
//   f.valueOf = () => sum;
//   return (...nums) => f(f.valueOf(), ...nums);
// }
// console.log(f + 3);


// const f = (...arg) => {
//   const sum = arg.reduce((acc, num) => acc + num, 0);
//   f.valueOf = () => sum;
//   return () => f.valueOf();
// };

const f = (...arg) => {
  const sum = arg.reduce((acc, num) => acc + num, 0);
  f.valueOf = () => sum;
  return (...arg) => f;
};
console.log(f(1, 2, 3)() == 6);
// console.log(f(1, 2, 3)(1));
