import fs from 'fs';
import retry from './retry';

// retry(3, callback =>
//   fs.readFile('file.txt', (err, body) => {
//     callback(err, body);
//   }), (err, result) => {
//     console.log(result);
// });

// fs.readFile('./temp', 'utf8', (err, body) => {
//   if (err) {
//     console.log(err);
//     return;
//   }
//   console.log(body);
// });
  //

retry(9, callback => fs.readFile('./temp8', 'utf8', (err, body) => {
  callback(err, body);
}), (err, result) => {
  console.log(result);
});
// const fn = (err, result) => {
//   console.log(result);
// };
// const arr = ['', 4];
// // fn('err', 3);
// // fn('err', ...arr);
// fn(...arr);
