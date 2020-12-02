// Day 2: Password Philosophy
// Part One
const { input } = require("./input.js");
const { run } = require("../../util/run.js");

const func = () => {
  let output;
  // let operations = 0; // count the number of operations

  const entries = input.split("\n").map((line) => {
    const [policy, password] = line.split(": ");
    const [range, character] = policy.split(" ");
    const [min, max] = range.split("-").map((s) => Number(s));
    return { password, character, min, max };
  });

  const isPasswordValid = ({ password, character, min, max }) => {
    let charCounter = 0;

    for (let i = 0; i < password.length; i++) {
      // operations += 1;
      if (password[i] === character) {
        charCounter += 1;
      }
    }
    return charCounter >= min && charCounter <= max;
  };

  output = entries.filter(isPasswordValid).length;

  return { output /*, operations */ };
};

// output: 542
run(func);
