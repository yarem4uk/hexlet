const without = (arr, ...out) => 
    arr.reduce((acc, item) => {
        return out.includes(item) ? acc : acc.concat(item);
    }, []);


console.log(without([2, 1, 2, 3], 1, 2, 5));
