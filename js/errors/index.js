import HexletFs from './myfs/myfs';

const files = new HexletFs();

files.mkdirSync('/etc');
files.mkdirSync('/opt');
files.mkdirSync('/help');
files.touchSync('/opt/file.txt');
files.touchSync('/opt/try.txt');
files.touchSync('/opt/vim.txt');
files.touchSync('/opt/hexlet.txt');
files.writeFileSync('/opt/try.txt', 'hellow');

// console.log(files.rmdirSync('/opt/file.txt'));
// console.log(files.rmdirSync('/opt'));
// console.log(files.rmdirSync('/help'));

// console.log(files.readdirSync('/opt'));
// console.log(files.readdirSync('/help'));
// console.log(files.readdirSync('/undefined'));
// console.log(files.unlinkSync('/opt/try.txt'));
console.log(files.readFileSync('/opt/try.txt'));
// console.log(files.writeFileSync('/opt/file.txt', 'hellow'));
