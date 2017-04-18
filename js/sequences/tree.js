import { l, isList, isEmpty, head, tail, append } from 'hexlet-pairs-data';
import { is, toString, hasChildren, children, filter, reduce, value } from 'hexlet-html-tags';

const tree = l(l(1, 2), l(3, l(4, 5)), 6);

export const countElements = (tree) => {
    if (!isList(tree)) {
        return 1;
    }
    if (isEmpty(tree)) {
        return 0;
    }

    return countElements(head(tree)) + countElements(tail(tree));
};

export const select = (tag, dom) => {
    if (is(tag, dom)) {
        return 1;
    }
    if (isEmpty(dom)) {
        return 0;
    }
    return select(tag, head(dom)) + select(tag, tail(dom));
};
