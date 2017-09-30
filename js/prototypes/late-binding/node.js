function attrString() {
  return Object.keys(this.attributes).map(k => ` ${k}="${this.attributes[k]}"`).join('');
}

function Node (name, attributes) {
  this.name = name;
  this.attributes = attributes;
  this.attrString = attrString;

  // this.attrString =  function attrString() {
  //   return Object.keys(this.attributes).map(k => ` ${k}="${this.attributes[k]}"`).join('');
  // }

};

export default Node;
