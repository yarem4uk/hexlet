import http from 'http';
import url from 'url';
import querystring from 'querystring';

const getSearch = (queryParams, params) => {
  const mergedQuery = { ...queryParams, ...params };
  const keys = Object.keys(mergedQuery);
  const newQueryParams = keys
    .filter(key => mergedQuery[key] !== null && mergedQuery[key] !== undefined)
    .reduce((acc, key) => ({ ...acc, [key]: mergedQuery[key] }), {});

  return keys.length > 0 ? `?${querystring.stringify(newQueryParams)}` : '';
};

const promiseReadFile = filename => {
  return new Promise((resolve, reject) => {
    fs.readFile(filename, (err, data) => {
      err ? reject(err) : resolve(data);
    });
  });
};

export default uri => {
  return new Promise((reselve, reject) => {
    http.get(uri, (res) => {
      console.log(res.statusCode);
    }); // http.get
  }); // promise
}; // dispather
