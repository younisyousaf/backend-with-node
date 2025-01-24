const express = require("express");
const app = express();

// define middleware function
const myMiddleware = (req, res, next) => {
  console.log("Middleware function is executed");
  next();
};

app.use(myMiddleware);

app.get("/", (req, res) => {
  res.send("Home Page");
});
app.get("/about", (req, res) => {
  res.send("About Page");
});

app.listen(3000, () => {
  console.log("Server is running on http://localhost:3000");
});
