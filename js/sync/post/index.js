import solution from './solution';

const registationFormUrl = 'https://web-51710-instance-617584.exercise2.hexlet.io/?';
const submitFormUrl = 'https://web-51710-instance-617584.exercise2.hexlet.io/users';

solution(registationFormUrl, submitFormUrl, 'popka', err => console.log(err));
