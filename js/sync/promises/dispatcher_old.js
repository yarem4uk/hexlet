import fs from 'fs';
// import http from 'https';
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

export default ({ url, method }) => {
  return new Promise((resolve, reject) => {
    http.get(url, (res) => {
      const body = [];
      res.on('data', (chunk) => {
        body.push(chunk.toString());
      }).on('end', () => {
        const html = body.join();
        const response = {
          status: res.statusCode,
          statusText: res.statusMessage,
          headers: res.headers,
          data: html,
        };
        return res.statusCode === 200 | res.statusCode === 301 ? resolve(response) : reject(new Error());
      });
    });
  });
};
