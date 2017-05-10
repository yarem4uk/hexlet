const l = (...items) => {
    if (items.length === 0) {
        return '';
    } else if (items.length === 1) {
        return items.pop();
    }
    const item = '\n' + items.pop();
    return l(...items) + item;
};

const head = (list) => {
    return list.slice(0, list.indexOf('\n'));
};

const append = (list, item) => {
    return list + '\n' + item;
};

const tail = (list) => {
    return list.slice(list.indexOf('\n') + 1);
};

const empty = (list) => {
    return head(list).length === 0 ? true : false;    
};

// const toString = (list) => {
//     const iter = (list, acc) => {
//     };
//     return iter(list, '');
// };

list = l('hellow', 'world', 'from', 'sasha');
list2 = l();
list3 = l('hellow', 'world');

// console.log(empty(list2));
// console.log(head(list));
console.log(tail(list3));
// console.log(list3);
// console.log(append(list, 'and'));
