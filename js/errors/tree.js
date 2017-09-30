class Tree {
  constructor(key, meta, parent) {
    this.parent = parent;
    this.key = key;
    this.meta = meta;
    this.children = new Map();
  }

  getKey() {
    return this.key;
  }

  getMeta() {
    return this.meta;
  }

  getParent() {
    return this.parent;
  }

  getChild(key) {
    return this.children.get(key);
  }

  getChildren() {
    return [...this.children.values()];
  }

  getDeepChild(keys) {
    const [key, ...rest] = keys;
    const node = this.getChild(key);
    if (rest.lenth === 0 || node === undefined) {
        return node;
    }
   return this.node.getDeepChild(rest); 
    // return keys.reduce((node, key) => node && node.getChild(key), this);
  }

  addChild(key, meta) {
    const child = new Tree(key, meta, this);
    this.children.set(key, child);

    return child;
  }

  removeChild(key) {
    this.children.delete(key);
  }

  hasChild(key) {
    return this.children.has(key);
  }

  hasChildren() {
    return this.children.size > 0; 
  }

}

export default Tree;
