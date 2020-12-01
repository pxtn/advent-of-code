// Day 2: 1202 Program Alarm
// Part One
let { input } = require("./input.js");
const { run } = require("../../util/run.js");

const func = () => {
  let output;
  // let operations = 0; // count the number of operations

  let i = 0;

  input[1] = 12;
  input[2] = 2;

  while (input[i] != undefined) {
    const opcode = input[i];
    if (opcode === 1) {
      input[input[i + 3]] = input[input[i + 1]] + input[input[i + 2]];
    } else if (opcode === 2) {
      input[input[i + 3]] = input[input[i + 1]] * input[input[i + 2]];
    } else if (opcode === 99) {
      break;
    } else {
      console.error("invalid opcode", opcode);
      return;
    }
    i += 4;
  }

  output = input[0];

  return { output /*, operations */ };
};

// output: 6627023
run(func);
