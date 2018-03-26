const retry = (temp, f, cb) => {
  const iter = (i) => {
    const callback = (err, body) => {
      if (!err || i === temp) {
        cb(err, body);
        return;
      }
      iter(i + 1);
    };
    f(callback);
  };
  return iter(0);
};

retry(3, (a) => console.log(a));
