import data from './data';

const argTypes = {
  body: a => typeof a === 'string',
  children: a => a instanceof Array,
  attributes: a => a instanceof Object,
};

const argDo = {
  body: arg => arg,
  children: arg => arg.map(a => parse(a)),
  attributes: arg => arg,
}


const getArgName = arg => 
  Object.keys(argTypes).filter(k => argTypes[k](arg))[0];

const parse = tagArr =>
  tagArr.slice(1)
    .reduce((acc, arg) => ({...acc, [getArgName(arg)]: argDo[getArgName(arg)](arg) }), 
      { name: tagArr[0], attributes: {}, body: '', children: []});

// console.log(parse(data));

const proba = list => 
  list.slice(1)
    .reduce((acc, arg) => [...acc, argDo.children(arg)], []);

console.log(proba(data));
