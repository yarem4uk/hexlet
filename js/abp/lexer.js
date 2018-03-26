const lexer = (str) => {
  const iter = (i, state, index, acc) => {
    if (i === str.length) {
      return acc;
    }
    switch (state) {
      case 'inside':
        if (str[i] === ' ') {
          state = 'after';
          index += 1;
        } else if (str[i] === '\n') {
          state = 'outside';
          index += 1;
        } else {
          acc[index] += str[i];
        }
        break;
      case 'after':
        if (str[i] === '\n') {
          state = 'outside';
        }
        break;
      case 'outside':
        if (str[i] !== ' ' && str[i] !== '\n') {
          acc = [...acc, ''];
          acc[index] = str[i];
          state = 'inside';
        }
        break;
    }
    // console.log(state, str[i], index);
    return iter(i + 1, state, index, acc);
  };
  return iter(0, 'outside', 0, []);
};

// const str = 'hello alena \n privet sasha';
// const str = 'hello alena \nsasha katya \n and masha \n\n';
const str = '\n\n  what who   \nhellomy\n hello who are you\n';
console.log(lexer(str));
