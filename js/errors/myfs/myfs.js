import HexletFsError from './hexletFsError';
import errors from 'errno';
import path from 'path';
// import Tree from '../tree.js';
import Tree from 'hexlet-trees';
import { Dir, File } from 'hexlet-fs';

const getPathParts = (filepath) => {
  return filepath.split(path.sep).filter(item => item !== '');
};

export default class {
  constructor() {
    this.tree = new Tree('/', new Dir('/'));
  }

  copySync(src, dest) {
    const current = this.findNode(src);
    const to = this.findNode(dest);
    if (current.getMeta().isDirectory()) {
      throw new HexletErrors(errors.code.EISDIR, src);
    }
    if (!current || to) {
      throw new HexletErrors(errors.code.ENOENT, to); 
    }
  }

  statSync(filepath) {
    const current = this.findNode(filepath);
    if (!current) {
      return null;
    }
    return current.getMeta().getStats();
  }

  mkdirSync(filepath) {
    const { dir, base } = path.parse(filepath);

    const parent = this.findNode(dir);
    if (!parent || parent.getMeta().getStats().isFile()) {
      return false;
    }
    return parent.addChild(base, new Dir(base));
  }

  mkdirpSync(filepath) {
    const iter = (parts, subtree) => {
      if (parts.length === 0) {
        return subtree;
      }
      const [part, ...rest] = parts; 
      const current = subtree.getChild(part);
      if (!current) {
        return iter(rest, subtree.addChild(part, new Dir(part)));
      }
      if (current.getMeta().isFile()) {
        return false;
      }
      return iter(rest, current);
    };
    const parts = getPathParts(filepath);
    return iter(parts, this.tree);
  }

  touchSync(filepath) {
    const { dir, base } = path.parse(filepath);
    const parent = this.findNode(dir);
    if (!parent || parent.getMeta().isFile()) {
      return false
    }
    parent.addChild(base, new File(base, ''));
    return true;
  }

  unlinkSync(filepath) {
    const { base } = path.parse(filepath);
    const file = this.findNode(filepath);
    if (!file) {
      return [null, errors.code.ENOENT];
    }
    if (file.getMeta().isDirectory()) {
      return [null, errors.code.EPERM];
    }
    // const body = file.getMeta().getBody();
    file.removeChild(base); 
  }

  writeFileSync(filepath, content) {
    const { dir, base } = path.parse(filepath);
    const parent = this.findNode(dir);
    const current = this.findNode(filepath);
    if (!current) {
      return [null, errors.code.ENOENT];
    }
    if (current.getMeta().isDirectory()) {
      return [null, errors.code.EISDIR];
    }
    parent.addChild(base, new File(base, content)); 
  }

  readFileSync(filepath) {
    const file = this.findNode(filepath);
    if (!file) {
      return [null, errors.code.ENOENT];
    }
    if (file.getMeta().isDirectory()) {
      return [null, errors.code.EISDIR];
    }
    return file.getMeta().getBody(); 
  }

  rmdirSync(filepath) {
    const { dir, base } = path.parse(filepath);
    const file = this.findNode(filepath);

    if (!this.findNode(filepath) || file.getMeta().getStats().isFile() || file.hasChildren()) {
      return false;
    } else {
      this.findNode(dir).removeChild(base);
      return true;
    }
  }

  readdirSync(filepath) {
    const dir = this.findNode(filepath);
    if (!dir || dir.getMeta().getStats().isFile()) {
      return false; 
    } else {
      return dir.getChildren().map(item => item.getKey());
    }
  }

  findNode(filepath) {
    const parts = getPathParts(filepath);
    return parts.length === 0 ? this.tree : this.tree.getDeepChild(parts);
  }
}
