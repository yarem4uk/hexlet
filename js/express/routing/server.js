import solution from './solution';

const port = 3000;

solution().listen(port, () => {
  console.log('Example app listen on port 3000');
});
