// Day 5: Binary Boarding
// Part One
const { input } = require("./input.js");
const { run } = require("../../util/run.js");

const func = () => {

    let output = 0;
    let seatArray = [];

    input.split('\n').forEach(seatSequence => {
        let binaryRow = seatSequence.substr(0, 7).replace(/B/g,1).replace(/F/g,0);
        let binaryColumn = seatSequence.substr(7, 3).replace(/R/g,1).replace(/L/g,0);
        seatArray.push({initialSequence: seatSequence, binarySequence: binaryRow + binaryColumn, binaryRow: binaryRow, binaryColumn: binaryColumn});
    })

    seatArray.sort((a, b) => a.binarySequence - b.binarySequence);
    const seatWithHighestId = seatArray.pop();
    output = parseInt(seatWithHighestId.binaryRow, 2) * 8 + parseInt(seatWithHighestId.binaryColumn, 2);

    return {output};
}

run(func);