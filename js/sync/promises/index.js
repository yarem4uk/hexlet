// import http from 'http';
import querystring from 'querystring';

import nock from 'nock';
import { get, post } from './solution';

nock.disableNetConnect();

const host = 'http://ru.hexlet.io';
// const body = 'hello world';
const params = { a: 'v', d: 'k' };
const q = 'index';
const pathname = '/users';
const data = { nickname: 'scooter' };
const preparedData = querystring.stringify(data);

nock(host, {
  reqheaders: {
    'Content-Type': 'application/x-www-form-urlencoded',
    'Content-Length': preparedData.length.toString(),
  },
})
  .post(pathname, data)
  // .query({ q, ...params })
  .reply(302, data);


// get(`${host}/?q=${q}`, { params })
//   .then(res => console.log(res.data, 'get response'))
//   .catch(err => console.log(err));

post(`${host}${pathname}`, data)
  .then(res => console.log(res.data, 'post http'))
  .catch(err => console.log(err, 'error from catch'));
