// Day 3: Toboggan Trajectory
// Part One
const { input } = require("./input.js");
const { run } = require("../../util/run.js");

const func = () => {
  // tree counter
  let output = 0;
  let position = 0;

  input.split(['\n']).forEach((row, index) => {
    position = (index * 3) % row.length;

    if (row[position] === '#') {
      output += 1;
    }
  });
  return {output};
};

run(func);