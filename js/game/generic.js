import * as pairs from 'hexlet-pairs';
import { l, cons, isEmpty, head, tail, toString } from 'hexlet-pairs-data';
import { attach, typeTag, contents } from './type';


let methods = l();

export const getMethod = (obj, methodName) => {
    const iter = (list) => {
        if (isEmpty(list)) {
            return null;
        } else if (pairs.car(head(list)) === typeTag(obj) && pairs.car(pairs.cdr(head(list))) === methodName) {
            return pairs.cdr(pairs.cdr(head(list)));
        }
        return iter(tail(list));
    }
    return iter(methods);
};

export const definer = type => 
    (methodName, f) => {
        methods = cons(attach(type, pairs.cons(methodName, f)), methods);
    };
console.log(toString(methods), 'list of methods');
