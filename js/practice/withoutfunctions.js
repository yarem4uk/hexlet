const cons = (a, b) => 2**a * 3**b;

const car = (pair) => {
    const iter = (numer, acc, i) => {
        console.log(numer, acc, i);
        if (acc === 1 || numer === acc) {
            return i;
        } else if (numer > acc) {
            i++;
            return iter(3, acc / 2, i);
        }
        return iter(numer * 3, acc, i);
    };
    return iter(3, pair, 0);
};

const cdr = (pair) => {
    const iter = (numer, acc, i) => {
        console.log(numer, acc, i);
        if (acc === 1 || numer === acc) {
            return i;
        } else if (numer > acc) {
            i++;
            return iter(2, acc / 3, i);
        }
        return iter(numer * 2, acc, i);
    };
    return iter(2, pair, 0);
};

console.log(cdr(cons(0, 9)));
// console.log(cons(4, 0));
