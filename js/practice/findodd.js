const numbers = [1, 2, 4, 2, 4, 1, 5, 3, 3];

const findodd = (arr) => {
    const map = arr.reduce((acc, item) => 
        acc.has(item) ? acc.set(item, acc.get(item) + 1) : acc.set(item, 1),
        new Map());
    let i;
    map.forEach((v, k) => {
        if (v % 2 !== 0) {
            i = k;
        }
    });
    return i;
}

console.log(findodd(numbers));
