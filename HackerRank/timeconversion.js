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
    inputString = inputString.trim().split('\n').map(str => str.trim());

    main();
});

function readLine() {
    return inputString[currentLine++];
}

/*
 * Complete the timeConversion function below.
 */
function timeConversion(s) {
  let hours = s.substring(0,2);
  let modifier = s.substring(s.length - 2, s.length)
  let string
  if(modifier === "PM" && hours !== "12") {
      hours = String(parseInt(hours) + 12)
      string = hours.concat(s.substring(2, s.length - 2))
  } else if(modifier === "AM" && hours === "12") {
    hours = "00";
    string = hours.concat(s.substring(2, s.length - 2))
  } else {
    string = hours.concat(s.substring(2, s.length - 2))
  }
  return string
}

function main() {
    const ws = fs.createWriteStream(process.env.OUTPUT_PATH);

    const s = readLine();

    let result = timeConversion(s);

    ws.write(result + "\n");

    ws.end();
}
