import { l, isEmpty, head, tail, cons, reverse } from 'hexlet-pairs-data';
import { value, is, node } from 'hexlet-html-tags';

export const b2p = (elements) => {
    if (isEmpty(elements)) {
        return l();
    }

    const element = head(elements);
    let newElement; 
    if (is('h1', element)) {
        newElement = node('p', value(element));
    } else {
        newElement = element;
    }

    return cons(newElement, b2p(tail(elements)));
};

// export const map = (func, list) => {
//     if (isEmpty(list)) {
//         return null;
//     }
//     const newElement = func(head(list));
//     return cons(newElement, map(func, tail(list)));
// };

export const map = (func, list) => {
    const iter = (list, acc) => {
        if (isEmpty(list)) {
            return reverse(acc);
        }
        return iter(tail(list), cons(func(head(list)), acc))
    };
    return iter(list, l());
};
