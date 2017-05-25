import data from './data';

const buildHtml = (data) => {
    const iter = (data, acc, i) => {
        if (i === data.length) {
            return acc.concat(`</${data[0]}>`).join('');
        } else if (i === 0) {
           if (data[1] instanceof Object && typeof data[1] !== 'string' && !(data[1] instanceof Array)) {
            const attr = Object.keys(data[1]).reduce((acc, key) =>
                [...acc, `${key}="${data[1][key]}"`], []);
            return iter(data, [[`<${data[0]}`, attr.join(' ')].join(' '), '>'], i + 2); 
           } else {
               return iter(data, acc.concat(`<${data[0]}>`), i + 1,);
           }
        } else if (typeof data[i] === 'string') {
           return iter(data, acc.concat(data[i]), i + 1); 
        } else if (data[i] instanceof Array) {
            console.log(data[i]);
            const newAcc =  data[i].reduce((acc, elem) => 
                iter(elem, acc, 0), []);
            // console.log(newAcc);
            return iter(data, [...acc, newAcc], i + 1);
        }
        return iter(data, acc, i + 1);
        // return iter(data, acc.concat(typeof data[i]), i + 1);
    };
    return iter(data, [], 0);
};

console.log(buildHtml(data));
