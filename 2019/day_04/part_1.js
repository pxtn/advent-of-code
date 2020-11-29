// Day 4: Secure Container
// Part One
let { input } = require("./input.js");

const [min, max] = input.split("-").map((str) => Number(str));

const hasDoubleAdjacentDigits = (num) => {
  for (let i = 0; i < num.length - 1; i++) {
    if (num[i] === num[i + 1]) {
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

const output = Array(max - min)
  .fill(null)
  .map((_, i) => `${min + i}`)
  .filter(hasDoubleAdjacentDigits)
  .filter(digitsNeverDecrease).length;

console.log(output); // 579
