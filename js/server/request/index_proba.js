import fs from 'fs';
import path from 'path';

fs.readFile(path.resolve(__dirname, '../phonebook.txt'), 'utf8', (err, data) => {
  const users = data.trim().split('\n');
  const arr = users.reduce((acc, item) => {
    const [id, name, phone] = item.split('|');
    return { ...acc, [id.trim()]: { name: name.trim(), phone: phone.trim() } };
  }, {});
  console.log(arr);
});
