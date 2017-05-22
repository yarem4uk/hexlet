const accum = (str) => {
    const iter = (str, i, acc) => {
        if (i === str.length) {
            return acc.join('-');
        }
        acc.push(str[i].toUpperCase() + str[i].toLowerCase().repeat(i));
        i++;
        return iter(str, i, acc);
    };
    return iter(str, 0, []);
};


console.log(accum('sdgll'));
