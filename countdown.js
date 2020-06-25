const parseArgs =  require ("minimist")
const { stdout:log } = require ("single-line-log")
const { time } = parseArgs(process.argv)

//
//  Collect the time from agrv
//

if (!time) {
    throw new Error ("--time is required")
}

if (!parseInt(time)) {
    throw new Error ("--time must be a number")
}

const count = parseInt(time)
let message = "";

for (let i=0; i<count; i++) {
    message += "*";
}

log (message);

setTimeout( () => {
    log("overwrites line");
}, 2000)

//
//  Print stars in-line
//

//
// Run a timer and remove stars
//
