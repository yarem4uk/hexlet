const fromPairs = (arr) => {
    return arr.reduce((acc, [key, value]) => {
        acc[key] = value;
        return acc;
    }, {});
};

console.log(fromPairs([['fred', 30], ['barney', 40]]));
