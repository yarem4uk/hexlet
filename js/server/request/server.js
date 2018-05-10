import http from 'http';
import url from 'url';
import querystring from 'querystring';

export default users => http.createServer((request, response) => {
  request.on('end', () => {
    if (request.url === '/') {
      const messages = [
        'Welcome to The Phonebook',
        `Records count: ${Object.keys(users).length}`,
      ];
      response.end(messages.join('\n'));
    } else if (request.url.startsWith('/search')) {
      // BEGIN (write your solution here)
      const { query } = url.parse(request.url, true);
      const filtered = Object.keys(users)
        .filter(id => users[id].name.toLowerCase().includes(query.q));
      const messages = filtered.reduce((acc, item) => {
        return [...acc, `${users[item].name}, ${users[item].phone}`];
      }, []);
      response.end(messages.join('\n'));
      // END
    }
  });

  request.resume();
});
