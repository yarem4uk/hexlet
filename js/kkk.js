const addDigits = num => {
    if (String(num).length === 1) {
        return num;
    }
    const iter = (i, acc) => {
        if (i > String(num).length - 1) {
            return acc;
        }
        acc += Number(String(num)[i]);
        return iter(i + 1, acc);
    };
    return addDigits(iter(0, 0));
};

console.log(addDigits(1234346));
