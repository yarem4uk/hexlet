export default (val, err) =>
  new Promise((resolve, reject) => {
    if (err) {
      reject(err);
      return;
    }
    resolve(val);
  });
