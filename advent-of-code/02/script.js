const fs = require('fs');
const file = fs.readFileSync(`${__dirname}/data.txt`);

const program = file.toString().split(',');
const programAsInts = program.map(Number);

const parseProgram = (program, currentIndex = 0) => {
  const opCode = program[currentIndex];
  const pos1 = program[currentIndex + 1];
  const pos2 = program[currentIndex + 2];
  const pos3 = program[currentIndex + 3];
  const value1 = program[pos1];
  const value2 = program[pos2];

  if (opCode === 99) return program;

  if (opCode === 1) {
    program[pos3] = value1 + value2
  }
  if (opCode === 2) {
    program[pos3] = value1 * value2
  }

  return parseProgram(program, currentIndex + 4)
}

console.log(parseProgram(programAsInts));