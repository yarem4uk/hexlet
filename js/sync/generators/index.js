import Seq from './seq';

const obj = new Seq(1, x => x + 1);

// console.log(obj.getThis(), 'from this.obj');
// console.log(obj.next(), 'from this.next');
obj.next();
// for (const v of obj.next()) {
//   console.log(v, 'from for');
// }
