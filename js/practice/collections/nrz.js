const signal = "_|¯|____|¯|__|¯¯¯";

const nrzi = (str) => {
  if (str === '' || str === '|') {
    return '';
  }
  const arr = str.split('');
  return arr.reduce((acc, item, i) => {
    if (item === '|') {
      return acc;
    }
    if (item === arr[i-1] || i === 0) {
     return acc + '0'; 
    }
    return acc + '1';
  }, '');
};

console.log(nrzi(signal));
