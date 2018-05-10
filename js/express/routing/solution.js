import Express from 'express';

export default () => {
  const app = new Express();
  let value = 0;

  app.get('/', (req, res) => {
    res.status(200);
    res.send({ value });
  });

  app.post('/reset', (req, res) => {
    res.status(204);
    value = 0;
  });

  app.post('/increment', (req, res) => {
    res.status(204);
    value += 1;
    res.end();
  });

  app.post('/decrement', (req, res) => {
    res.status(204);
    value -= 1;
    res.end();
  });

  app.post('/set', (req, res) => {
    console.log(req.query.value);
    res.status(204);
    value = req.query.value;
    res.end();
  });

  return app;
};
