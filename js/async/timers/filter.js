const asyncFilter = (coll, fn, callback) => {
  if (coll.length === 0) {
    callback(coll);
    return;
  }

  const iter = ([head, ...rest], acc) => {
    const newAcc = fn(head) ? [...acc, head] : acc;
    if (rest.length === 0) {
      callback(newAcc);
      return;
    }
    setTimeout(iter, 0, rest, newAcc);
  };
  return iter(coll, []);
};

const coll = [1, 2, 3, 4, 5];
// console.log(filter(coll, item => item % 2 ? false : true));

asyncFilter(coll, item => item % 2 ? true : false, result => {
  console.log(result);
});
