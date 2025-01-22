const eventEmitter = require("events");

const myFirstEmitter = new eventEmitter();
//REGISTER A LISTENER
myFirstEmitter.on("greet", (name) => {
  console.log(`Hello ${name}`);
});

//EMIT AN EVENT
myFirstEmitter.emit("greet", "John Doe");
