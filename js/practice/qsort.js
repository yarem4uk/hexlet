import { l, isEmpty, head, tail, cons, append, filter, toString } from 'hexlet-pairs-data';


export const sort = (list) => {
    if (isEmpty(list)) {
        return l();
    }
    const less = filter(item => item < head(list), tail(list));
    const more = filter(item => item >= head(list), tail(list));
    return append(sort(less), cons(head(list), sort(more)));
};

console.log(toString(sort(l(1, 0, 3, 5, -2, 8, 1))));
