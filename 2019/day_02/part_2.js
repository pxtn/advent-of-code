// Day 2: 1202 Program Alarm
// Part Two
let { input } = require("./input.js");
const { run } = require("../../util/run.js");

const func = () => {
  let output;
  // let operations = 0; // count the number of operations

  let noun = 0;
  let verb = 0;

  while (noun <= 99) {
    verb = 0;
    while (verb <= 99) {
      let insPtr = 0;
      const memory = [...input];

      memory[1] = noun;
      memory[2] = verb;

      while (memory[insPtr] != undefined) {
        const instruction = memory.slice(insPtr, insPtr + 4);
        const opcode = instruction[0];
        const params = instruction.slice(1);

        if (opcode === 1) {
          memory[params[2]] = memory[params[0]] + memory[params[1]];
        } else if (opcode === 2) {
          memory[params[2]] = memory[params[0]] * memory[params[1]];
        } else if (opcode === 99) {
          break;
        } else {
          console.error("invalid opcode", opcode);
          return;
        }
        insPtr += 4;
      }
      firstAddressValue = memory[0];

      if (firstAddressValue === 19690720) {
        break;
      }
      verb += 1;
    }

    if (firstAddressValue === 19690720) {
      break;
    }
    noun += 1;
  }
  output = 100 * noun + verb;

  return { output /*, operations */ };
};

// output: 4019
run(func);
