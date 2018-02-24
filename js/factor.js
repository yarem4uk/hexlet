// const factor = n => {
//   if (n === 1) {
//     return 1;
//   }
//   return n * factor(n-1);
// };

const factor = (n) => {
  const iter = (i, acc) => {
    if (i === 0) {
      return acc;
    }
    return iter(i - 1, acc * i);
  };
  return iter(n, 1);
};

console.log(factor(5));
