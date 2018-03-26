const arr = [100, 15, 10, 3, 4];

const findNearest = (coll, num) => {
  if (coll.length === 0) {
    return null;
  }
  const [head, ...rest] = coll;
  const elem = rest.reduce((acc, item, i) => {
    // console.log(acc);
    if (item - num < acc) {
      return item - num;
    }
    return acc;
  }, head - num);
  return coll.indexOf(elem);
};

 console.log(findNearest(arr, 0));


// const max = arr.reduce((acc, item) => {
//   if (item > acc) {
//     return item;
//   }
//   return acc;
// }, 0);

// console.log(max);
