import gen from './gen';

const co = (iter) => {
  const coroutine = iter();
  const fn = (data) => {
    const next = coroutine.next(data);
    if (!next.done) {
      return next.value.then(fn, err => fn(coroutine.throw(err)));
    }
  };
  fn();
};

co(gen);

return value.then(
      res => next(iterator.next(res)),
      err => next(iterator.throw(err)),
    );
