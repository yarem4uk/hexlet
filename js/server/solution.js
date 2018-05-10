import fs from 'fs';
import path from 'path';
import http from 'http';

const solution = (port, callback) => {
  fs.readFile(path.resolve(__dirname, 'phonebook.txt'), 'utf8', (err, data) => {
    if (err) {
      throw err;
    }
    const users = data.trim().split('\n');
    http.createServer((request, response) => {
      console.log(request.headers);
      const messages = [
        'Welcom to The Phonebook',
        `Records count: ${users.length}`,
      ];
      response.write(messages.join('\n'));
      response.end();
    }).listen(port, callback);
  });
};

solution(4000, (err) => {
  console.log(err);
});
