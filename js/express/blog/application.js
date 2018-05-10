import Express from 'express';
import bodyParser from 'body-parser';
import morgan from 'morgan';
import methodOverride from 'method-override';

import Post from './entities/Post';

export default () => {
  const app = new Express();
  app.use(morgan('combined'));
  app.set('view engine', 'pug');
  app.use(bodyParser.urlencoded({ extended: false }));
  app.use('/assets', Express.static('/home/alex/hexlet/js/node_modules'));
  app.use(methodOverride('_method'));

  let posts = [
    new Post('hello', 'how are your?'),
    new Post('nodejs', 'story about nodejs'),
  ];

  app.get('/', (req, res) => {
    res.render('index');
  });

  app.get('/posts', (req, res) => {
    res.render('posts/index', { posts });
  });

  app.get('/posts/new', (req, res) => {
    res.render('posts/new', { form: {}, errors: {} });
  });

  app.get('/posts/:id', (req, res) => {
    const post = posts.find(post => post.id.toString() === req.params.id);
    res.render('posts/show', { post });
  });

  app.post('/posts', (req, res) => {
    const { title, body } = req.body;
    const errors = {};
    if (!title) {
      errors.title = 'Title can`t be blank';
    }
    if (!body) {
      errors.body = 'Body can`t be blank';
    }
    if (Object.keys(errors).length === 0) {
      const post = new Post(title, body);
      posts.push(post);
      res.redirect(`/posts/${post.id}/edit`);
    }
    res.status(422);
    res.render('posts/new', { form: req.body, errors });
  });

  app.get('/posts/:id/edit', (req, res) => {
    const form = posts.find(post => post.id.toString() === req.params.id);
    res.render('posts/edit', { form, errors: {} });
  });

  app.patch('/posts/:id', (req, res) => {
    const { title, body } = req.body;
    const post = posts.find(post => post.id.toString() === req.params.id);

    const errors = {};
    if (!title) {
      errors.title = 'Title can`t be blank';
    }
    if (!body) {
      errors.body = 'Body can`t be blank';
    }
    if (Object.keys(errors).length === 0) {
      post.title = title;
      post.body = body;
      res.redirect(`/posts/${post.id}`);
    }

    // res.status(422);
    res.redirect(`/posts/${post.id}/edit`);
  });

  app.delete('/posts/:id', (req, res) => {
    const { id } = req.params;
    const newPosts = posts.filter(item => item.id.toString() !== id);
    posts = newPosts;
    res.redirect('/posts');
  });

  return app;
};
