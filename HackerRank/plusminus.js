'use strict';

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

// Complete the plusMinus function below.
function plusMinus(arr) {
    let posnum = 0, negnum = 0, znum = 0;
    arr.forEach(num => {
        if(num > 0) {
            posnum +=1
        } else if(num < 0) {
            negnum +=1
        } else {
            znum +=1
        }
    });
    let posfrac = posnum/arr.length; let negfrac = negnum/arr.length; let zfrac = znum/arr.length
    console.log(posfrac)
    console.log(negfrac)
    console.log(zfrac)
}

function main() {
    const n = parseInt(readLine(), 10);

    const arr = readLine().split(' ').map(arrTemp => parseInt(arrTemp, 10));

    plusMinus(arr);
}
