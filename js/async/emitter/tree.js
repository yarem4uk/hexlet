import EventEmitter from 'events';

class Tree extends EventEmitter {
  constructor(key, parent) {
    super();
    this.parent = parent;
    this.key = key;
    this.children = new Map();
  }

  getKey() {
    return this.key;
  }

  getParent() {
    return this.parent;
  }

  addChild(key) {
    const child = new Tree(key, this);
    this.children.set(key, child);
    this.emit('add', child);
    return child;
  }

  removeChild(key) {
    this.children.delete(key);
  }

  getThis() {
    return this;
  }

}

export default Tree;
