import fs from 'fs';

const compare = (data1, data2) => {

  const lines1 = data1.toString().split('\n').slice(0, -1);
  const lines2 = data2.toString().split('\n').slice(0, -1);

  const [bigest, smallest, order] = lines1.length > lines2.length ? [lines1, lines2, true] : [lines2, lines1, false];

  return bigest.reduce((acc, item, index) => {
    if (item === smallest[index]) {
      return acc;
    }
    if (index >= smallest.length) {
      return [...acc, order ? [item, null] : [null, item]];
    }
    return [...acc, order ? [item, smallest[index]] : [smallest[index], item]];
  }, []);
};

const diff = (first, second, callback) => {
  fs.readFile(first, (err, data) => {
    if (err) {
      callback(err);
    }
    fs.readFile(second, (err2, data2) => {
      if (err2) {
        callback(err2);
      }
      // return 'hellow';
      return callback(null, compare(data, data2));
    });
  });
}; 

diff('file.md', 'file1.md', (err, data) => {
  console.log(data);
});

// console.log(diff('file.md', 'file1.md'));
