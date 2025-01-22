function delay(time) {
  return new Promise((resolve, reject) => {
    setTimeout(resolve, time);
  });
}

async function delayedGreet(name) {
  await delay(3000);
  console.log(name);
}

delayedGreet("Younis Yousaf");

async function divide(num1, num2) {
  try {
    if (num2 === 0) {
      throw new Error("Cannot divide by zero");
    }
    return num1 / num2;
  } catch (error) {
    console.error(error);
    return null;
  }
}

async function main() {
  console.log(await divide(10, 2));
  console.log(await divide(10, 0));
}

main();
