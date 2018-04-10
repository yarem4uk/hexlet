// import 'babel-polyfill';

export default class Seq {
  constructor(start, fn, col) {
    this.start = start;
    this.fn = fn;
    this.col = col;

    this.collection = function* (s, f, c) {
      if (c === 0) {
        return;
      }
      yield s;
      yield* this.collection(f(s), f, c - 1);
    };

    this[Symbol.iterator] = function* () {
      yield* this.collection;
    };

  }

  getThis() {
    console.log(this);
  }

  next() {
    const it = this.collection(this.start, this.fn, this.col);
    console.log(it.next());
    // for (const v of it) {
      // console.log(v, 'from method next');
    // }
  }
  take(n) {
    
  }
}
