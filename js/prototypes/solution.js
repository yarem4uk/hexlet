import data from './data';

const buildHtml = data => {
    const iter = (data, acc, i) => {
        if (i === data.length) {
            return [...acc, `</${data[0]}>`].join('');
        } else if (i === 0) {
            if (data[1] instanceof Object && !(data[1] instanceof Array)) {
                const attr = Object.keys(data[1]).reduce((acc, key) =>
                    [...acc, `${key}="${data[1][key]}"`], []);
                return iter(data, [[`<${data[0]}`, ...attr].join(' '), `>`], i + 2);    
            } else {
                return iter(data, [...acc, `<${data[0]}>`], i + 1);
            }
        } else if (typeof data[i] === 'string') {
            return iter(data, [...acc, data[i]], i + 1);
        } else if (data[i] instanceof Array) {
            const children = data[i].map( item => 
                iter(item, [], 0));
                return iter(data, [...acc, ...children], i + 1);
        }
    }
    return iter(data, [], 0);
};

console.log(buildHtml(data));
