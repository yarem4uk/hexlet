import Express from 'express';
import session from 'express-session';
import morgan from 'morgan';
import bodyParser from 'body-parser';
import methodOverride from 'method-override';
import flash from 'flash';


import encrypt from './encrypt';
import User from './entities/User';
import Guest from './entities/Guest';

export default () => {
  const app = new Express();
  app.disable('x-powered-by');
  // app.use(morgan('combined'));
  // app.use(morgan(':method :status :url :referrer :req[header]'));
  app.use(morgan('dev'));
  app.use(methodOverride('_method'));
  app.set('view engine', 'pug');
  app.use(bodyParser.urlencoded({ extended: false }));
  app.use('/assets', Express.static('/home/alex/hexlet/js/node_modules'));
  app.use(session({
    secret: 'secret key',
    resave: false,
    saveUninitialized: false,
  }));
  app.use(flash());

  const users = [new User('admin', encrypt('qwerty'))];

  app.use((req, res, next) => {
    if (req.session && req.session.nickname) {
      const { nickname } = req.session;
      console.log(req.session, 'first');
      res.locals.currentUser = users.find(user => user.nickname === nickname);
    } else {
      res.locals.currentUser = new Guest();
    }
    next();
  });

  app.get('/', (req, res) => {
    req.flash('info', 'privet');
    res.render('index');
  });

  // BEGIN (write your solution here)
  app.get('/users/new', (req, res) => {
    res.render('users/new', { form: {}, errors: {} });
  });

  app.post('/users', (req, res) => {
    const { nickname, password } = req.body;
    const errors = {};
    if (!nickname || users.find(user => user.name === nickname)) {
      errors.nickname = 'Nickname can`t be blank, or must be unique';
    }
    if (!password) {
      errors.password = 'Password can`t be blank';
    }
    if (Object.keys(errors).length === 0) {
      const user = new User(nickname, encrypt(password));
      users.push(user);
      res.status(422);
      res.redirect('/');
      return;
    }
    res.status(422);
    res.render('users/new', { form: req.body, errors });
  });

  app.get('/session/new', (req, res) => {
    res.render('session/new', { form: {}, errors: {} });
  });

  app.post('/session', (req, res) => {
    const { nickname, password } = req.body;
    if (users.find(user => user.nickname === nickname && user.password === encrypt(password))) {
      req.session.nickname = nickname;
      res.redirect('/');
      return;
    }
    res.status(422);
    res.redirect('/session/new');
  });

  app.delete('/session', (req, res) => {
    req.session.destroy();
    res.redirect('/');
  });
  // END

  return app;
};
