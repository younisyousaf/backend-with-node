// module.exports
//require -> import -> comes from common js
// Every Module is wrapped in a function before it is executed

//module wrapper
// (function (exports, require, module, __filename, __dirname) {
//code here
// });

const firstModule = require("./first-module");
console.log(firstModule.add(1, 2));
const { subtract, divide } = require("./first-module");
try {
  console.log("Trying to Divide by Zero");
  let result = divide(5, 0);
  console.log(result);
} catch (error) {
  console.log("message: ", error.message);
}
