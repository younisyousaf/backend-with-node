const fs = require("fs");

const path = require("path");

const dataFolder = path.join(__dirname, "data");
if (!fs.existsSync(dataFolder)) {
  fs.mkdirSync(dataFolder);
  console.log("Data folder created");
}

//Synchronous Way of creating a file
const filePath = path.join(dataFolder, "data.txt");
fs.writeFileSync(filePath, "Hello From Node JS.");
console.log("File Created");

// Reading a file
const readContentFromFile = fs.readFileSync(filePath, "utf-8");
console.log("File Content: ", readContentFromFile);

//Appending new data to the file
fs.appendFileSync(filePath, "New Data Appended");
const readContentFromFile2 = fs.readFileSync(filePath, "utf-8");
console.log("File Content: ", readContentFromFile2);

//Asynchronous Way of creating a file
const filePath2 = path.join(dataFolder, "async-example.txt");
fs.writeFile(filePath2, "Hello From Async JS.", (err) => {
  if (err) throw err;
  console.log("File Created");
  fs.appendFile(
    filePath2,
    "\nThis is another line added to async file",
    (err) => {
      if (err) throw err;
      console.log("New Line Added to Async File");

      //Reading Updated Content
      fs.readFile(filePath2, "utf-8", (err, data) => {
        if (err) throw err;
        console.log("File Content From Async: ", data);
      });
    }
  );
});

// Reading a file
fs.readFile(filePath2, "utf-8", (err, data) => {
  if (err) throw err;
  console.log("File Content From Async: ", data);
});
