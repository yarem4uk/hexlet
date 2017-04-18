import { cons, car, cdr } from 'hexlet-pairs';
import { l, isEmpty, head, tail, cons as consList } from 'hexlet-pairs-data';

import { make, node, append, value, is, toString, map } from 'hexlet-html-tags';
import { filter, removeHeaders } from './my-sequences';
// import { reverse as reverseStr } from './strings';
// import { b2p, map } from './my-map';

// const dom1 = make();
// const dom2 = append(dom1, node('h2', 'header1'));
// const dom3 = append(dom2, node('h2', 'header2'));
// const dom4 = append(dom3, node('p', 'content'));

const dom1 = make();
const dom2 = append(dom1, node('h1', 'scheme'));
const dom3 = append(dom2, node('p', 'is a lisp'));
const dom4 = append(dom3, node('blockquote', 'live is live'));
const dom5 = append(dom4, node('blockquote', 'i am sexy, and i know it'));

// const processedHtml = b2p(dom3);
// console.log(toString(processedHtml));
// console.log(toString(dom4));

// const processedHtml = map(element => {
//     if (is('h1', element)) {
//         return node('p', value(element));
//     }
//     return element;
// }, dom3);

// console.log(toString(processedHtml));

// const processedHtml = filter(element => {
//     if (is('p', element)) {
//         return true;
//     }
//     return false;
// }, dom4);

// console.log(toString(removeHeaders(dom4)));
// console.log(toString(processedHtml));

const quotes = (list) => map(item => {
    return value(item);
}, filter(element => {
    if(is('blockquote', element)) {
        return true;
    }
    return false;
}, list));

// console.log(toString(quotes(dom5)));
const ppp = map(item => {
    return value(item);
}, dom5);
console.log(toString(ppp));
