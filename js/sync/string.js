import url from 'url';
// import querystring from 'querystring';

const address = 'http://amazon.com/search?page=10&per=5&helow=yes&sasha=privet';

const address2 = 'http://amazon.com/';

const obj = {
  page: 10,
  per: 8,
  order: 'desc',
  hidden: false,
  helow: null,
};

const obj1 = {};

const solution = (addr, data = {}) => {
  const { query } = url.parse(addr, true);
  console.log(query);
  const newQuery = Object.keys(query).reduce((acc, el) => {
    return data[el] === null ?  { ...acc } : { ...acc, [el]: query[el] };
  }, {});
  const newData = Object.keys(data).reduce((acc, el) => {
    return data[el] === null ? { ...acc } : { ...acc, [el]: data[el] };
  }, newQuery);
  return url.format({ ...url.parse(addr, true), search: null, query: newData });
};

console.log(solution(address2, obj1));

console.log(solution(address2, obj1));

