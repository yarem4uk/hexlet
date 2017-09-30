function Node (name, attributes) {
  this.name = name;
  this.attributes = attributes;

};

export default Node;

Node.prototype.attrString = function attrString() {
  return Object.keys(this.attributes).map(k => ` ${k}="${this.attributes[k]}"`).join('');
}
