import data from './data';

const argType = {
  body: a => typeof a === 'string',
  children: a => a instanceof Array,
  attributes: a => a instanceof Object,
};

const argDo = {
  body: arg => arg,
  children: arg => arg.map(a => parse(a)),
  attributes: arg => arg,
}

const getName = elem => 
  Object.keys(argType).filter(k => argType[k](elem))[0];

const parse = list => list.slice(1)
  .reduce((acc, item) => ({ ...acc, [getName(item)]: argDo[getName(item)](item) }),
    { name: list[0], attributes: {}, body: '', children: [] });

const attrSring = attrs => 
  Object.keys(attrs).map(key => ` ${key}="${attrs[key]}"`).join('');

const render = ast =>
  Object.keys(ast)
    .reduce((acc, key) => [...acc, ast[key]], []);

// console.log(parse(data));
console.log(render(data));
