// import fs from 'fs';
import http from 'https';
// import http from 'http';
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

export default (obj) => {
  // console.log(obj);
  const { method, data, params } = obj;
  const { hostname, pathname, query } = url.parse(obj.url, true);
  // console.log(hostname);
  const postData = querystring.stringify(data);
  // console.log(postData);
  let postHeaders = {};
  if (method === 'POST') {
    postHeaders = {
      'Content-Type': 'application/x-www-form-urlencoded',
      'Content-Length': Buffer.byteLength(postData),
    };
  }
  const options = {
    hostname,
    path: `${pathname}${getSearch(query, params)}`,
    method,
    headers: postHeaders,
    // headers: {
      // 'Content-Type': 'application/x-www-form-urlencoded',
      // 'Content-Length': Buffer.byteLength(postData),
    // },
  };
  // console.log(options.hostname, '...hostname from options');
  // console.log(options.path, '...path from options');
  return new Promise((resolve, reject) => {
    const req = http.request(options, (res) => {
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

        resolve(response);
      });
    });
    // req.write(postData);
    req.end(postData);
    req.on('error', e =>
      reject(new Error(e)));
  });
};
