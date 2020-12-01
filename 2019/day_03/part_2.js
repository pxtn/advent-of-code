// Day 3: Crossed Wires
// Part Two
let { input } = require("./input.js");
const { run } = require("../../util/run.js");

const func = () => {
  let output;
  // let operations = 0; // count the number of operations

  const wire1 = input[0];
  const wire2 = input[1];

  const grid = new Map();

  let totalDistance = 0;
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
          row.set(xPos, { wire1: totalDistance + i });
        }
        yPos -= distance;
        break;
      case "D":
        for (let i = 1; i <= distance; i++) {
          if (!grid.get(yPos + i)) {
            grid.set(yPos + i, new Map());
          }
          const row = grid.get(yPos + i);
          row.set(xPos, { wire1: totalDistance + i });
        }
        yPos += distance;
        break;
      case "L":
        for (let i = 1; i <= distance; i++) {
          if (!grid.get(yPos)) {
            grid.set(yPos, new Map());
          }
          const row = grid.get(yPos);
          row.set(xPos - i, { wire1: totalDistance + i });
        }
        xPos -= distance;
        break;
      case "R":
        for (let i = 1; i <= distance; i++) {
          if (!grid.get(yPos)) {
            grid.set(yPos, new Map());
          }
          const row = grid.get(yPos);
          row.set(xPos + i, { wire1: totalDistance + i });
        }
        xPos += distance;
        break;
      default:
        console.error("unknown direction", direction);
        return;
    }
    totalDistance += distance;
  });

  totalDistance = 0;
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
          const value = row.get(xPos);
          if (!value || value.wire2 == undefined) {
            row.set(xPos, { ...value, wire2: totalDistance + i });
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
          const value = row.get(xPos);
          if (!value || value.wire2 == undefined) {
            row.set(xPos, { ...value, wire2: totalDistance + i });
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
          const value = row.get(xPos - i);
          if (!value || value.wire2 == undefined) {
            row.set(xPos - i, { ...value, wire2: totalDistance + i });
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
          const value = row.get(xPos + i);
          if (!value || value.wire2 == undefined) {
            row.set(xPos + i, { ...value, wire2: totalDistance + i });
          }
        }
        xPos += distance;
        break;
      default:
        console.error("unknown direction", direction);
        return;
    }
    totalDistance += distance;
  });

  output = Infinity;

  grid.forEach((row) => {
    row.forEach((value) => {
      if (value && value.wire1 != undefined && value.wire2 != undefined) {
        output = Math.min(output, value.wire1 + value.wire2);
      }
    });
  });

  return { output /*, operations */ };
};

// output: 14228
run(func);
