import solution from './solution';

const port = 4000;

solution().listen(port, () => {
  console.log('Example blog listn on port 4000');
});
