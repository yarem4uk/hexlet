const uniq = (arr) => {
    arr.reduce((acc, item) => 
        item,
        []
    )
};

const arr = [2, 1, 2, 3];

console.log(uniq(arr));
