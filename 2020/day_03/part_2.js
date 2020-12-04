// Day 3: Toboggan Trajectory
// Part Two
const { input } = require("./input.js");
const { run } = require("../../util/run.js");

const func = () => {
  let output = 1;
  let position = 0;
  let treeCounter = 0;
  const rows = input.split('\n');

  const routes = [
    {right: 1, down: 1},
    {right: 3, down: 1},
    {right: 5, down: 1},
    {right: 7, down: 1},
    {right: 1, down: 2},
  ];

  routes.forEach(route => {
    for (let i = 0; i < rows.length; i += route.down) {
      position = ((i / route.down) * route.right) % rows[i].length;

      if (rows[i][position] === '#') {
        treeCounter += 1;
      }
    }
    output *= treeCounter;
    treeCounter = 0;
  });
  return {output};
};
run(func);
