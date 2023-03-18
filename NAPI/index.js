const getOperation = require("./build/Release/operations");

let result;

console.log("Result of C++ function:");
result = getOperation(3, 7);
console.log(result);
