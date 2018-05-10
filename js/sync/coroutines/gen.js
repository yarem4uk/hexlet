import getPromise from './getpromise';

// export default function* () {
//   const a = yield getPromise(1);
//   console.log('a is', a);
//   const b = yield getPromise(2);
//   console.log('b is', b);
//   const c = yield getPromise(3);
//   console.log('c is', c);
//   // console.log([a, b, c]);
//   return [a, b, c];
// }

export default function* () {
  try {
  const a = yield getPromise(1, new Error('boom'));
  // const a = yield getPromise(2);
  } catch (err) {
  console.log('this is error');
  }
}
