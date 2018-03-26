const makeNode = name => {
  return {
    name, //name: name,
    getName() { // getName: function getName {...} 
      return this.name;
    },
  }
};

const obj = makeNode('table');
console.log(obj.name);
console.log(obj.getName());
console.log(obj['name']);
const func = obj.getName();
console.log(func());
