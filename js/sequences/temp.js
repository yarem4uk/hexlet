// export const select = (query, dom) => {
//     const iter = (query, dom, acc) => {
//         const tag = head(query);
//         if (isEmpty(dom)) {
//             return acc;
//         } else if (is(tag, head(dom))) {
//             acc = append(l(head(dom)), acc);
//         } else if (hasChildren(head(dom))) {
//             acc = append(select(query, children(head(dom)), acc), acc);
//         }
//         return iter(query, tail(dom), acc);
//     };
//     return iter(query, dom, l());
// };

// export const select = (query, dom) => {
//     const tag = head(query);
//     if (isEmpty(dom)) {
//         return l();
//     } else if (is(tag, head(dom))) {
//         return append(l(head(dom)), select(query, tail(dom)));
//     } else if (hasChildren(head(dom))) {
//         return append(select(query, children(head(dom))), select(query, tail(dom)));
//     }    
//         return select(query, tail(dom));
// };
//
// export const select = (query, dom) => {
//     const tag = head(query);
//     if (isEmpty(query)) {
//         return l();
//     }
//     if (isEmpty(dom)) {
//         console.log('hellow');
//         // return select(tail(query), l());
//         return select(tail(query), select(query, tail(dom)));
//     } else if (is(tag, head(dom))) {
//         console.log(toString(tag));
//         return select(query, append(l(head(dom)), select(query, tail(dom))));
//     } else if (hasChildren(head(dom))) {
//         return select(query, append(select(query, children(head(dom))), select(query, tail(dom))));
//     }    
//         return select(query, select(query, tail(dom)));
// };
