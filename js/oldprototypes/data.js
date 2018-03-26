import SingleTag from './singleTag';

// const data = ['html', [
//   ['meta', [
//     ['title', 'hello, hexlet!'],
//   ]],
//   ['body', { class: 'container' }, [
//     ['h1', { class: 'header' }, 'html builder example'],
//     ['div', [
//       ['span', 'span text2'],
//       ['span', 'span text3'],
//     ]],
//   ]],
// ]];

// const data = ['h1', { class: 'container', href: 'https//hexlet.io' }, [['span', { class: 'link', href: 'http//superoffice.ua' }, 'anotherlink'], ['div']]];

// const data = ['html', { class: 'container', href: 'https//hexlet.io' }, 'hellow', []];

// const data = ['html', {}, '', []];

const data = new SingleTag('html', { class: 'header', href: 'http//superoffice.ua' });

export default data;
