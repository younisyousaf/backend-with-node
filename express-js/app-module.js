const express = require("express");

const app = express();

// application label setting
app.set("view engine", "ejs");
// is used to set the view engine for the application.
// The default view engine for express is jade.
// The above line of code is setting the view engine to ejs.
// This is a templating engine which helps us create dynamic web pages.
// ejs is similar to html but it has some special features like being able to use
// variables and conditionals directly in the template.
// This is very useful for displaying data from a database or making decisions on
// what content to display.

// routing
app.get("/", (request, response) => {
  response.render("index", {
    title: "Home",
  });
});
app.post("/api/data", (request, response) => {
  response.json({
    message: "Data Received",
    data: response.body,
  });
});

app.use((error, request, response, next) => {
  response.status(500).send("Something went wrong");
});
