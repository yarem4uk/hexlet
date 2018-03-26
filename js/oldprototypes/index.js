import SingleTag from './singleTag';
import PairedTag from './pairedTag';
// import Node from './node';

const data = new PairedTag('html', { class: 'header', href: 'http//superoffice.ua' }, 'hellow', [new PairedTag('h1', { class: 'header' }, '', [])]);

// const data = new SingleTag('html', { class: 'header' });
// const n = new Node();
// console.log(n.getName());
console.log(data.toString());
