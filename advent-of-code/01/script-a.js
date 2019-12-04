const linesToArray = require('../linesToArray');

const calc = (value) => Math.floor(value / 3) - 2;

linesToArray(`${__dirname}/data.txt`)
  .then((arr) => {
    const finalValue = arr.reduce((accumulator, value) => {
      return accumulator + calc(value);
    }, 0)
    console.log('finalValue', finalValue);
  })