const express = require("express");
const path = require("path");
const app = express();
// Set the view engine to ejs

app.set("view engine", "ejs");

//set the directory for the views
app.set("views", path.join(__dirname, "views"));

const products = [
  { id: 1, name: "Laptop", price: 2000 },
  { id: 2, name: "Mobile", price: 1000 },
  { id: 3, name: "Tablet", price: 500 },
  { id: 4, name: "Smart Watch", price: 300 },
];

app.get("/", (req, res) => {
  res.render("home", { title: "Home Page", products: products });
});
app.get("/about", (req, res) => {
  res.render("about", { title: "About Page" });
});

app.listen(3000, () => {
  console.log("Server is running on port 3000");
});
