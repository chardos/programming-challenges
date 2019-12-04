const linesToArray = require('../../linesToArray');

const calc = (value) => Math.floor(value / 3) - 2;

const recurser = (remainingWeight, accumulator = 0) => {
  const newWeight = calc(remainingWeight);
  console.log('newWeight', newWeight);

  if (newWeight <= 0) return accumulator;

  return recurser(newWeight, parseInt(accumulator) + newWeight);
}

linesToArray(`${__dirname}/data.txt`)
  .then((moduleMasses) => {
    const finalValue = moduleMasses.reduce((accumulator, moduleMass) => {
      const payloadWeight = recurser(moduleMass);
      console.log('payloadWeight', payloadWeight);
      return accumulator + payloadWeight;
    }, 0)
    console.log('finalValue', finalValue);
  })