import Node from './node';

class SingleTag extends Node {

  constructor(name, attributes) {
    super(name, attributes);
  }


  toString() {
    return `<${this.getName()}${this.attrString()}>`;
  }

}

export default SingleTag;
