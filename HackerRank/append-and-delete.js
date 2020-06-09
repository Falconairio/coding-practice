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

    // Complete the appendAndDelete function below.
    function appendAndDelete(s, t, k) {

        if(s.length >= 1 && s.length <= 100 && t.length >= 1 && t.length <= 100 && k >= 1 && k <= 100) {
            let string = s
            for(let i = k; k > 0; k--) {
                console.log(i)
                if(string !== t) {
                if(!t.includes(string)) {
                    string = string.substring(0, string.length - 1)
                } else {
                    let letter = t.charAt(string.length)
                    string = string.concat(letter)
                }
                } else {
                    string = string.concat("a")
                }
            } 
            if(string !== t) {
                return "No"
            } else {
                return "Yes"
            }
        } else if(s === t){
            return "Yes"
        } else {
            return "No"
        }
    }
    function main() {
        const ws = fs.createWriteStream(process.env.OUTPUT_PATH);

        const s = readLine();

        const t = readLine();

        const k = parseInt(readLine(), 10);

        let result = appendAndDelete(s, t, k);

        ws.write(result + "\n");

        ws.end();
    }
