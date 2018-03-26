const str = { per: 10, page: 1 };

const bqs = (obj) => {
  const par = Object.keys(obj).sort();
  const strin = par.reduce((acc, item) => {
    return [...acc, item + '=' + obj[item]]; 
  }, []);
  return strin.join('&');
};

console.log(bqs(str));
