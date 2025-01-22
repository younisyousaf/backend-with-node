const fs = require("fs");

fs.readFile("index.txt", "utf8", (err, data) => {
  if (err) {
    console.log(err);
    return;
  }
  const modifyFileData = data.toUpperCase();
  fs.writeFile("output.txt", modifyFileData, (err) => {
    if (err) {
      console.log(err);
      return;
    }
    console.log("Data has been Written successfully.");
    fs.readFile("index.txt", "utf8", (err, data) => {
      if (err) {
        console.log(err);
        return;
      }
      console.log(data);
    });
  });
});
