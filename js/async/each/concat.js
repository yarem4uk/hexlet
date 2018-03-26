import fs from 'fs';
import { dirs } from '../data';


const noop = (...args) => {};

const once = (fn) => {
  let called = false;
  return (...args) => {
    if (called) return;
    called = true;
    fn(...args);
  };
};


const concat = (coll, fn, callback) => {
  let acc = [];
  let completed = 0;
  const cb = (err, data) => {
    if (err) {
      callback(err);
    }
    completed += 1;
    acc = [...acc, ...data];
    if (completed === coll.length) {
      callback(null, acc);
    }
  };
  // coll.forEach(item => fn(item, cb));
  coll.map(item => fn(item, cb));
};

concat(dirs, fs.readdir, (err, files) => console.log(files));
