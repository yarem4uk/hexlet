export default class Seq {
  constructor(start, fn, col) {
    this.start = start;
    this.fn = fn;
    this.col = col || Infinity;

    this.generator = function* (s, f, c) {
      if (c === 0) {
        return;
      }
      yield s;
      yield* this.generator(f(s), f, c - 1);
    };

    this[Symbol.iterator] = function* () {
      yield* this.generator(this.start, this.fn, this.col);
    };
  }

  jamp(x, j) {
    if (x === 0) {
      return j;
    }
    return this.jamp(x - 1, this.fn(j));
  }

  skip(n) {
    return new Seq(this.jamp(n, this.start), this.fn, this.coll);
  }

  take(m) {
    return new Seq(this.start, this.fn, m);
  }
}
