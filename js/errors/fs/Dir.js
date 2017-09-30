import Node from './Node';

export default class extends Node {
  constructor(name) {
    super(name)
  }

  isDirectory() {
    return true;
  }

  isFile() {
    return false;
  }
}
