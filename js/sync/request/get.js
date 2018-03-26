import http from 'https';

http.get('http://superoffice.ua/', res => {
  const body = [];
  res.on('data', chunk => {
    console.log(chunk.toString());
    body.push(chunk.toString());
  }).on('end', () => {
    const html = body.join();
    console.log(html);
  });
});
