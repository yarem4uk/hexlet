import url from 'url';
import http from 'https';
import querystring from 'querystring';

const getToken = body => body.match(/value="(\w+)"/)[1];

export default (registrationFormUrl, submitFormUrl, nickname, callback) => {
  http.get(registrationFormUrl, (res) => {
    if (res.statusCode !== 200) {
      callback(new Error(`status code: ${res.statusCode}`));
      return;
    }
    const body = [];
    res.on('data', (chunk) => {
      body.push(chunk.toString());
    }).on('end', () => {
      const html = body.join();
      const token = getToken(html);
      const data = querystring.stringify({
        nickname,
        token,
      });

      const { hostname, path } = url.parse(submitFormUrl);

      const options = {
        hostname,
        path,
        method: 'POST',
        headers: {
          'Content-Type': 'application/x-www-form-urlencoded',
          'Content-Length': Buffer.byteLength(data),
        },
      };

      const req = http.request(options, (re) => {
        if (res.statusCode !== 302) {
          callback(new Error(`status code post:  ${re.statusCode}`));
        }
      });
      req.write(data);
      req.end();
    });
  });
};
