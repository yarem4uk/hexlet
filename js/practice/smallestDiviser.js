const smallestDivisor = (num) => {
  if (num === 1) {
    return num;
  }
  const iter = (del, acc) => {
    if (del === num) {
      return acc;
    }
    if (num % del) {
      return iter(del + 1, acc);
    }
    return del;
  };
  return iter(2, num);
};

// console.log(smallestDivisor(15));
//

const reverse = (str) => {
  const iter = (char, acc) => {
    if (char < 0) {
      return acc;
    }
    return iter(char - 1, acc + str[char]);
  };
  return iter(str.length - 1, '');
};

console.log(reverse('cat hello 1'));
