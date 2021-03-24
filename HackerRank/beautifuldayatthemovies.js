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

// Complete the beautifulDays function below.
function beautifulDays(i, j, k) {
    let beautifulArr = []
    let beautifulCount = 0
    for(let n = i; n <= j; n++) {
        beautifulArr.push(n)
    }
    for(let n = 0; n < beautifulArr.length; n++) {
       let num2 = String(beautifulArr[n]).split("").reverse().join("");
        for(let i = 0; i < num2.length; i++) {
            if(num2[i] !== "0" || num2.length == 1) {
                break;
            } else {
                num2 = num2.slice(i, num2.length)
            }
        }
        num2 = parseInt(num2)
        let check = Math.abs(beautifulArr[n] - num2)/k
        if(check % 1 === 0) {
            beautifulCount += 1
        }
    }
    console.log(beautifulCount)
    return beautifulCount
}

function main() {
    const ws = fs.createWriteStream(process.env.OUTPUT_PATH);

    const ijk = readLine().split(' ');

    const i = parseInt(ijk[0], 10);

    const j = parseInt(ijk[1], 10);

    const k = parseInt(ijk[2], 10);

    let result = beautifulDays(i, j, k);

    ws.write(result + "\n");

    ws.end();
}
