// Day 1: The Tyranny of the Rocket Equation
// Part One
const { input } = require("./input.js");

const output = input.reduce((sum, inp) => sum + (Math.floor(inp / 3) - 2), 0);

console.log(output); // 3270338
