export default (col, fn, callback) => {
  const repeat = i => {
    const cb = (err, body) => {
      if (!err || i === 0) {
        callback(err, body);
        return;
      }
      repeat(i - 1);
    };
    fn(cb);
  };
  const n = col === 0 ? 4 : col - 1;
  repeat(n);
};
