'use strict';

const fs = require('fs');

process.stdin.resume();
process.stdin.setEncoding('utf-8');

let inputString = '';
let currentLine = 0;

process.stdin.on('data', inputStdin => {
    inputString += inputStdin;
});

process.stdin.on('end', _ => {
    inputString = inputString.replace(/\s*$/, '')
        .split('\n')
        .map(str => str.replace(/\s*$/, ''));

    main();
});

function readLine() {
    return inputString[currentLine++];
}

// Complete the countingValleys function below.
function countingValleys(n, s) {
    let noValleys = 0;
    let position = 0;

    for(let i = 0; i < n; i++) {
        let step = s.charAt(i)
        if(position === -1 && step === "U") {
            noValleys +=1
        }
        if(step === "D") {
            position -=1
        } else {
            position +=1
        }
    }
    return noValleys
}

function main() {
    const ws = fs.createWriteStream(process.env.OUTPUT_PATH);

    const n = parseInt(readLine(), 10);

    const s = readLine();

    let result = countingValleys(n, s);

    ws.write(result + "\n");

    ws.end();
}
