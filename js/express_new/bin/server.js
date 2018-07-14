import solution from '../application';

const port = 3000;
solution().listen(port, () => {
  console.log(`Server was started on '${port}'`);
});
