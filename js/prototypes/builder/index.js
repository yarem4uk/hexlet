import { data } from '../data';
import _ from 'lodash';

const propertyActions = [
  {
    name: 'body',
    check: arg => typeof arg === 'string',
  },
  {
    name: 'children',
    check: arg => arg instanceof Array,
  },
  {
    name: 'attributes',
    check: arg => arg instanceof Object,
  },
];


const getPropertyAction = arg => _.find(propertyActions, ({ check }) => check(arg));

const [head, ...rest] = data;

const root = {
  name: head,
  attributes: [],
  body: '',
  children: [],
};

const tag = rest.reduce((acc, arg) => {
  const { name } = getPropertyAction(arg);
  return { ...acc, [name]: arg };
}, root);

console.log(tag);
