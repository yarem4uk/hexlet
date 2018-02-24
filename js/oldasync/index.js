import { compare } from './diff';
// import  diff  from './diff';
// import { fun } from './proba';

const data1 = 

`hello, world
text

ehu

aha

`;

const data2 = 

`hello, world
ext
haha

text

`;

console.log(compare(data1, data2));

// diff('./file.md', './file3.md', (data) => {
//   console.log(data);
// });

// console.log('outcome callback');
