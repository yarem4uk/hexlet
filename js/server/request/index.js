import fs from 'fs';
import path from 'path';

import makeServer from './server';

export default (port, callback = () => {}) => {
  fs.readFile(path.resolve(__dirname, '../phonebook.txt'), (err, data) => {
    if (err) {
      throw err;
    }

    // BEGIN (write your solution here)
    const lineOfUsers = data.toString().trim().split('\n');
    const users = lineOfUsers.reduce((acc, item) => {
      const [id, name, phone] = item.split('|');
      return {
        ...acc,
        [id.trim()]: { name: name.trim(), phone: phone.trim() },
      };
    }, {});
    // END
    const server = makeServer(users);
    server.listen(port, () => callback(server));
  });
};
