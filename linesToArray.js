const readline = require('readline');
const fs = require('fs');

const linesToArray = (filename) => new Promise(resolve => {
  const readInterface = readline.createInterface({
    input: fs.createReadStream(filename),
    output: process.stdout,
    console: false
  });
  
  const values = [];
  
  readInterface.on('line', function(line) {
    values.push(line);
  });
  
  readInterface.on('close', function() {
    resolve(values);
  });
})

module.exports = linesToArray;