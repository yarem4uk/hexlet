import http from 'http';
import url from 'url';
import querystring from 'querystring';

export default users => http.createServer((request, response) => {
  request.on('error', (err) => {
    console.error(err.stack); // eslint-disable-line no-console
  });
  request.on('end', () => {
    if (request.url === '/') {
      const messages = [
        'Welcome to The Phonebook',
        `Records count: ${Object.keys(users).length}`,
      ];
      response.end(messages.join('\n'));
    } else if (request.url.startsWith('/search.json')) {
      response.setHeader('Content-Type', 'application/json');
      const { query } = url.parse(request.url);
      const { q } = querystring.parse(query);
      const normalizedSearch = q ? q.trim().toLowerCase() : '';

      const result = Object.keys(users)
        .filter(id => users[id].name.toLowerCase().includes(normalizedSearch))
        .map(id => users[id]);

      response.end(JSON.stringify(result));
    } else if (request.url.startsWith('/users.json')) {
      // BEGIN (write your solution here)
      response.setHeader('Content-Type', 'application/json');
      const { query } = url.parse(request.url, true);
      // console.log(JSON.stringify(query));
      // console.log(JSON.parse(query));
      // const { q, page, perPage } = JSON.parse(query);
      const { q, page, perPage } = querystring.parse(query);

      // console.log(typeof page);
      const normalizedSearch = q ? q.trim().toLowerCase() : '';
      const result = Object.keys(users)
      .filter(id => users[id].name.toLowerCase().includes(normalizedSearch)).map(id => users[id]);
      const start = perPage * (page - 1);
      const end = start + Number(perPage);
      const data = result.slice(start, end);
      const totalPages = result.length % perPage ? ((result.length - (result.length % perPage)) / perPage) + 1 : result.length / perPage;
      const meta = { page: Number(page), perPage: Number(page), totalPages };
      const newResult = page ? { meta, data } : data;
      response.end(JSON.stringify(newResult));
      // response.end('hello');
      // END
    }
  });
  request.resume();
});
