// Day 2: Password Philosophy
// Part Two
const { input } = require("./input.js");
const { run } = require("../../util/run.js");

const func = () => {
  let output;
  // let operations = 0; // count the number of operations

  const entries = input.split("\n").map((line) => {
    const [policy, password] = line.split(": ");
    const [positions, character] = policy.split(" ");
    const [pos1, pos2] = positions.split("-").map((pos) => Number(pos));
    return { password, character, pos1, pos2 };
  });

  const isPasswordValid = ({ password, character, pos1, pos2 }) => {
    const char1 = password[pos1 - 1];
    const char2 = password[pos2 - 1];

    if (char1 === char2) return false;
    if (char1 !== character && char2 !== character) return false;
    return true;
  };

  output = entries.filter(isPasswordValid).length;

  return { output /*, operations */ };
};

// output: 360
run(func);
