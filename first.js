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