const substr = (str, s = 0, l = str.length) => {
  const iter = (i, acc, k) => {
    if (k === l || i === str.length) {
      return acc;
    }
    if (i < 0) {
      i = 0;
      console.log(s);
    }
    if (l < 0) {
      l = 1;
    }
    acc = acc + str[i];
    return iter(i + 1, acc, k + 1);
  };
  return iter(0 + s, '', 0);
};


const lit = 'sasha';
console.log(substr(lit, -1, -1));



