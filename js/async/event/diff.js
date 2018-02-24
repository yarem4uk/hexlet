import fs from 'fs';

// fs.readFile('help', (err, content) => {
// // fs.readFile('help', 'utf8', (err, content) => {
//     if (err) {
//       console.log(err);
//     }
//   console.log('from callback');
//   console.log(content.toString());
// });

// const arr = [1, 2, 3, 4];
// const array = arr.map(item => item * 3);
// console.log(array);
// console.log('outside callback');

const data = fs.readFileSync('help');

console.log(data.toString());
