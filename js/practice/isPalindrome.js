const isPalindrome = (str) => {
  if (str.length <= 1 ) {
    return true;
  }
  if (str[0] !== str[str.length - 1]) {
    return false;
  }
  return isPalindrome(str.substr(1, str.length - 2));
};

console.log(isPalindrome('arra'));

// const str = '';

// console.log(str.length);
