import Express from 'express';
import bodyParser from 'body-parser';

import Post from './entities/Post';

export default () => {
  const app = new Express();
  app.set('view engine', 'pug');
  app.use(bodyParser.urlencoded({ extended: false }));
  app.use('/assets', Express.static('/home/alex/hexlet/js/node_modules'));

  const posts = [
    new Post('hello', 'how are your?'),
    new Post('nodejs', 'story about nodejs'),
  ];

  app.get('/', (req, res) => {
    res.send('this is main page');
  });

  app.get('/posts', (req, res) => {
    res.render('posts/index', { form: {}, errors: {} });
  });

  app.get('/posts/new', (req, res) => {
    res.render('posts/new', { title: 'hello' });
  });

  app.get('/posts/:id', (req, res) => {
    const index = req.params.id;
    const post = posts.filter(item => item.id === Number(index));
    const currentPost = post[0];
    res.render('posts/show', { currentPost });
  });

  app.post('/posts', (req, res) => {
    const [ title, body ] = req.body;
    const errors = {};
    if (!title) {
      errors.title = "Can't be blank";
    }
    if (!body) {
      errors.body = "Can't be blank";
    }
    console.log(Object.keys(errors).length);
    // if (Object.keys(errors).length === 0) {
    //   const post = new Post(title, body);
    //   posts.push(post);
    //   res.redirect(`/posts${post.id}`);
    //   return;
    // }
    res.status(422);
    res.render('post/new', { from: req.body, errors });
  });

  return app;
};
