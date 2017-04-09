const isHappy = (num) => {
    str = String(num);
    const first = str.substr(0, 3);
    const second = str.substr(3);

    const iter = (i, acc, acc2) => {
        if ( i > 2 ) {
            return acc === acc2 ? true: false;
        }
        acc += Number(first[i]);
        acc2 += Number(second[i]);
        i++;
        return iter(i, acc, acc2);
    };
    return iter(0, 0, 0)
};

console.log(isHappy(300300));
