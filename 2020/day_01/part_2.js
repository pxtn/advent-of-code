// Day 1: Report Repair
// Part Two
const { input } = require("./input.js");
const { run } = require("../../util/run.js");

const func = () => {
  let output;
  // let operations = 0; // count the number of operations

  const entries = input.split("\n").map((e) => Number(e));

  for (let i = 0; i < entries.length; i++) {
    for (let j = i + 1; j < entries.length; j++) {
      for (let k = i + 2; k < entries.length; k++) {
        // operations += 1;
        if (entries[i] + entries[j] + entries[k] === 2020) {
          output = entries[i] * entries[j] * entries[k];
          break;
        }
      }
      if (output) break;
    }
    if (output) break;
  }

  return { output /*, operations */ };
};

// output: 165080960
run(func);
