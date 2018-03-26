import SingleTag from './singleTag';
import PairedTag from './pairedTag';


const singleTagsList = new Set(['hr', 'img', 'br']);

const buildNode = (name, attr, body, children) => {
  if (singleTagsList.has(name)) {
    return new SingleTag(name, attr, body, children);
  }
  return new PairedTag(name, attr, body, children);
} 
export default buildNode;
