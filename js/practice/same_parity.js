import { l, isEmpty, head, tail, filter, toString } from 'hexlet-pairs-data';
import { countElements } from '../sequences/tree';

const sameParity = (list) => {
    if (isEmpty(list)) {
        return l();
    } else if (head(list) % 2 === 0) {
        return filter(element => element % 2 === 0, list);
    } else {
        return filter(element => element % 2 !== 0, list);
    }
};

console.log(toString(sameParity(l())));
