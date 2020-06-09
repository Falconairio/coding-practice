let deez = 10n

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

// Complete the extraLongFactorials function below.
function extraLongFactorials(num) {
    let number = 1n;
    for(let i = num; i > 0; i--) {
        number *= BigInt(i)
    }
    console.log(number.toString())
}

function main() {
    const n = parseInt(readLine(), 10);

    extraLongFactorials(n);
}
