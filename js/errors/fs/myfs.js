import path from 'path';
import Tree from 'hexlet-trees';

import Dir from './Dir';
import File from './File';

const getPathParts = (filepath) => {
  return filepath.split(path.sep).filter(item => item !== '');
};

export default class {
  constructor() {
    this.tree = new Tree('/', new Dir('/'));
  }

  statSync(filepath) {
    const current = this.findNode(filepath);
    return current.getMeta().getStats();
  }

  mkdirSync(filepath) {
    const { dir, base } = path.parse(filepath);
    return this.findNode(dir).addChild(base, new Dir(base));
  }

  touchSync(filepath) {
    const { dir, base } = path.parse(filepath);
    return this.findNode(dir).addChild(base, new File(base));
  }

  findNode(filepath) {
    const parts = getPathParts(filepath);
    return parts.length === 0 ? this.tree : this.tree.getDeepChild(parts);
  }
}
