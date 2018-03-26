const perfect = (n) => {
  if (n % 2 || n === 0) {
   return false; 
  }
  const iter = (i, acc) => {
    if (i === 0) {
      return acc === n ? true : false;
    }
    acc = n % i ? acc : acc + i;
    // console.log(i, acc);
    return iter(i - 1, acc); 
  };
  return iter(n/2, 0);
};

console.log(perfect(0));

// console.log(4 % 2);
