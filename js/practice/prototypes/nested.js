const obj = {
  person: {
    name: 'joe',
    history: {
      hometown: 'bratislava',
      bio: {
        funFact: 'I like fishing.',
      },
    },
  },
};

// console.log(obj);

const nested = (str, ob) => {

};

console.log(nested('person.history.bio', obj));
