import http from 'http';

http.createServer((request, response) => {
  request
    .on('error', err => {
      console.error(err);
    })
    .on('end', () => {
      response
        .on('error', err => {
          console.error(err);
        });

      console.log(request.url.startsWith);
      response.statusCode = 404;
      response.setHeader('Content-Type', 'application/json');

      const message = 'Welcomt To The Phonebook';
      response.write(message);
      response.end();
    });
  request.resume();
}).listen(3000);
