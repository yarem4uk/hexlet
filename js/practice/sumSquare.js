const sum = (n) => {
  const iter = (i, sq, qs) => {
    if (i === 0) {
      return qs**2 - sq;
    }
    return iter(i - 1, i**2 + sq, i + qs);
  };
  return iter(n, 0, 0);
};


console.log(sum(10));

