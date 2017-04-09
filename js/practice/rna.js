const toRna = (dnk) => {
    const iter  = (i, acc) => {
        if (i > dnk.length - 1) {
            return acc;
        }
        switch (dnk[i]) {
            case 'G':
                acc += 'A';
                break;
            case 'C':
                acc += 'G';
                break;
        }
        i++;
        return iter(i, acc);
    };
    return iter(0, '');
};


console.log(toRna('GGGGGC'));
