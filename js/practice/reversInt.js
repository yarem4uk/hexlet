const reversInt = (n) => {
    s = String(Math.abs(n));
    const iter = (i, acc) => {
        if (i < 0) {
            if (n < 0) {
            return -Number(acc);
            } 
            return Number(acc);
        }
        acc += s[i];
        i--; 
        return iter(i, acc);
    };
    return iter(s.length - 1, '');
};

console.log(reversInt(873));
