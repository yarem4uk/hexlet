const three = (n) => {
    const iter = (acc) => {
        if (n === 1 || acc === n) {
            return true;
        } else if (n < 3 || acc > n) {
            return false;
        }
        return iter(acc*3);
    };
    return iter(3);
};


console.log(three(27));
