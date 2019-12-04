const fs = require('fs');
const file = fs.readFileSync(`${__dirname}/data.txt`);

console.log('file', file);
