// Day 5: Binary Boarding
// Part Two
const { input } = require("./input.js");
const { run } = require("../../util/run.js");

const func = () => {

    let output = 0;
    let seatArray = [];

    input.split('\n').forEach(seatSequence => {
        let binaryRow = seatSequence.substr(0, 7).replace(/B/g,1).replace(/F/g,0);
        let binaryColumn = seatSequence.substr(7, 3).replace(/R/g,1).replace(/L/g,0);

        let id = parseInt(binaryRow, 2) * 8 + parseInt(binaryColumn, 2);

        seatArray.push({id: id});
    })

    seatArray.sort((a, b) => a.id - b.id);

    for (let i = 1 ; i < seatArray.length; i++) {
        if (seatArray[i].id - seatArray[i-1].id !== 1) {
           output = seatArray[i].id -1;
        }
    }

    return {output};
}

run(func);