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

// Complete the staircase function below.
function staircase(n) {
    let string = ""
    for(let i = n; i > 0; i--) {
        string = "";
        for(let j = 1; j <= n; j++) {
            if(j >= i) {
                string = string.concat("#")
            } else {
                string = string.concat(" ")
            }
        }
        console.log(string)
    }
}

function main() {
    const n = parseInt(readLine(), 10);

    staircase(n);
}
