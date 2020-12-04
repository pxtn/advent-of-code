// Day 4: Passport Processing
// Part One
const { input } = require("./input.js");
const { run } = require("../../util/run.js");

// should ignore cid field
const requiredFields = [
  'byr',
  'iyr',
  'eyr',
  'hgt',
  'hcl',
  'ecl',
  'pid',
];

const func = () => {

  let output = 0;

  input.split('\n\n').forEach(entry => {
    if (checkIfFieldsAreAvailable(entry)) {
      output++;
    }
  });

  return {output};
}

const checkIfFieldsAreAvailable = (entry) => {
  let isValid = true;
  requiredFields.forEach(field => {
    if (!entry.includes(field)) {
      isValid = false;
    }
  })
  return isValid;
}

run(func);