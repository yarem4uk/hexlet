const lex = (str) => {
  const iter = (i, state,  acc) => {
    if (i === str.length) {
      return acc;
    }
    switch (state) {
      case 'inside':
        if (str[i] === ' ') {
          state = 'outside';
        }
        acc += str[i];
        break;
      case 'outside':
        if (str[i] !== ' ') {
          acc += str[i].toUpperCase();
          state = 'inside';
        } else {
          acc += str[i];
          break;
        }
    }
    return iter(i + 1, state, acc);
  };
  return iter(0, 'outside', '');
};


console.log(lex('hexlet hello sasha'));
