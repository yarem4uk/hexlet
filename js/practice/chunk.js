const chunk = (arr, n) => {
    const iter = (acc, index) => {
        if (index >= arr.length) {
            return acc;
        }
        const item = arr.slice(index, n + index);
        acc.push(item);
        return iter(acc, index + n);
    };
    return iter([], 0);
};

console.log(chunk([1, 2, 3, 4, 5], 3));

// const arr = [1, 2, 3, 4, 5];
// const acc = [];
// const newArr = acc.concat(arr.slice(2, 2));
// console.log(newArr);
// const nnn = arr.slice(2, 2);
// const nnn = [1, 2, 3, 4, 5, 6].slice(2, 3);
// console.log(nnn);
