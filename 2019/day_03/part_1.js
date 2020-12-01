// Day 3: Crossed Wires
// Part One
let { input } = require("./input.js");
const { run } = require("../../util/run.js");

const func = () => {
  let output;
  // let operations = 0; // count the number of operations

  const wire1 = input[0];
  const wire2 = input[1];

  // 1 = wire1 runs through this point
  // (2 = wire2 runs through this point)
  // 3 = both wires run through this point
  const grid = new Map();

  let xPos = 0;
  let yPos = 0;
  wire1.forEach((path) => {
    const direction = path[0];
    const distance = Number(path.substr(1));

    switch (direction) {
      case "U":
        for (let i = 1; i <= distance; i++) {
          if (!grid.get(yPos - i)) {
            grid.set(yPos - i, new Map());
          }
          const row = grid.get(yPos - i);
          row.set(xPos, 1);
        }
        yPos -= distance;
        break;
      case "D":
        for (let i = 1; i <= distance; i++) {
          if (!grid.get(yPos + i)) {
            grid.set(yPos + i, new Map());
          }
          const row = grid.get(yPos + i);
          row.set(xPos, 1);
        }
        yPos += distance;
        break;
      case "L":
        for (let i = 1; i <= distance; i++) {
          if (!grid.get(yPos)) {
            grid.set(yPos, new Map());
          }
          const row = grid.get(yPos);
          row.set(xPos - i, 1);
        }
        xPos -= distance;
        break;
      case "R":
        for (let i = 1; i <= distance; i++) {
          if (!grid.get(yPos)) {
            grid.set(yPos, new Map());
          }
          const row = grid.get(yPos);
          row.set(xPos + i, 1);
        }
        xPos += distance;
        break;
      default:
        console.error("unknown direction", direction);
        return;
    }
  });

  xPos = 0;
  yPos = 0;
  wire2.forEach((path) => {
    const direction = path[0];
    const distance = Number(path.substr(1));

    switch (direction) {
      case "U":
        for (let i = 1; i <= distance; i++) {
          if (!grid.get(yPos - i)) {
            grid.set(yPos - i, new Map());
          }
          const row = grid.get(yPos - i);
          if (row.get(xPos) === 1) {
            row.set(xPos, 3);
          }
        }
        yPos -= distance;
        break;
      case "D":
        for (let i = 1; i <= distance; i++) {
          if (!grid.get(yPos + i)) {
            grid.set(yPos + i, new Map());
          }
          const row = grid.get(yPos + i);
          if (row.get(xPos) === 1) {
            row.set(xPos, 3);
          }
        }
        yPos += distance;
        break;
      case "L":
        for (let i = 1; i <= distance; i++) {
          if (!grid.get(yPos)) {
            grid.set(yPos, new Map());
          }
          const row = grid.get(yPos);
          if (row.get(xPos - i) === 1) {
            row.set(xPos - i, 3);
          }
        }
        xPos -= distance;
        break;
      case "R":
        for (let i = 1; i <= distance; i++) {
          if (!grid.get(yPos)) {
            grid.set(yPos, new Map());
          }
          const row = grid.get(yPos);
          if (row.get(xPos + i) === 1) {
            row.set(xPos + i, 3);
          }
        }
        xPos += distance;
        break;
      default:
        console.error("unknown direction", direction);
        return;
    }
  });

  output = Infinity;

  grid.forEach((row, y) => {
    row.forEach((value, x) => {
      if (value === 3) {
        output = Math.min(output, Math.abs(y) + Math.abs(x));
      }
    });
  });

  return { output /*, operations */ };
};

// output: 1285
run(func);
