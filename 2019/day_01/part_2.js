// Day 1: The Tyranny of the Rocket Equation
// Part Two
const { input } = require("./input.js");
const { run } = require("../../util/run.js");

const func = () => {
  let output;
  // let operations = 0; // count the number of operations

  const calculateFuel = (inp) => {
    const fuel = Math.floor(inp / 3) - 2;
    if (fuel <= 0) {
      return 0;
    } else {
      return fuel + calculateFuel(fuel);
    }
  };

  output = input.reduce((sum, inp) => sum + calculateFuel(inp), 0);

  return { output /*, operations */ };
};

// output: 4902650
run(func);
