import data from './data';

const singleTagsList = new Set(['hr', 'img', 'br']);

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

const attrString = attrs => 
  Object.keys(attrs).map(key => ` ${key}="${attrs[key]}"`).join('');

// const render = ast => 
//   `<${ast.name}${attrString(ast.attributes)}>${ast.body}${ast.children.map(render).join('')}</${ast.name}>`;

const render = ast => {
  if (singleTagsList.has(ast.name)) {
    return  `<${ast.name}${attrString(ast.attributes)}>`;
  } else {  
    return `<${ast.name}${attrString(ast.attributes)}>${ast.body}${ast.children.map(render).join('')}</${ast.name}>`; 
}

// `<${ast.name}${attrString(ast.attributes)}>${ast.body}${ast.children.map(render).join('')}</${ast.name}>`;

// console.log(parse(data));
console.log(render(parse(data)));
