export default (fns, cback) => {
  if (fns.length === 0) {
    cback();
    return;
  }
  const next = ([head, ...rest], previousResult) => {
    const cb = (err, ...args) => {
      if (err) {
        cback(err, args);
        return;
      }
      if (rest.length === 0) {
        cback(err, args);
      } else {
        next(rest, args);
      }
    };
    head(...previousResult, cb);
  };
  next(fns, []);
};
