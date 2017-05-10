import { l, isList, isEmpty, head, tail, append } from 'hexlet-pairs-data';
import { is, hasChildren, children, filter, reduce, value, toString } from 'hexlet-html-tags';

export const countElements = (list) => {
    if (!isList(list)) {
        return 1;
    } else if (isEmpty(list)) {
        return 0;
    }
    return countElements(children(head(list)) + countElements(tail(list)));
};

export const select = (query, dom) => {
    if (isEmpty(query)) {
        return dom;
    }
    const tag = head(query);
    const newDom = reduce((item, acc) => {
        if (is(tag, item)) {
            const childrens = hasChildren(item) ? children(item) : l();
            const elements = isEmpty(tail(query)) ? l(item) : childrens;
            return append(elements, acc);
        } else if (hasChildren(item)) {
            return append(select(query, children(item)), acc);
        }
        return acc;
    }, l(), dom);
    return select(tail(query), newDom);
};
