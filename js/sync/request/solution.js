import url from 'url';
import http from 'https';

const getTitle = body => body.match(/<h1>(.*?)<\/h1>/)[1];

const getLinks = body =>
  (body.match(/href="\/(.*?)">/g) || [])
    .map(item => item.match(/href="\/(.*?)">/)[1]);


export const solution = (title, link, callback) => {
  let visited = [];
  const iter = (links) => {
    const [head, ...rest] = links;
    visited = [...visited, head];
    if (!head) {
      return;
    }
    http.get(head, (res) => {
      const body = [];
      res.on('data', (chunk) => {
        body.push(chunk.toString());
      }).on('end', () => {
        const html = body.join();
        if (title === getTitle(html)) {
          callback(null, head);
          return;
        }
        const thisLinks = getLinks(html)
          .map(item => url.format({ ...url.parse(head), search: null, pathname: item }));
        const newlinks = thisLinks.filter(item => !visited.includes(item) && !rest.includes(item));
        links = [...rest, ...newlinks];
        if (links.length === 0) {
          callback('err');
          return;
        }
        iter(links);
      });
    });
  };
  return iter([link]);
};
