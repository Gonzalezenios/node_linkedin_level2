const https = require("https");
const fs = require("fs");

const resquest = https.get(
  "https://en.wikipedia.org/wiki/Charlie_Brown",
  (res) => {
    let download = fs.createWriteStream("./Charlie_brown.html");
    res.pipe(download);

    res.on("end", () => {
      console.log("Response finished Wiki page downloaded");
    });
  }
);

resquest.end(); 