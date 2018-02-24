

const map = (coll, fn) => {
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

const asyncMap = (coll, fn, callback) => {
  if (coll.length === 0) {
    callback(coll);
    return;
  }

  const iter = ([head, ...rest], acc) => {
    const newAcc = [...acc, fn(head)];
    if (rest.length === 0) {
      callback(newAcc);
      return;
    }
    setTimeout(iter, 0, rest, newAcc);
    // return iter(rest, newAcc);
  };
  return iter(coll, []);
};


// const coll = [];
const coll = [1, 2, 3, 4, 5];
// console.log(map(coll, item => item * 2));

asyncMap(coll, item => item * 2, result => {
  console.log(result);
});
