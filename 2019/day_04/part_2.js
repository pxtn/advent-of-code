// Day 4: Secure Container
// Part Two
let { input } = require("./input.js");
const { run } = require("../../util/run.js");

const func = () => {
  let output;
  // let operations = 0; // count the number of operations

  const [min, max] = input.split("-").map((str) => Number(str));

  const hasDoubleAdjacentDigits = (num) => {
    for (let i = 0; i < num.length - 1; i++) {
      if (
        num[i] === num[i + 1] &&
        num[i] !== num[i - 1] &&
        num[i] !== num[i + 2]
      ) {
        return true;
      }
    }
    return false;
  };

  const digitsNeverDecrease = (num) => {
    for (let i = 0; i < num.length - 1; i++) {
      if (num[i] > num[i + 1]) {
        return false;
      }
    }
    return true;
  };

  output = Array(max - min)
    .fill(null)
    .map((_, i) => `${min + i}`)
    .filter(hasDoubleAdjacentDigits)
    .filter(digitsNeverDecrease).length;

  return { output /*, operations */ };
};

// output: 358
run(func);
