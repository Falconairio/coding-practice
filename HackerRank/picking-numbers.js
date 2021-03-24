'use strict';

const fs = require('fs');

process.stdin.resume();
process.stdin.setEncoding('utf-8');

let inputString = '';
let currentLine = 0;

process.stdin.on('data', function(inputStdin) {
    inputString += inputStdin;
});

process.stdin.on('end', function() {
    inputString = inputString.split('\n');

    main();
});

function readLine() {
    return inputString[currentLine++];
}

/*
 * Complete the 'pickingNumbers' function below.
 *
 * The function is expected to return an INTEGER.
 * The function accepts INTEGER_ARRAY a as parameter.
 */

function pickingNumbers(a) {
    let maxLength = 0;
    for(let i = 0; i < a.length; i++) {
        let arr = [a[i]]
        let baseline = a[i];
        for(let j = 0; j < a.length; j++) {
            if(a[j] < baseline) {
                baseline = a[j]
            }
            if(j !== i) {
                if (Math.abs(a[i] - a[j]) <= 1 && Math.abs(a[j] - a[i]) <= 1) {
                    if (a[j] < (baseline + baseline * 2)) {
                    arr.push(a[j])
                    }
                }
            }
        }
        if (arr.length > maxLength) {
            console.log(arr)
            maxLength = arr.length
        }
    }
    return maxLength
}

function main() {
    const ws = fs.createWriteStream(process.env.OUTPUT_PATH);

    const n = parseInt(readLine().trim(), 10);

    const a = readLine().replace(/\s+$/g, '').split(' ').map(aTemp => parseInt(aTemp, 10));

    const result = pickingNumbers(a);

    ws.write(result + '\n');

    ws.end();
}
