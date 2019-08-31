// import fs from "fs";
const fs = require("fs");

function readFileSync(path) {
  const rawData = fs.readFileSync(path);
  return JSON.parse(rawData);
}

function writeFileSync() {
  console.log("writeFileSync");
}

module.exports.readFileSync = readFileSync;
module.exports.writeFileSync = writeFileSync;
