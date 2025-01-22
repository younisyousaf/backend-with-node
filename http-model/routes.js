const http = require("http");

const server = http.createServer((request, response) => {
  const url = request.url;
  if (request.url === "/") {
    response.writeHead(200, {
      "Content-Type": "text/plain",
    });
    response.end("Home Page");
  } else if (request.url === "/about") {
    response.writeHead(200, {
      "Content-Type": "text/plain",
    });
    response.end("About Page");
  } else {
    response.writeHead(404, {
      "Content-Type": "text/plain",
    });
    response.end("Page Not Found");
  }
});

const port = 3000;
server.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});
