import { hasChildren, make, append, node, toString } from 'hexlet-html-tags';
import { l, isList, tail, isEmpty } from 'hexlet-pairs-data';
import { listOf, sel, select, countElements } from './tree';
import { dom, count } from './dom';

// console.log(count(dom));
// console.log(countElements(dom));
console.log(toString(select(l('ul', 'li'), dom)));
// console.log(toString(select(l('div', 'p'), dom)));
// console.log(toString(select(l('div', 'div', 'p'), dom)));
// console.log(toString(select(l('p'), dom)));
// console.log(toString(select(l('div', 'p'), dom)));
