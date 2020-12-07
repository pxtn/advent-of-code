// Day 6: Custom Customs
// Part One
const { input } = require("./input.js");
const { run } = require("../../util/run.js");

const func = () => {

    let output = 0;

    input.split('\n\n').forEach(groupAnswers => {
        let answers = groupAnswers.replace(/\n/g, '')
        let filteredAnswers = Array.from(new Set(answers));
        output += filteredAnswers.length;
    });

    return {output};
}

run(func);