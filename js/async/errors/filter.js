import fs from 'fs';
import { files } from '../data';

const filter = (coll, fn, callback) => {
  let acc = [];
  if (coll.length === 0) {
    callback(null, acc);
  }
  // const cb = data => callback(null, data);
  const cb = (item, ix, i, err) => {
    if (err) {
      // console.log(ix);
      acc = [...acc, item];
      if (ix === coll.length - 1) {
        callback(null, acc);
      }
    }
  };
  coll.forEach((item, ix) => fn(item, cb.bind(null, item, ix)));
};

filter(files, (filePath, cb) => {
  fs.access(filePath, err => cb(null, !err));
}, (err, data) => console.log(data));

