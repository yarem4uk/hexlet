import { cons, car, cdr } from 'hexlet-pairs';
import { l, isEmpty, head, tail, reverse, cons as consList } from 'hexlet-pairs-data';
import { is } from 'hexlet-html-tags';
export const make = () => l();

export const node = (name, body) => cons(name, body);

export const append = (list, el) => consList(el, list);

export const toString = (list) => {
    if (isEmpty(list)) {
        return '';
    }
    return toString(tail(list)) + `<${car(head(list))}>${cdr(head(list))}</${car(head(list))}>`;
}

export const map = (func, elements) => {
    const iter = (element, acc) => {
        if (isEmpty(elements)) {
            return acc;
        }
        const newElement = func(element);
        return iter(head(elements), append(acc, newElement));
    };
    return iter(head(elements), l());
}; 

export const filter = (func, list) => {
    const iter = (list, acc) => {
        if (isEmpty(list)) {
            return reverse(acc);
        }
        if (func(head(list))) {
            return iter(tail(list), consList(head(list), acc));
        } else {
           return iter(tail(list), acc); 
        }
    };
    return iter(list, l());
};

export const removeHeaders = (list) => {
    if (isEmpty(list)) {
        return l(); 
    }
    const newElement = head(list);
    if (is('h2', newElement)) {
        return removeHeaders(tail(list));
    } else {
        return consList(newElement, removeHeaders(tail(list)));
    }
};
