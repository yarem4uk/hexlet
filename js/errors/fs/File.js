import Node from './Node';

export default class extends Node {
  constructor(name) {
    super(name)
  }

  isDirectory() {
    return false;
  }

  isFile() {
    return true;
  }
}
