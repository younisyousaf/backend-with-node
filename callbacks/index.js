// Callback: It is a funtion that is passed as an argument to another function until an asynchronous operation is completed.
// Callback Hell: (Pyramid of Doom) It is a situation where you have multiple nested callbacks.
// setTimeout(() => {
//   console.log("First");
//   setTimeout(() => {
//     console.log("Second");
//     setTimeout(() => {
//       console.log("Third");
//     }, 1000);
//   }, 1000);
// }, 1000);

const fs = require("fs");

function person(name, callbackFn) {
  console.log("Name: " + name);
  callbackFn();
}
function address() {
  console.log("Abbottabad, Pakistan");
}
person("Younis Yousaf", address);

fs.readFile("index.txt", "utf8", (err, data) => {
  if (err) {
    console.log(err);
    return;
  } else {
    console.log(data);
  }
});
