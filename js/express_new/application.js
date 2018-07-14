import Express from 'express';
import bodyParser from 'body-parser';
import morgan from 'morgan';
import methodOverride from 'method-override';

import Post from './entities/Post';

export default () => {
  const app = new Express();
  app.use(morgan('dev'));
  app.set('view engine', 'pug');
  app.use(bodyParser.urlencoded({ extended: false }));
  app.use('/assets', Express.static('/home/alex/hexlet/js/node_modules'));
  app.use(methodOverride('_method'));

  const posts = [
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
    const { id } = req.params;
    const post = posts.find(post => post.id === Number(id));
    res.render('posts/show', { post });
  });

  app.post('/posts', (req, res) => {
    const errors = {};
    const { title, body } = req.body;
    if (!title) {
      errors.title = 'Title can`t be blank';
    }
    if (!body) {
      errors.body = 'Body can`t be blank';
    }
    if (Object.keys(errors).length === 0) {
      const post = new Post(title, body);
      posts.push(post);
      res.redirect(`/posts/${post.id}`);
      // res.redirect(`/posts/`);
      return;
    }
    res.status(422);
    res.render('posts/new', { form: req.body, errors });
  });

  return app;
};
