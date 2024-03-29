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

// Complete the sockMerchant function below.
function sockMerchant(n, ar) {

    let checkedarr = [];
    let pairs = 0;
    for(let i = 0; i < ar.length; i++) {
        if(!checkedarr.includes(ar[i])) {
            checkedarr.push(ar[i])
            let check = ar[i]
            let count = 1;
            for(let j = 0; j < ar.length; j++) {
                if(j !== i) {
                    if(ar[j] === check) {
                        count +=1
                    }
                }
            } 
            pairs += Math.floor(count/2)
        }
    }
    return pairs
}

function main() {
    const ws = fs.createWriteStream(process.env.OUTPUT_PATH);

    const n = parseInt(readLine(), 10);

    const ar = readLine().split(' ').map(arTemp => parseInt(arTemp, 10));

    let result = sockMerchant(n, ar);

    ws.write(result + "\n");

    ws.end();
}
