import Node from './node';

function toString() {
  return `<${this.name}${this.attrString()}>`;
};

function SingleTag(name, attributes) {
  Node.apply(this, [name, attributes]);

  // this.toStirng = toString;

  // this.toString = function toString() {
  //   return `<${this.getName()}${this.attrString()}>`;
  // };
}

SingleTag.prototype.toString = toString; 

const single = new SingleTag('div', { class: 'header' });

console.log(single.toString());
