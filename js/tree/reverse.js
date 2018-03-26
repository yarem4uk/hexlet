 const reverse = (str) => {
  // BEGIN (write your solution here)
  const iter = (i, acc) => {
    // console.log(str[i]);
    // console.log(acc);
   if (str[i] === undefined ) {
     return acc;
   } 
    acc = str[i] + acc;
      return iter(i + 1, acc);
  };
  // END
  return iter(0, '');
};

console.log(reverse('hello'));
