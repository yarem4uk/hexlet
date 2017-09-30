import fs from 'fs';

const compareOld = (data1, data2) => {
  const lines1 = data1.split('\n').slice(0, -1);
  const lines2 = data2.split('\n').slice(0, -1);

  const [ bigest, smallest ] = lines1.length > lines2.length ? [ lines1, lines2 ] : [ lines2, lines1 ];
  const iter = (arr1, arr2, index, acc) => {
    if (index === arr1.length) {
      return acc;
    }
    if (arr1[index] === arr2[index]) {
      return iter(arr1, arr2, index + 1, acc);
    }
    if (index >= arr2.length) {
      acc = [...acc, [arr1[index], null]];
      return iter(arr1, arr2, index + 1, acc);
    }
    acc = [...acc, [arr1[index], arr2[index]]]; 

    return iter(arr1, arr2, index + 1, acc);
  };
  return iter(bigest, smallest, 0, [])
};

export const compare = (data1, data2) => {
  const lines1 = data1.split('\n').slice(0, -1);
  const lines2 = data2.split('\n').slice(0, -1);

  const [ bigest, smallest, order ] = lines1.length > lines2.length ? [ lines1, lines2, true ] : [ lines2, lines1, false ];

  return bigest.reduce((acc, item, index) => {
    if (item === smallest[index]) {
      return acc;
    }
    if (index >= smallest.length) {
       return [...acc, order ? [item, null] : [null, item]];
    }
     return [...acc, order ? [item, smallest[index]] : [smallest[index], item]];
  }, []);
}

export default (p1, p2, callback) => {
  const code = 'utf8';
  fs.readFile(p1, code, (err, data1) => {
    if (!err) {

      fs.readFile(p2, code, (err2, data2) => {
        if (!err2) {
          return callback(compare(data1, data2));

        } else return callback(err2);
      });

    } else return callback(err);
  });
};
