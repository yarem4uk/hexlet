import { make, append, node } from 'hexlet-html-tags';
import { l } from 'hexlet-pairs-data';
import { countElements, select } from './tree';
import { dom } from './dom';

// console.log(countElements(dom));

console.log(select('p', dom));
