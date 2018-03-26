import Node from './node';

function PairedTag (name, attributes = {}, body = '', children = []) {
  Node.apply(this, [name, attributes]);
  this.body = body;
  this.children = children;
}

PairedTag.prototype = Object.create(Node.prototype);

PairedTag.prototype.toString = function toString() {
  return `<${this.name}${this.attrString()}>${this.body}${this.children.map(k => k.toString()).join('')}</${this.name}>`;
};

const pair = new PairedTag('div', { class: 'header' }, 'body', []);
console.log(pair.toString());
