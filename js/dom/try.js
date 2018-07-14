// import solution from './solution';

const solution = (args) => {
  console.log(args);
};

window.onload = () => {
  const elements = document.documentElement.childNodes;
  const elem = [...elements];
  solution(elem[2]);
};
