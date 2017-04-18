import { l, isEmpty, head, tail, cons, reverse, toString } from 'hexlet-pairs-data';

const zip  = (list1, list2) => {
    const iter = (list1, list2, acc) => {
        if (isEmpty(list1) || isEmpty(list2)) {
            return reverse(acc);
        }
        acc =  cons(l(head(list1), head(list2)), acc);
    return iter(tail(list1), tail(list2), acc);
    };
    return iter(list1, list2, l());
};

// const zip = (list1, list2) => {
//     // console.log(toString(list1));
//     if (isEmpty(list1) || isEmpty(list2)) {
//         // return null;
//         return l(list1, list2);
//     }
//     console.log(toString(tail(list1)), toString(tail(list2)));
//     return l(l(head(list1), head(list2)), head(zip(tail(list1), tail(list2))));
// };


console.log(toString(zip(l(1, 3, 5, 9), l(1, 4, 7, 0, 9))));
// console.log(toString(l(l(1, 2), l(2, 4))));
