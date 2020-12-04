// Day 4: Passport Processing
// Part Two
const { input } = require("./input.js");
const { run } = require("../../util/run.js");

const validByr = (entry) => {
  return (entry.length === 4 && entry <= 2002 && entry >= 1920);
}

const validIyr = (entry) => {
  return (entry.length === 4 && entry <= 2020 && entry >= 2010);
}

const validEyr = (entry) => {
  return (entry.length === 4 && entry <= 2030 && entry >= 2020);
}

const validHgt = (entry) => {
  let number = entry.replace(/\D/g,'');

  if (entry.includes('in')) {
    return number <= 76 && number >= 59;
  } else if (entry.includes('cm')) {
    return number <= 193 && number >= 150;
  }
  return false;
}

const validHcl = (entry) => {
  return entry.match('^#(?:[0-9a-fA-F]{6})$') !== null;
}

const validEcl = (entry) => {
  const validEclStrings = [
    'amb',
    'blu',
    'brn',
    'gry',
    'grn',
    'hzl',
    'oth',
  ];
  return validEclStrings.indexOf(entry) > -1;
}

const validPid = (entry) => {
  let number = entry.replace(/\D/g,'');
  return number.length === 9;
}

// should ignore cid field
const requiredFields = [
  {name: 'byr', condition: validByr},
  {name: 'iyr', condition: validIyr},
  {name: 'eyr', condition: validEyr},
  {name: 'hgt', condition: validHgt},
  {name: 'hcl', condition: validHcl},
  {name: 'ecl', condition: validEcl},
  {name: 'pid', condition: validPid},
];

const func = () => {

  let output = 0;
  let passports = [];
  let kvpArray = [];

  input.split('\n\n').forEach(entry => {
    if (checkIfFieldsAreAvailable(entry)) {
      kvpArray = [];

      entry.split('\n').forEach(a => {
        a.split(' ').forEach(kvpString => {
          let splittedKvp = kvpString.split(':');

          if (splittedKvp[0] !== 'cid') {
            kvpArray.push({key: splittedKvp[0], value: splittedKvp[1]});
          }
        });
      });
      passports.push(kvpArray);
    }
  });

  passports.forEach(passportAttributes => {
    let isValid = true;
    passportAttributes.forEach(passportAttribute => {
      let found = '';
      found = requiredFields.find(requiredField =>
          requiredField.name === passportAttribute.key
      );
      if (!found.condition(passportAttribute.value)) {
        isValid = false;
      }
    });
    if (isValid) {
      output++;
    }
  });
  return {output};
}

const checkIfFieldsAreAvailable = (entry) => {
  let isValid = true;
  requiredFields.forEach(field => {
    if (!entry.includes(field.name)) {
      isValid = false;
    }
  })
  return isValid;
}

run(func);