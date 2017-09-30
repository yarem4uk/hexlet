import Node from './node';

function SingleTag(name, attributes = {}) {
  Node.apply(this, [name, attributes]);
}

SingleTag.prototype = Object.create(Node.prototype);

SingleTag.prototype.toString = function toString() {
  return `<${this.name}${this.attrString()}>`;
};

const single = new SingleTag('div', { class: 'header' });

console.log(single.toString());
