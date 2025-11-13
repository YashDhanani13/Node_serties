const http = require("http");

const arg = process.argv;
const port = arg[2];

// create the dynmaic port

http
  .createServer((req, res) => {
    res.write("testing input from cmd");
    res.end();
  })
  .listen(port);
