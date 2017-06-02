import Node from './node';

class PairedTag extends Node {

  constructor(name, attributes, body, children) {
    super(name, attributes);
    this.body = body || '';
    this.children = children || [];
  }

  

  toString() {
    return `<${this.getName()}${this.attrString()}>${this.body}${this.children.map(k => k.toString()).join('')}</${this.getName()}>`;
  }

}

export default PairedTag;
