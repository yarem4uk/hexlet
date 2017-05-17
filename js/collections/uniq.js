const arr = [2, 1, 2, 3];

export const uniq = (arr) => {
    const newArr = arr.reduce((acc, item) => 
        !acc.includes(item) ? acc.concat(item) : acc,
        []);
    return newArr;
};

console.log(uniq(arr));
