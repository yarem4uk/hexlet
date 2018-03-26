const tr = [['key', 'value'], ['key2', 'value2']];

const tree = [
  ['key', [['key2', 'anotherValue']]],
  ['key2', 'value2']
];

const tree4 = [
  ['key2', 'value2'],
  ['anotherKey', [
    ['key2', false],
    ['innerKey', []],
  ]],
  ['key', null],
  ['anotherKey2', [
    ['wow', [['one', 'two'], ['three', 'four']]],
    ['key2', true],
  ]],
];

const convert = (arr) => {
  return arr.reduce((acc, i) => {
    const [key, value] = i;
    // console.log(key);
    if (value instanceof Array) {
      return { ...acc, [key]: convert(value) } 
    }
    // console.log(acc);
    return { ...acc, [key]: value };
  }, {});
};


// console.log(convert(tr));

// const obj = tr.reduce((acc, i) => {
//   const [key, value] = i;
//   acc =  { ...acc, key: value };
//   return acc;
// }, {});

console.log(convert(tree4));
