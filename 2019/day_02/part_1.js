// Day 2: 1202 Program Alarm
// Part One
let { input } = require("./input.js");

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

const output = input[0];

console.log(output); // 6627023
