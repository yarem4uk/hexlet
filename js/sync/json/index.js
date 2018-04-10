import { get, post } from 'hexlet-http-request';

export default (backendUrl, currentBackandUrl) => {
  const promise =  get(backendUrl)
    .then(res => JSON.parse(res.data))
    .then(data => Promise.all(data.map(item => get(`${item.url}/status`).then(res => JSON.parse(res.data)))))
    .then(data => data.reduce((acc, item) => {
      return item.workload < acc.workload ? item : acc;
    }, data[0]))
    .then(data => post(currentBackandUrl, { value: data.url }))
    .catch(err => console.log(err));
  return promise;
};
