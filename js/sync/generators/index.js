import Seq from './seq';

const seq = new Seq(1, x => x + 2, 9);

// for (const v of seq) {
for (const v of seq.skip(4).take(2)) {
  console.log(v);
}
