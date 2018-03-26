const subString = (str) => {
  const iter = (i, acc) => {
    if (i < 0) {
      return acc;
    }
    acc += str[i];
    i--;
    return iter(i, acc);
  };
  return iter(str.length - 1, '');
};


console.log(subString('hexlet'));
