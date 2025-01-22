const http = require("http");

const server = http.createServer((request, response) => {
  // Request: Params, Body, Payload, Headers
  //   console.log("Request:", request);

  response.writeHead(200, {
    "Content-Type": "text/plain",
  });
  response.end("Hello World");
});

const PORT = 3000;
server.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
