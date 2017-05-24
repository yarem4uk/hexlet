import data from './data';

const buildHtml = (data) => {
    const iter = (data, i, acc) => {
        const openTag = `<${data[0]}>`;
        const closeTag = `</${data[0]}>`;
        if (i === data.length) {
            return acc.join('');
        } else if (data[i] instanceof Array) {
            console.log(data[i] instanceof Array);
            return data[i].reduce((acc, item) => {
                return iter(item, 0, acc);
            }, acc);
        } else if (typeof data[i] === 'string') {
            console.log(data[i], 'string');
        }
        return iter(data, i + 1, acc.concat(openTag)).concat(closeTag);
    };
    return iter(data, 0, []);
};

console.log(buildHtml(data));
