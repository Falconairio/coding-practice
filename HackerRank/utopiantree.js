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

// Complete the utopianTree function below.
function utopianTree(n) {
    let treeLength = 1
    let springRec = (n) => {
        return n * 2
    }
    let summerRec = (n) => {
        return n + 1
    }
    for(let i = 1; i <= n; i++) {
        let check = i % 2
        switch (check) {
            case 1: 
                treeLength = springRec(treeLength)
                break;
            case 0:
                treeLength = summerRec(treeLength)
                break;
        }
    }
    return treeLength
}


function main() {
    const ws = fs.createWriteStream(process.env.OUTPUT_PATH);

    const t = parseInt(readLine(), 10);

    for (let tItr = 0; tItr < t; tItr++) {
        const n = parseInt(readLine(), 10);

        let result = utopianTree(n);

        ws.write(result + "\n");
    }

    ws.end();
}
