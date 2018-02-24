// console.log('before setTimeout');

// setTimeout(console.log, 1000, 'from timeout', 'slow');
// setTimeout(console.log, 0, 'from timeout', 'fast');

// console.log('after timeout');
// console.log('fjdkfjdkfjdksfjas');

// setTimeout(console.log, 10, 'from timeout', 'medium');
//
//


export const map = (coll, fn) => {
  if (coll.length === 0) {
    return coll;
  }
  const iter = ([head, ...rest], acc) => {
    const newAcc = [...acc, fn(head)];
    if (rest.length === 0) {
      return newAcc;
    }
    return iter(rest, newAcc);
  };
  return iter(coll, []);
};

export const filter = (coll, fn) => {
  const iter = ([head, ...rest], acc) => {
    if (rest.length === 0 && !fn(head)) {
      return acc;
    }
    if (fn(head)) {
      return iter(rest, [...acc, head]);
    }
    return iter(rest, acc);
  };
  return iter(coll, []);
};

export const asyncFilter = (coll, fn, callback) => {
  if (coll === 0) {
    callback(coll);
    return;
  }
  const iter = ([head, ...rest], acc) => {
    const newAcc = fn(head) ? [...acc, head] : acc;
    if (rest.length === 0 ) {
      callback(acc);
      return;
    }
    setTimeout(iter, 0, rest, newAcc);
  };
  return iter(coll, []);
};
