const cons = (a, b) => 2**a * 3**b;

const isTwo = (num) => {
    const iter = (acc) => {
        // console.log(acc);
        if (acc === num) {
            return true;
        } else if ( acc > num ) {
            return false;
        }
        return iter(acc * 2);
    };
    return iter(2);
};
// console.log(isTwo(36));

const cdr = (k) => {
    const iter = (i, acc) => (j) => {
        console.log(i, acc, k);
        if (j === acc) {
            return true;
        } else if ( acc > j) {
            return false;
        }
        return iter(j * 2);
    }
    if (iter(j)) {
        return i;
    } else {
        i++;
        // console.log(i);
        return iter(i, acc / 3);
    }
    return iter(0, k)(2);
};

console.log(cdr(cons(9, 11)));
