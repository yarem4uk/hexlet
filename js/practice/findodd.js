const numbers = [1, 2, 4, 2, 4, 1, 5, 3, 3];

const findodd = (arr) => {
    const map = arr.reduce((acc, item) => 
        acc.has(item) ? acc.set(item, acc.get(item) + 1) : acc.set(item, 1),
        new Map());
    console.log(map);
    const num = map.forEach((v, k) => {
        let n;
        if (v % 2 !== 0) {
            n = v;
        } 
       return n; 
    });
    return num;
};

console.log(findodd(numbers));

// const map = new Map();
// map.set('hellow', 1);
// map.set('bay', 2);
// map.set('alena', 5);
// map.set('sasha', 4);
// map.forEach((k, v) => {
//     if (k % 2 !== 0) {
//         return console.log(v);
//     }
// });
