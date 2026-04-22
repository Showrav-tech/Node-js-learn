const fs = require('fs');
const path = require('path');

fs.writeFile(
  path.join(__dirname, 'files', 'reply.txt'),
  'Hello from Node.js',
  (err) => {
    if (err) throw err;
    console.log('Write complete');
  }
);
fs.appendFile(
  path.join(__dirname, 'files', 'test.txt'),
  'testing test',
  (err) => {
    if (err) throw err;
    console.log('Append complete');
  }
);