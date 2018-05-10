// import { post, get } from 'hexlet-http-request';
import { post, get } from '../promises/solution';


const getToken = body => body.match(/value="(\w+)"/)[1];

const registrationFormUrl = 'https://web-50942-instance-638997.exercise4.hexlet.io/?';

const submitFormUrl = 'https://web-50942-instance-638997.exercise4.hexlet.io/users';

const getF = async (registratinLink, submitLink, nickname ) => {
  const v = await Promise.resolve(get(registratinLink));
  if (v.status !== 200) {
    return Promise.resolve(new Error(`status code: ${v.status} from get`));
  }
  const html = await Promise.resolve(v.data);
  const token = getToken(html);
  const option = {
    nickname,
    token,
  };
  const p = await post(submitLink, option);
  if (p.status !== 302) {
    return Promise.resolve(new Error(`status code: ${p.statusCode}`));
  }
  return null;
};

getF(registrationFormUrl, submitFormUrl, 'yarem4uk_alena').then(x => console.log(x));
