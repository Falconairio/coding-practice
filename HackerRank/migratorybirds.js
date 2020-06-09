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

// Complete the migratoryBirds function below.
function migratoryBirds(arr) {

    let frequencyOf = 0;
    let popular = null;
    let checkedArr = [];

    for(let i = 0; i < arr.length; i++) {
        if(!checkedArr.includes(arr[i])) {
            let num = arr[i];
            let count = 0;
            for(let i = 0; i < arr.length; i++) {
                if(arr[i] === num) {
                    count += 1;
                }
            }
            if(count > frequencyOf) {
                frequencyOf = count;
                popular = num
            } else if(count === frequencyOf) {
                if(num < popular) {
                    popular = num
                }
            }
            checkedArr.push(arr[i])
        }
    }
    return popular

}

function main() {
    const ws = fs.createWriteStream(process.env.OUTPUT_PATH);

    const arrCount = parseInt(readLine().trim(), 10);

    const arr = readLine().replace(/\s+$/g, '').split(' ').map(arrTemp => parseInt(arrTemp, 10));

    const result = migratoryBirds(arr);

    ws.write(result + '\n');

    ws.end();
}
