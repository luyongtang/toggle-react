const fileManager = require("./common/fileManager");

let path = "toggle.json";
const toggle = fileManager.readFileSync(path);
console.log("toggle file: ", toggle);
fileManager.writeFileSync();
