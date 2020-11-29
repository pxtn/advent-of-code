// Day 1: The Tyranny of the Rocket Equation
// Part Two
const { input } = require("./input.js");

const calculateFuel = (inp) => {
  const fuel = Math.floor(inp / 3) - 2;
  if (fuel <= 0) {
    return 0;
  } else {
    return fuel + calculateFuel(fuel);
  }
};

const output = input.reduce((sum, inp) => sum + calculateFuel(inp), 0);

console.log(output); // 4902650
