class Node {
constructor(name, attributes) {
  this.name = name;
  this.attributes = attributes;
}

  getName() {
    return this.name;
  }

  attrString() {
  return Object.keys(this.attributes).map(k => ` ${k}="${this.attributes[k]}"`).join('');
  }

}

export default Node;
