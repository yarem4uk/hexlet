const invertCase = (str) => {
    const iter  = (i, acc) => {
        console.log(str.charCodeAt(i));
        if (i > str.length - 1) {
            return acc;
        }
        if (str[i].toUpperCase() === str[i]) {
            acc += str[i].toLowerCase();
        } else {
            acc += str[i].toUpperCase();
        }
        i++;
        return iter(i, acc);
    };
    return iter(0, '');
};


// const str = 'l';
// console.log(str.charCodeAt(0));
console.log(invertCase('heLL wOrlD'));
