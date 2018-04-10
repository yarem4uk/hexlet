import solution from './index';
import nock from 'nock';

nock.disableNetConnect();

const url1 = 'http://ru.hexlet.io';
const url2 = 'http://en.hexlet.io';
const url3 = 'http://gr.hexlet.io';

const consulHost = 'http://localhost:5456';
const status = 200;

nock(consulHost)
  .get('/backends')
  .reply(status, [
    {
      url: 'http://ru.hexlet.io',
      lang: 'ru',
    }, {
      url: 'http://en.hexlet.io',
      lang: 'en',
    }, {
      url: 'http://gr.hexlet.io',
      lang: 'gr',
    },
  ]);

nock(url1)
  .get('/status').reply(status, {
    workload: 10,
    url: url1,
  });
nock(url2)
  .get('/status').reply(status, {
    workload: 7,
    url: url2,
  });
nock(url3)
  .get('/status').reply(status, {
    workload: 9,
    url: url3,
  });

nock(consulHost)
  .post('/backends/current', { value: url2 })
  .reply(201);

solution(`${consulHost}/backends`, `${consulHost}/backends/current`);
