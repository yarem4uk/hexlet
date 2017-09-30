import Node from './node';

function PairedTag (name, attributes, body, children) {
  Node.apply(this, [name, attributes]);

  this.body = body || '';
  this.children = children || [];

  // this.toString = function toString() {
  //   return `<${this.getName()}${this.attrString()}>${this.body}${this.children.map(k => k.toString()).join('')}</${this.getName()}>`;
  // };

}

PairedTag.porototype.toString = function toString() {
    return `<${this.getName()}${this.attrString()}>${this.body}${this.children.map(k => k.toString()).join('')}</${this.getName()}>`;
  };

const pair = new PairedTag('div', { class: 'header' }, 'body', []);
console.log(pair.toString());
