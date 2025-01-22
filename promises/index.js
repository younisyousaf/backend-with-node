function delay(time) {
  return new Promise((resolve, reject) => {
    // Async Function will always return a Promise
    //await will always wait for a Promise
    setTimeout(resolve, time);
  });
}
console.log("Promise Lecture Start.");
delay(3000).then(() => {
  console.log("Promise Resolved.");
  console.log("Promise Lecture End.");
});

function divide(num1, num2) {
  return new Promise((resolve, reject) => {
    if (num2 === 0) {
      reject("Can't Divide by zero");
      return;
    }
    resolve(num1 / num2);
  });
}
divide(10, 0)
  .then((result) => {
    console.log("Result: ", result);
  })
  .catch((error) => {
    console.log("Error: ", error);
  });
